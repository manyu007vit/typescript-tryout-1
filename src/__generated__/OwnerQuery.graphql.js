/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type OwnerQueryVariables = {|
  login: string
|};
export type OwnerQueryResponse = {|
  +user: ?{|
    +id: string
  |}
|};
export type OwnerQuery = {|
  variables: OwnerQueryVariables,
  response: OwnerQueryResponse,
|};
*/


/*
query OwnerQuery(
  $login: String!
) {
  user(login: $login) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "login"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "login",
        "variableName": "login"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "user",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "OwnerQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OwnerQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "107016a1727c13c4b1df1d272940cf79",
    "id": null,
    "metadata": {},
    "name": "OwnerQuery",
    "operationKind": "query",
    "text": "query OwnerQuery(\n  $login: String!\n) {\n  user(login: $login) {\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2587a7ebbfafaa852fbac4cf54b53e86';

module.exports = node;
