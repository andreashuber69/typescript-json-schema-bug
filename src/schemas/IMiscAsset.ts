import { IMiscAssetProperties } from "../IMiscAssetProperties";

export const miscAssetTypeNames = ["Misc"] as const;

export type MiscAssetTypeName = (typeof miscAssetTypeNames)[number];

export interface IMiscObject {
    readonly type: MiscAssetTypeName;
}

export interface IMiscAsset extends IMiscObject, IMiscAssetProperties {
}
