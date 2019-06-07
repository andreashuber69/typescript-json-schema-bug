import { Asset } from "./Asset";
import { AssetBundleUnion } from "./validation/schemas/TaggedAssetBundleUnion";

export abstract class AssetBundle {
    public abstract get assets(): Asset[];
    public abstract toJSON(): AssetBundleUnion;
}
