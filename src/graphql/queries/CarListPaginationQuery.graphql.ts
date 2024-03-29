/**
 * @generated SignedSource<<4072ba49a7e6f67e8bb178c27809da7e>>
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
    "defaultValue": 2,
    "kind": "LocalArgument",
    "name": "first"
  },
  {
    "defaultValue": null,
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
    "cacheID": "ca6e47114b2086e07d8feee82de91e35",
    "id": null,
    "metadata": {},
    "name": "CarListPaginationQuery",
    "operationKind": "query",
    "text": "query CarListPaginationQuery(\n  $after: String = \"\"\n  $first: Int = 2\n  $orderBy: OrderByInput\n) {\n  ...CarListFragment_2IJuIk\n}\n\nfragment CarFragment on Car {\n  id\n  description\n  year\n  milage\n  createdAt\n}\n\nfragment CarListFragment_2IJuIk on Query {\n  cars(first: $first, after: $after, orderBy: $orderBy) {\n    edges {\n      node {\n        id\n        ...CarFragment\n        __typename\n      }\n      cursor\n    }\n    count\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "5534f02d7fa26c8f46a92b1ca822e3b5";

export default node;
