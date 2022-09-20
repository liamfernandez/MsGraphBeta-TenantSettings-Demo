# Tenant Settings Demo
---
## Description
This application was created to demonstrate functionality of the new OneDrive/SharePoint Tenant Settings endpoint on Microsoft Graph.
* [Ms-Graph Docs | SharePoint Tenant Settings](https://learn.microsoft.com/en-us/graph/api/resources/tenantadmin-settings?view=graph-rest-beta)

This is a Create-React-App with ASP Net.Core backend. There is a single web API set up that allows READ and UPDATE calls to the underlying Ms-Graph API. This application relies on application-only permissions so calls are made without a signed-in user. 
* This application was created solely for demo purposes but can be adapted for any user to set up in their M365 tenant.

## Setup
1. Register a new app in your tenant at [portal.azure.com](https://portal.azure.com) > Azure Active Directory > App Registrations
2. Note down your tenant (directory) ID & Client (app) Id
3. Create a client secret for your application > Certificates & Secrets pane in the left-nav menu once you are managing your app.
4. Clone this project to your desired directory
    * Open the .sln file in the root folder with Visual Studio 2022
6. Take those 3 values and fill them in the `appSettings.json` file in the project. 
![image](https://user-images.githubusercontent.com/12795629/191163577-d0d94de1-c178-4edc-b814-f65da8674c44.png)
7. Now you can run the project from Visual studio using the main run/play button
