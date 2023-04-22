/**
 * @generated SignedSource<<2dd49f0978a5cb8d2e2184c1cd425fc9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CarListContainerFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"CarListFragment">;
  readonly " $fragmentType": "CarListContainerFragment";
};
export type CarListContainerFragment$key = {
  readonly " $data"?: CarListContainerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CarListContainerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": {
        "createdAt": "ASC"
      },
      "kind": "LocalArgument",
      "name": "orderBy"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": require('./CarListContainerQuery.graphql')
    }
  },
  "name": "CarListContainerFragment",
  "selections": [
    {
      "args": [
        {
          "kind": "Variable",
          "name": "orderBy",
          "variableName": "orderBy"
        }
      ],
      "kind": "FragmentSpread",
      "name": "CarListFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "80cffaeb3fd1105f894390c177104759";

export default node;
