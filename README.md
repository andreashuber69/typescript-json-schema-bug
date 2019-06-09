# typescript-json-schema Problem with a Circular Dependency

This repo demonstrates that [typescript-json-schema](https://github.com/YousefED/typescript-json-schema) does not work
as expected when the schema source code refers to a type involved in a circular dependency.

## Repro

The problem can be reproduced as follows:

```
git clone https://github.com/andreashuber69/typescript-json-schema-bug.git
cd typescript-json-schema-bug
npm i
npm start
```

`npm start` executes the following command line:

```
typescript-json-schema './tsconfig.json' '*' --required --aliasRefs --include 'src/schemas/*.ts' --out 'src/schemas/All.schema.json'
```

Two types are defined in the *schemas* folder, so *src/schemas/All.schema.json* should contain two definitions. However,
it only contains the definition for `GroupBy`, the definition for `AssetBundleUnion` is missing.

## Analysis

The type in
[src/schemas/GroupBy.ts](https://raw.githubusercontent.com/andreashuber69/typescript-json-schema-bug/master/src/schemas/GroupBy.ts)
refers to a static property of the `Asset` class in
[src/Asset.ts](https://raw.githubusercontent.com/andreashuber69/typescript-json-schema-bug/master/src/Asset.ts), which
in turn forms a circular dependency with
[src/AssetBundle.ts](https://raw.githubusercontent.com/andreashuber69/typescript-json-schema-bug/master/src/AssetBundle.ts).
The problem disappears as soon as the circular dependency is removed (e.g. by commenting out `Asset.bundle()` and the
`import` statement).

So, it appears that typescript-json-schema has a problem with the circular dependency, even though the typescript
compiler typically swallows such code without any complaint.
