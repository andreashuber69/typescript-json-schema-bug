import { Asset } from "./Asset";
import { AssetBundleUnion } from "./schemas/TaggedAssetBundleUnion";

export class AssetBundle {
    public constructor(public readonly assets: Asset[]) {
    }

    public toJSON(): AssetBundleUnion {
        return 42;
    }
}
