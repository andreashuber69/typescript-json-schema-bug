import { IMiscAssetProperties } from "./IMiscAssetProperties";
import { AssetTypeName } from "./validation/schemas/AssetTypeName";

export type IAssetPropertiesIntersection = IMiscAssetProperties;

export interface IAssetIntersection extends IAssetPropertiesIntersection {
    readonly type: AssetTypeName;
}

export type AssetPropertyName = keyof IAssetPropertiesIntersection;

export const allAssetPropertyNames: AssetPropertyName[] = [
    "description", "location", "notes", "value"
];
