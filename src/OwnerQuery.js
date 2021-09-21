import { graphql } from "babel-plugin-relay/macro";

export const OwnerQuery = graphql`
query OwnerQuery ($login: String!) {
  user(login: $login) { 
  	id
  }
}
`;