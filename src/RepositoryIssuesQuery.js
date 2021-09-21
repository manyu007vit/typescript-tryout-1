import { graphql } from "babel-plugin-relay/macro";

export const RepositoryIssuesQuery = graphql`
query RepositoryIssuesQuery ($owner: String!, $repo: String!, $labels: [String!]) {
  repository(owner: $owner, name: $repo) {
    name
    owner {
      login
    }
    createdAt
    issues(first: 100, filterBy: {labels: $labels}, orderBy: {field: CREATED_AT, direction: ASC}) {
      totalCount
      edges {
        node {
          author {
            login
          }
          labels(last :5) {
            nodes {
              name
            }
          }
          title
          createdAt
        }
      }
    }
  }
}
`;