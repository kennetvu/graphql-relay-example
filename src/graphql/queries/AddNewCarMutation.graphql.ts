/**
 * @generated SignedSource<<3e64a0b7e823de1d82b76841b80273ad>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AddCarInput = {
  description?: string | null;
  id: string;
  milage?: number | null;
  year: number;
};
export type AddNewCarMutation$variables = {
  car: AddCarInput;
  connections: ReadonlyArray<string>;
};
export type AddNewCarMutation$data = {
  readonly addCar: {
    readonly edge: {
      readonly cursor: string;
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"CarFragment">;
      };
    } | null;
  };
};
export type AddNewCarMutation = {
  response: AddNewCarMutation$data;
  variables: AddNewCarMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "car"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "connections"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "car",
    "variableName": "car"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AddNewCarMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddCarMutationResponse",
        "kind": "LinkedField",
        "name": "addCar",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CarEdge",
            "kind": "LinkedField",
            "name": "edge",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Car",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "CarFragment"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddNewCarMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddCarMutationResponse",
        "kind": "LinkedField",
        "name": "addCar",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CarEdge",
            "kind": "LinkedField",
            "name": "edge",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Car",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
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
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "prependEdge",
            "key": "",
            "kind": "LinkedHandle",
            "name": "edge",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "cae308065188355a5ae19a14d7a93c89",
    "id": null,
    "metadata": {},
    "name": "AddNewCarMutation",
    "operationKind": "mutation",
    "text": "mutation AddNewCarMutation(\n  $car: AddCarInput!\n) {\n  addCar(car: $car) {\n    edge {\n      cursor\n      node {\n        id\n        ...CarFragment\n      }\n    }\n  }\n}\n\nfragment CarFragment on Car {\n  id\n  description\n  year\n  milage\n  createdAt\n}\n"
  }
};
})();

(node as any).hash = "e73be1637aceb8f772aa90f9a6d0c7f8";

export default node;
