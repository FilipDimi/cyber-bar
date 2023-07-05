import React from "react";
import { useQuery } from "@apollo/client";
import { Collapse, Grid, Badge, Table } from "@nextui-org/react";
import styles from "./InventoryCollapse.module.css";

import { GET_CATEGORIES, GET_BEVERAGES, GET_LOW_STOCK } from "../../GraphQL/Queries";
import Loading from "../UI/Loading";


const InventoryCollapse = () => {
  const barCategories = useQuery(GET_CATEGORIES);
  const beverages = useQuery(GET_BEVERAGES);
  const low_on_stock = useQuery(GET_LOW_STOCK);


  if (barCategories.loading || beverages.loading || low_on_stock.loading) {
    return <Loading />;
  } else {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.inventoryContainer}>
          <h1>Inventory</h1>
          <Grid.Container gap={2}>
            <Grid css={{ width: "100%" }}>
              <Collapse
                shadow
                title="Low On Stock"
                subtitle="Check what has to be ordered"
              >
                <Table
                  shadow
                  aria-label="Example table with static content"
                  css={{
                    height: "auto",
                    minWidth: "100%",
                  }}
                >
                  <Table.Header>
                    <Table.Column>NAME</Table.Column>
                    <Table.Column>QUANTITY</Table.Column>
                  </Table.Header>
                  <Table.Body>
                    {low_on_stock.data.lowBeverages.map((drink) => (
                      <Table.Row key={drink.name}>
                        <Table.Cell>{drink.name}</Table.Cell>
                        <Table.Cell>
                          <Badge color="error">{drink.count}</Badge>
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              </Collapse>
            </Grid>
            <Grid css={{ width: "100%" }}>
              <Collapse.Group shadow>
                {barCategories.data.allBarcategories.map((category) => (
                  <Collapse title={category.name} key={category.name}>
                    <Table
                      aria-label="Example table with static content"
                      css={{
                        height: "auto",
                        minWidth: "100%",
                      }}
                    >
                      <Table.Header>
                        <Table.Column>NAME</Table.Column>
                        <Table.Column>QUANTITY</Table.Column>
                      </Table.Header>
                      <Table.Body>
                        {beverages.data.allBeverages.map((drink) => {
                          if (category.id === drink.category.id) {
                            return (
                              <Table.Row key={drink.name}>
                                <Table.Cell>{drink.name}</Table.Cell>
                                <Table.Cell>
                                  {drink.count < drink.criticalCount ? <Badge color="error">{drink.count}</Badge> : <Badge>{drink.count}</Badge>}
                                </Table.Cell>
                              </Table.Row>
                            );
                          } else {
                            <span></span>;
                          }
                        })}
                      </Table.Body>
                    </Table>
                  </Collapse>
                ))}
              </Collapse.Group>
            </Grid>
          </Grid.Container>
        </div>
      </div>
    );
  }
};

export default InventoryCollapse;
