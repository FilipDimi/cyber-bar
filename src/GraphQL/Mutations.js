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


export const VERIFY_TOKEN = gql`
  mutation verifyToken($token: String!) {
    verifyToken(token: $token) {
      payload
    }
  }
`


export const CHECK_IN = gql`
mutation checkIn($bevId: String!, $quantity: String!) {
  checkIn(bevId: $bevId, quantity: $quantity) {
    beverage {
      name
      count
    }
  }
}`
