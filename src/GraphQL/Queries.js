import { gql } from "@apollo/client";

export const GET_BEVERAGES = gql`
  query {
    allBeverages {
      name
      id
      count
      criticalCount
      category {
        id
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  query {
    allBarcategories {
      name
      id
    }
  }
`;

export const GET_COCKTAILS = gql`
  query {
    allCocktails {
      id
      name
      color
    }
  }
`;

export const GET_LOW_STOCK = gql`
  query {
    lowBeverages {
      name
      count
    }
  }
`;

export const SEARCH_COCKTAIL = gql`
  query searchCocktail($id: String!) {
    searchCocktail(id: $id) {
      name
      glass
      creator {
        firstName
      }
      ingrediants {
        beverage {
          name
        }
        count
      }
      steps {
        description
      }
    }
  }
`;

export const CHECK_LOGIN = gql`
    query currentUser($token: String!) {
        currentUser(token: $token) {
            id
            email
        }
    }
`;

export const USER_ID = gql`
    query userId($username: String!) {
      userId(username: $username) {
        id
      }
    }
`;

export const USER_TAB = gql`
    query userTab($userPk: String!) {
      userTab(userPk: $userPk) {
        beverage {
          name
        }
        count
      }
    }
`
