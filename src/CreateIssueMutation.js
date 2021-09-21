import { graphql } from "babel-plugin-relay/macro";

export const CreateIssueMutation = graphql`
    mutation CreateIssueMutation($repositoryId: ID!, $title: String!, $body: String) {
        createIssue(input: {repositoryId: $repositoryId, title: $title, body: $body}) {
            issue {
                createdAt
                id
            }
        }
    }
`;