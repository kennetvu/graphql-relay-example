/**
 * @generated SignedSource<<6c4ade3565b6119bb67f4e30a20c5580>>
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
export type CarListPaginationQuery$variables = {
  after?: string | null;
  first?: number | null;
  orderBy?: OrderByInput | null;
};
export type CarListPaginationQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"CarListFragment">;
};
export type CarListPaginationQuery = {
  response: CarListPaginationQuery$data;
  variables: CarListPaginationQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": "",
    "kind": "LocalArgument",
    "name": "after"
  },
  {
    "defaultValue": 0,
    "kind": "LocalArgument",
    "name": "first"
  },
  {
    "defaultValue": {
      "createdAt": "ASC"
    },
    "kind": "LocalArgument",
    "name": "orderBy"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  },
  {
    "kind": "Variable",
    "name": "orderBy",
    "variableName": "orderBy"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CarListPaginationQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "CarListFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CarListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
        "args": (v1/*: any*/),
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
    "cacheID": "152d9cdf32bb2daadea385b50d2c85b9",
    "id": null,
    "metadata": {},
    "name": "CarListPaginationQuery",
    "operationKind": "query",
    "text": "query CarListPaginationQuery(\n  $after: String = \"\"\n  $first: Int = 0\n  $orderBy: OrderByInput = {createdAt: ASC}\n) {\n  ...CarListFragment_2IJuIk\n}\n\nfragment CarFragment on Car {\n  id\n  description\n  year\n  milage\n  createdAt\n}\n\nfragment CarListFragment_2IJuIk on Query {\n  cars(first: $first, after: $after, orderBy: $orderBy) {\n    edges {\n      node {\n        id\n        ...CarFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "161119f1a4d13512e928fdfa3483887b";

export default node;
