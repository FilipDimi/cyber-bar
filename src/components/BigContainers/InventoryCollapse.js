import React from "react";
import { Collapse, Grid, Badge, Table } from "@nextui-org/react";
import styles from "./InventoryCollapse.module.css";

const low = [
  { category: "Wine", name: "Bogle", quantity: 5 },
  { category: "Beer", name: "Corona", quantity: 10 },
  { category: "Cordial", name: "Amaretto", quantity: 2 },
  { category: "Vodka", name: "Belvedere", quantity: 2 },
];

const categories = ["Wine", "Beer", "Cordial", "Vodka", "Rum"];

const drinks = [
  { category: "Wine", name: "Bogle", quantity: 5 },
  { category: "Beer", name: "Corona", quantity: 10 },
  { category: "Cordial", name: "Amaretto", quantity: 2 },
  { category: "Vodka", name: "Belvedere", quantity: 2 },
  { category: "Rum", name: "Captain Morgan", quantity: 1 },
  { category: "Wine", name: "Kendell Jackson", quantity: 4 },
];

const InventoryCollapse = () => {
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
                  {low.map((drink) => (
                    <Table.Row key={drink.name}>
                      <Table.Cell>{drink.name}</Table.Cell>
                      <Table.Cell>
                        <Badge color="error">{drink.quantity}</Badge>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </Collapse>
          </Grid>
          <Grid css={{ width: "100%" }}>
            <Collapse.Group shadow>
              {categories.map((category) => (
                <Collapse title={category} key={category}>
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
                      {drinks.map((drink) => {
                        if (category === drink.category) {
                          return (
                            <Table.Row key={drink.name}>
                              <Table.Cell>{drink.name}</Table.Cell>
                              <Table.Cell>
                                <Badge>{drink.quantity}</Badge>
                              </Table.Cell>
                            </Table.Row>
                          );
                        } else {
                          <span></span>
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
};

export default InventoryCollapse;
