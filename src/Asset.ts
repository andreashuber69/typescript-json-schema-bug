import { AssetBundle } from "./AssetBundle";
import { AssetTypeName } from "./schemas/AssetTypeName";

/** Defines the base of all classes that represent an asset. */
export abstract class Asset {
    public static readonly typeName = "type";

    public abstract get type(): AssetTypeName | "";

    public bundle(): AssetBundle {
        throw new Error("Asset cannot be bundled.");
    }
}
