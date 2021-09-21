/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateIssueMutationVariables = {|
  repositoryId: string,
  title: string,
  body?: ?string,
|};
export type CreateIssueMutationResponse = {|
  +createIssue: ?{|
    +issue: ?{|
      +createdAt: any,
      +id: string,
    |}
  |}
|};
export type CreateIssueMutation = {|
  variables: CreateIssueMutationVariables,
  response: CreateIssueMutationResponse,
|};
*/


/*
mutation CreateIssueMutation(
  $repositoryId: ID!
  $title: String!
  $body: String
) {
  createIssue(input: {repositoryId: $repositoryId, title: $title, body: $body}) {
    issue {
      createdAt
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "body"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "repositoryId"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "title"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "body",
            "variableName": "body"
          },
          {
            "kind": "Variable",
            "name": "repositoryId",
            "variableName": "repositoryId"
          },
          {
            "kind": "Variable",
            "name": "title",
            "variableName": "title"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "CreateIssuePayload",
    "kind": "LinkedField",
    "name": "createIssue",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Issue",
        "kind": "LinkedField",
        "name": "issue",
        "plural": false,
        "selections": [
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
            "name": "id",
            "storageKey": null
          }
        ],
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
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateIssueMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreateIssueMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "c3c3398cc7458dd50315ee1b8becf90d",
    "id": null,
    "metadata": {},
    "name": "CreateIssueMutation",
    "operationKind": "mutation",
    "text": "mutation CreateIssueMutation(\n  $repositoryId: ID!\n  $title: String!\n  $body: String\n) {\n  createIssue(input: {repositoryId: $repositoryId, title: $title, body: $body}) {\n    issue {\n      createdAt\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b63057dd8d084337548e4f94c9e85771';

module.exports = node;
