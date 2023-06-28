import { gql } from "@apollo/client";

export const ADD_DRINK_TO_TAB = gql`
  mutation addItem($bevId: String!, $userId: String!, $count: String!) {
    addItem(bevId: $bevId, userId: $userId, count: $count) {
      tab {
        beverage {
          name
        }
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation tokenAuth($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;