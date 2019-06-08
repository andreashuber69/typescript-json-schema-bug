import { AssetBundle } from "./AssetBundle";

export abstract class Asset {
    public static readonly typeName = "type";

    public bundle(): AssetBundle {
        return new AssetBundle([this]);
    }
}
