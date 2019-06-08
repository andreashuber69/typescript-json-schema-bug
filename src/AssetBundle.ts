import { Asset } from "./Asset";
import { AssetBundleUnion } from "./schemas/TaggedAssetBundleUnion";

export abstract class AssetBundle {
    public abstract get assets(): Asset[];
    public abstract toJSON(): AssetBundleUnion;
}
