/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RepositoryQueryVariables = {|
  owner: string,
  name: string,
|};
export type RepositoryQueryResponse = {|
  +repository: ?{|
    +id: string
  |}
|};
export type RepositoryQuery = {|
  variables: RepositoryQueryVariables,
  response: RepositoryQueryResponse,
|};
*/


/*
query RepositoryQuery(
  $owner: String!
  $name: String!
) {
  repository(owner: $owner, name: $name) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "owner"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      },
      {
        "kind": "Variable",
        "name": "owner",
        "variableName": "owner"
      }
    ],
    "concreteType": "Repository",
    "kind": "LinkedField",
    "name": "repository",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "RepositoryQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "RepositoryQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "880ae0b0859bafe1520a2c75f4c51bab",
    "id": null,
    "metadata": {},
    "name": "RepositoryQuery",
    "operationKind": "query",
    "text": "query RepositoryQuery(\n  $owner: String!\n  $name: String!\n) {\n  repository(owner: $owner, name: $name) {\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'de7ff79ce334e91e252b7948abbd393c';

module.exports = node;
