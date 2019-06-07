import { AssetBundle } from "./AssetBundle";
import { IAssetIntersection } from "./AssetInterfaces";
import { AssetTypeName } from "./validation/schemas/AssetTypeName";

/** Defines the base of all classes that represent an asset. */
export abstract class Asset {
    public static readonly typeName = Asset.getPropertyName("type");
    public static readonly locationName = Asset.getPropertyName("location");

    public abstract get type(): AssetTypeName | "";

    public bundle(): AssetBundle {
        throw new Error("Asset cannot be bundled.");
    }

    private static getPropertyName<T extends keyof IAssetIntersection>(name: T) {
        return name;
    }
}
