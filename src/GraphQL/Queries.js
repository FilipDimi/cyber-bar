import { gql } from "@apollo/client";

export const GET_DUMMIES = gql`
  query {
    allDummies {
      id
      name
      level
      date
    }
  }
`;
