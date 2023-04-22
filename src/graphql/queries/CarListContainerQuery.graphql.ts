/**
 * @generated SignedSource<<db10f5d9231ed46f3d951d9ff613659e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OrderDirection = "ASC" | "DESC" | "%future added value";
export type OrderByInput = {
  createdAt?: OrderDirection | null;
  id?: OrderDirection | null;
};
export type CarListContainerQuery$variables = {
  orderBy?: OrderByInput | null;
};
export type CarListContainerQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"CarListContainerFragment">;
};
export type CarListContainerQuery = {
  response: CarListContainerQuery$data;
  variables: CarListContainerQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": {
      "createdAt": "ASC"
    },
    "kind": "LocalArgument",
    "name": "orderBy"
  }
],
v1 = {
  "kind": "Variable",
  "name": "orderBy",
  "variableName": "orderBy"
},
v2 = [
  {
    "kind": "Literal",
    "name": "after",
    "value": ""
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 2
  },
  (v1/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CarListContainerQuery",
    "selections": [
      {
        "args": [
          (v1/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "CarListContainerFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CarListContainerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CarConnection",
        "kind": "LinkedField",
        "name": "cars",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CarEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Car",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
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
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "count",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "filters": [
          "orderBy"
        ],
        "handle": "connection",
        "key": "CarListFragment_cars",
        "kind": "LinkedHandle",
        "name": "cars"
      }
    ]
  },
  "params": {
    "cacheID": "de93c06fac098c891eee09e0ea7cc709",
    "id": null,
    "metadata": {},
    "name": "CarListContainerQuery",
    "operationKind": "query",
    "text": "query CarListContainerQuery(\n  $orderBy: OrderByInput = {createdAt: ASC}\n) {\n  ...CarListContainerFragment_7FfCv\n}\n\nfragment CarFragment on Car {\n  id\n  description\n  year\n  milage\n  createdAt\n}\n\nfragment CarListContainerFragment_7FfCv on Query {\n  ...CarListFragment_7FfCv\n}\n\nfragment CarListFragment_7FfCv on Query {\n  cars(first: 2, after: \"\", orderBy: $orderBy) {\n    edges {\n      node {\n        id\n        ...CarFragment\n        __typename\n      }\n      cursor\n    }\n    count\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "80cffaeb3fd1105f894390c177104759";

export default node;
