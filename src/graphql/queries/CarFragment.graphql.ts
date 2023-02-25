/**
 * @generated SignedSource<<914c5a92c3e7c91e420526f20784de4e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CarFragment$data = {
  readonly createdAt: any | null;
  readonly description: string | null;
  readonly id: string;
  readonly milage: number | null;
  readonly year: number;
  readonly " $fragmentType": "CarFragment";
};
export type CarFragment$key = {
  readonly " $data"?: CarFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CarFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CarFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "year",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "milage",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdAt",
      "storageKey": null
    }
  ],
  "type": "Car",
  "abstractKey": null
};

(node as any).hash = "48798909c0e907c4dcc779ed781e8c4b";

export default node;
