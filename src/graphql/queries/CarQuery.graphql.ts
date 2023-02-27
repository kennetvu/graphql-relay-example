/**
 * @generated SignedSource<<122ed2597c183b07a8bf00325f3656aa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CarQuery$variables = {};
export type CarQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"CarListFragment">;
};
export type CarQuery = {
  response: CarQuery$data;
  variables: CarQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "after",
    "value": ""
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 0
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": {
      "createdAt": "ASC"
    }
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CarQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "CarListFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CarQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
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
        "storageKey": "cars(after:\"\",first:0,orderBy:{\"createdAt\":\"ASC\"})"
      },
      {
        "alias": null,
        "args": (v0/*: any*/),
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
    "cacheID": "397afaeaee7ebfdce99d9b6e08deeb6f",
    "id": null,
    "metadata": {},
    "name": "CarQuery",
    "operationKind": "query",
    "text": "query CarQuery {\n  ...CarListFragment\n}\n\nfragment CarFragment on Car {\n  id\n  description\n  year\n  milage\n  createdAt\n}\n\nfragment CarListFragment on Query {\n  cars(first: 0, after: \"\", orderBy: {createdAt: ASC}) {\n    edges {\n      node {\n        id\n        ...CarFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "2d8022fa8089b87cf2a3a487b384c496";

export default node;
