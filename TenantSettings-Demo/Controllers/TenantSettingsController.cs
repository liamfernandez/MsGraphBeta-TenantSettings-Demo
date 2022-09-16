using Microsoft.AspNetCore.Mvc;
using Microsoft.Graph;
using Azure.Identity;
using Newtonsoft.Json.Converters;

namespace TenantSettings_Demo.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TenantSettingsController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private GraphServiceClient client;

        public TenantSettingsController(IConfiguration configuration)
        {
            _configuration = configuration;

            string clientId = _configuration.GetValue<string>("AzureAd:ClientId");
            string tenantId = _configuration.GetValue<string>("AzureAd:TenantId");
            string clientSecret = _configuration.GetValue<string>("AzureAd:ClientSecret");

            ClientSecretCredential credentials = new ClientSecretCredential(tenantId, clientId, clientSecret);
            this.client = new GraphServiceClient(credentials);
        }

        [HttpGet]
        public Microsoft.Graph.TenantAdmin.Settings Get()
        {
            var settings = client.Admin.Sharepoint.Settings.Request().GetAsync().Result;
            return settings;
        }

        [HttpPatch]
        public Microsoft.Graph.TenantAdmin.Settings Patch([FromBody] string settingsAsJson)
        {
            Microsoft.Graph.TenantAdmin.Settings settings = Newtonsoft.Json.JsonConvert.DeserializeObject<Microsoft.Graph.TenantAdmin.Settings>(settingsAsJson);
            var response = client.Admin.Sharepoint.Settings.Request().UpdateAsync(settings).Result;
            return response;
        }
    }
}