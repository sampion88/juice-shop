import * as pulumi from "@pulumi/pulumi";
import * as azure_native from "@pulumi/azure-native";

const diskResource = new azure_native.compute.Disk("diskResource", {
    diskAccessId: "string",
    diskIOPSReadOnly: 0,
    maxShares: 0,
    diskMBpsReadOnly: 0,
    diskMBpsReadWrite: 0,
    diskName: "string",
    diskSizeGB: 0,
    encryption: {
        diskEncryptionSetId: "string",
        type: "string",
    },
    encryptionSettingsCollection: {
        enabled: false,
        encryptionSettings: [{
            diskEncryptionKey: {
                secretUrl: "string",
                sourceVault: {
                    id: "string",
                },
            },
            keyEncryptionKey: {
                keyUrl: "string",
                sourceVault: {
                    id: "string",
                },
            },
        }],
        encryptionSettingsVersion: "string",
    },
    extendedLocation: {
        name: "string",
        type: "string",
    }
});
