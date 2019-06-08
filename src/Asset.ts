import { AssetBundle } from "./AssetBundle";

/** Defines the base of all classes that represent an asset. */
export abstract class Asset {
    public static readonly typeName = "type";

    public bundle(): AssetBundle {
        throw new Error("Asset cannot be bundled.");
    }
}
