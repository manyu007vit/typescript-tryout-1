import { graphql } from "babel-plugin-relay/macro";

export const RepositoryQuery = graphql`
query RepositoryQuery ($owner: String!, $name: String!) {
  repository(owner:$owner, name: $name) { 
  	id
  }
}
`;