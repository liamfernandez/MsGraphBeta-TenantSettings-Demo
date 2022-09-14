using Microsoft.Graph.TenantAdmin;
using System.Runtime.Serialization;

namespace backend_and_frontend_in_one
{
    public class TenantSettings
    {
        [DataMember(Name = "allowedDomainGuidsForSyncApp")]
        public IEnumerable<Guid>? AllowedDomainGuidsForSyncApp { get; set; }

        [DataMember(Name = "availableManagedPathsForSiteCreation")]
        public IEnumerable<string>? AvailableManagedPathsForSiteCreation { get; set; }

        [DataMember(Name = "deletedUserPersonalSiteRetentionPeriodInDays")]
        public int DeletedUserPersonalSiteRetentionPeriodInDays { get; set; }

        [DataMember(Name = "excludedFileExtensionsForSyncApp")]
        public IEnumerable<string>? ExcludedFileExtensionsForSyncApp { get; set; }

        [DataMember(Name = "idleSessionSignOut")]
        public idleSessionSignOutFacet? IdleSessionSignOut { get; set; }

        [DataMember(Name = "imageTaggingOption")]
        public ImageTaggingChoice ImageTaggingOption { get; set; }

        [DataMember(Name = "isCommentingOnSitePagesEnabled")]
        public bool? IsCommentingOnSitePagesEnabled { get; set; }

        [DataMember(Name = "isFileActivityNotificationEnabled")]
        public bool? IsFileActivityNotificationEnabled { get; set; }

        [DataMember(Name = "isLegacyAuthProtocolsEnabled")]
        public bool? IsLegacyAuthProtocolsEnabled { get; set; }

        [DataMember(Name = "isLoopEnabled")]
        public bool? IsLoopEnabled { get; set; }

        [DataMember(Name = "isMacSyncAppEnabled")]
        public bool? IsMacSyncAppEnabled { get; set; }

        [DataMember(Name = "isResharingByExternalUsersEnabled")]
        public bool IsResharingByExternalUsersEnabled { get; set; }

        [DataMember(Name = "isSharePointMobileNotificationEnabled")]
        public bool IsSharePointMobileNotificationEnabled { get; set; }

        [DataMember(Name = "isSharePointNewsfeedEnabled")]
        public bool IsSharePointNewsfeedEnabled { get; set; }

        [DataMember(Name = "isSiteCreationEnabled")]
        public bool IsSiteCreationEnabled { get; set; }

        [DataMember(Name = "isSiteCreationUiEnabled")]
        public bool IsSiteCreationUiEnabled { get; set; }

        [DataMember(Name = "isSitePagesCreationEnabled")]
        public bool IsSitePagesCreationEnabled { get; set; }

        [DataMember(Name = "isSitesStorageLimitAutomatic")]
        public bool IsSitesStorageLimitAutomatic { get; set; }

        [DataMember(Name = "isSyncButtonHiddenOnPersonalSite")]
        public bool IsSyncButtonHiddenOnPersonalSite { get; set; }

        [DataMember(Name = "isUnmanagedSyncAppForTenantRestricted")]
        public bool IsUnmanagedSyncAppForTenantRestricted { get; set; }

        [DataMember(Name = "personalSiteDefaultStorageLimitInMb")]
        public long PersonalSiteDefaultStorageLimitInMB { get; set; }

        [DataMember(Name = "requireAcceptingUserToMatchInvitedUser")]
        public bool RequireAcceptingUserToMatchInvitedUser { get; set; }

        [DataMember(Name = "sharingAllowedDomainList")]
        public IEnumerable<string>? SharingAllowedDomainList { get; set; }

        [DataMember(Name = "sharingBlockedDomainList")]
        public IEnumerable<string>? SharingBlockedDomainList { get; set; }

        [DataMember(Name = "sharingCapability")]
        public SharingCapabilities SharingCapability { get; set; }

        [DataMember(Name = "sharingDomainRestrictionMode")]
        public SharingDomainRestrictionMode SharingDomainRestrictionMode { get; set; }

        [DataMember(Name = "siteCreationDefaultManagedPath")]
        public string? SiteCreationDefaultManagedPath { get; set; }

        [DataMember(Name = "siteCreationDefaultStorageLimitInMb")]
        public int SiteCreationDefaultStorageLimitInMB { get; set; }

        [DataMember(Name = "tenantDefaultTimezone")]
        public string? TenantDefaultTimezone { get; set; }
    }

    public class idleSessionSignOutFacet
    {
        [DataMember(Name = "enabled")]
        public bool Enabled { get; set; }

        [DataMember(Name = "warnAfterInSeconds")]
        public long WarnAfterInSeconds { get; set; }

        [DataMember(Name = "signOutAfterInSeconds")]
        public long SignOutAfterInSeconds { get; set; }
    }
}