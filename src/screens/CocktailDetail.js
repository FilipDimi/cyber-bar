import React, { useRef, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Table } from "@nextui-org/react";
import styles from "./CocktailDetail.module.css";

const cocktail = [
  {
    id: "1",
    name: "Espresso Martini",
    creator: "Filip",
    ingrediants: [
      { name: "Vanilla Vodka", quantity: "1", color: "grey" },
      { name: "Kahlua", quantity: "1", color: "red" },
      { name: "Espresso", quantity: "1", color: "orange" },
    ],
    steps: [
      "Pour Vanilla vodka over ice",
      "Pour Kahlua over ice",
      "Pour Espresso over ice",
      "Shake Well",
      "Serve it in Martini Glass",
      "Garnish with coffee beans",
    ],
  },
  {
    id: "2",
    name: "Pomegranate Cosmo",
    creator: "Megi",
    ingrediants: [
      { name: "Pom Vodka", quantity: "1.5", color: "grey" },
      { name: "Pom Liquor", quantity: "1", color: "red" },
      { name: "Cointreau", quantity: "0.5", color: "orange" },
    ],
    steps: [
      "Pour Vanilla vodka over ice",
      "Pour Kahlua over ice",
      "Pour Espresso over ice",
      "Shake Well",
      "Serve it in Martini Glass",
      "Garnish with coffee beans",
    ],
  },
  {
    id: "3",
    name: "Agave Margarita",
    creator: "Filip",
    ingrediants: [
      { name: "Vanilla Vodka", quantity: "1", color: "grey" },
      { name: "Kahlua", quantity: "1", color: "red" },
      { name: "Espresso", quantity: "1", color: "orange" },
    ],
    steps: [
      "Pour Vanilla vodka over ice",
      "Pour Kahlua over ice",
      "Pour Espresso over ice",
      "Shake Well",
      "Serve it in Martini Glass",
      "Garnish with coffee beans",
    ],
  },
  {
    id: "4",
    name: "Angry Orchard",
    creator: "Megi",
    ingrediants: [
      { name: "Vanilla Vodka", quantity: "1", color: "grey" },
      { name: "Kahlua", quantity: "1", color: "red" },
      { name: "Espresso", quantity: "1", color: "orange" },
    ],
    steps: [
      "Pour Vanilla vodka over ice",
      "Pour Kahlua over ice",
      "Pour Espresso over ice",
      "Shake Well",
      "Serve it in Martini Glass",
      "Garnish with coffee beans",
    ],
  },
  {
    id: "5",
    name: "StrawKiwi Mojito",
    creator: "Megi",
    ingrediants: [
      { name: "Vanilla Vodka", quantity: "1", color: "grey" },
      { name: "Kahlua", quantity: "1", color: "red" },
      { name: "Espresso", quantity: "1", color: "orange" },
    ],
    steps: [
      "Pour Vanilla vodka over ice",
      "Pour Kahlua over ice",
      "Pour Espresso over ice",
      "Shake Well",
      "Serve it in Martini Glass",
      "Garnish with coffee beans",
    ],
  },
];

const CocktailDetail = (props) => {
  const firstRender = useRef(true);
  const { cocktail_id } = useParams();
  const location = useLocation();

  let selectedCocktail = cocktail.filter((cocktail) => {
    return cocktail.id === cocktail_id;
  });

  useEffect(() => {
    props.setCurPage("");
    firstRender.current = false;
  }, [location.pathname, props]);

  return (
    <div className={styles.outsideContainer}>
      <div className={styles.mainContainer}>
        <h2 className={styles.cocktailTitle}>{selectedCocktail[0].name}</h2>
        <span>by {selectedCocktail[0].creator}</span>
        <h3 className={styles.ingrediantsTitle}>Ingrediants</h3>
        <Table
          aria-label="Example table with static content"
          css={{
            height: "auto",
            maxWidth: "100%",
          }}
        >
          <Table.Header>
            <Table.Column>NAME</Table.Column>
            <Table.Column>QUANTITY</Table.Column>
          </Table.Header>
          <Table.Body>
            {selectedCocktail[0].ingrediants.map((ing) => (
              <Table.Row key={ing.id}>
                <Table.Cell>
                  <span
                    style={{
                      backgroundColor: ing.color,
                      borderRadius: 10,
                      paddingLeft: 4,
                      paddingRight: 4,
                    }}
                  >
                    {ing.name}
                  </span>
                </Table.Cell>
                <Table.Cell>{ing.quantity} oz</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <div>
          <h3 className={styles.ingrediantsTitle}>Ingrediants</h3>
          <ol>
            {selectedCocktail[0].steps.map((step) => (
              <li>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default CocktailDetail;
