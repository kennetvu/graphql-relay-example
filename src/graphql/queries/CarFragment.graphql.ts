/**
 * @generated SignedSource<<187400e1671ae86e9e57c6d9aad5354f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CarFragment$data = {
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
    }
  ],
  "type": "Car",
  "abstractKey": null
};

(node as any).hash = "3ebbf7139dd63d259fd229ae56f41f01";

export default node;
