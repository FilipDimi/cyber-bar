import React, { useRef, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Loading, Table } from "@nextui-org/react";
import styles from "./CocktailDetail.module.css";

import { SEARCH_COCKTAIL } from "../GraphQL/Queries";
import RequireAuth from "../system/RequireAuth";


const CocktailDetail = (props) => {
  const firstRender = useRef(true);
  const { cocktail_id } = useParams();
  const location = useLocation();

  const cocktail_detail = useQuery(SEARCH_COCKTAIL, {
    variables: {
      id: cocktail_id,
    },
  });

  useEffect(() => {
    props.setCurPage("");
    firstRender.current = false;
  }, [location.pathname, props]);

  if (cocktail_detail.loading) {
    return <Loading />;
  } else {
    return (
      <div className={styles.outsideContainer}>
        <RequireAuth />
        <div className={styles.mainContainer}>
          <h2 className={styles.cocktailTitle}>
            {cocktail_detail.data.searchCocktail.name}
          </h2>
          <span>
            by {cocktail_detail.data.searchCocktail.creator.firstName}
          </span>
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
              {cocktail_detail.data.searchCocktail.ingrediants.map((ing) => (
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
                      {ing.beverage.name}
                    </span>
                  </Table.Cell>
                  <Table.Cell>{ing.count}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          <div>
            <h3 className={styles.ingrediantsTitle}>Glass Type: {cocktail_detail.data.searchCocktail.glass}</h3>
            <h3 className={styles.ingrediantsTitle}>Ingrediants</h3>
            <ol>
              {cocktail_detail.data.searchCocktail.steps.map((step) => (
                <li key={step.description}>{step.description}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
};

export default CocktailDetail;
