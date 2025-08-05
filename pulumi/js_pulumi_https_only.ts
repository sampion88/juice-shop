import * as pulumi from "@pulumi/pulumi";
import * as azure_native from "@pulumi/azure-native";

const storageAccount = new azure_native.storage.StorageAccount("storageAccount", {
    accountName: "sto4445",
    enableExtendedGroups: true,
    enableHttpsTrafficOnly: false,
    enableNfsV3: true,
    isHnsEnabled: true,
    kind: azure_native.storage.Kind.BlockBlobStorage,
    location: "eastus",
    networkRuleSet: {
        bypass: azure_native.storage.Bypass.AzureServices,
        defaultAction: azure_native.storage.DefaultAction.Allow,
        ipRules: [],
        virtualNetworkRules: [{
            virtualNetworkResourceId: "/subscriptions/{subscription-id}/resourceGroups/res9101/providers/Microsoft.Network/virtualNetworks/net123/subnets/subnet12",
        }],
    },
    resourceGroupName: "res9101",
    sku: {
        name: azure_native.storage.SkuName.Premium_LRS,
    },
});