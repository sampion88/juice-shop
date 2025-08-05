import * as pulumi from "@pulumi/pulumi";
import * as azure_native from "@pulumi/azure-native";

const securityRule = new azure_native.network.SecurityRule("securityRule", {
  access: azure_native.network.SecurityRuleAccess.Deny,
  destinationAddressPrefix: "11.0.0.0/8",
  destinationPortRange: "80",
  direction: azure_native.network.SecurityRuleDirection.Outbound,
  networkSecurityGroupName: "testnsg",
  priority: 100,
  protocol: azure_native.network.SecurityRuleProtocol.Asterisk,
  resourceGroupName: "rg1",
  securityRuleName: "rule1",
  sourceAddressPrefix: "10.0.0.0/8",
  sourcePortRange: "*",
});

const securityRule2 = new azure_native.network.SecurityRule("securityRule", {
  access: azure_native.network.SecurityRuleAccess.Deny,
  destinationAddressPrefix: "11.0.0.0/8",
  destinationPortRanges: ["80", "8080"],
  direction: azure_native.network.SecurityRuleDirection.Outbound,
  networkSecurityGroupName: "testnsg",
  priority: 100,
  protocol: azure_native.network.SecurityRuleProtocol.Asterisk,
  resourceGroupName: "rg1",
  securityRuleName: "rule1",
  sourceAddressPrefix: "10.0.0.0/8",
  sourcePortRange: "*",
});

const securityRule3 = new azure_native.network.SecurityRule("securityRule", {
  access: azure_native.network.SecurityRuleAccess.Deny,
  destinationAddressPrefix: "11.0.0.0/8",
  destinationPortRange: "8080",
  direction: azure_native.network.SecurityRuleDirection.Outbound,
  networkSecurityGroupName: "testnsg",
  priority: 100,
  protocol: azure_native.network.SecurityRuleProtocol.Asterisk,
  resourceGroupName: "rg1",
  securityRuleName: "rule1",
  sourceAddressPrefix: "10.0.0.0/8",
  sourcePortRange: "*",
});

const securityRule4 = new azure_native.network.SecurityRule("securityRule", {
  access: azure_native.network.SecurityRuleAccess.Deny,
  destinationAddressPrefix: "11.0.0.0/8",
  destinationPortRanges: ["443", "8080"],
  direction: azure_native.network.SecurityRuleDirection.Outbound,
  networkSecurityGroupName: "testnsg",
  priority: 100,
  protocol: azure_native.network.SecurityRuleProtocol.Asterisk,
  resourceGroupName: "rg1",
  securityRuleName: "rule1",
  sourceAddressPrefix: "10.0.0.0/8",
  sourcePortRange: "*",
});
