import React, { useState } from "react";
import { useQuery, useMutation, useLazyQuery } from "@apollo/client";
import { Checkbox, Button, Badge } from "@nextui-org/react";
import { CiLocationArrow1 } from "react-icons/ci";
import { GET_BEVERAGES, USER_TAB } from "../../GraphQL/Queries";
import { ADD_DRINK_TO_TAB } from "../../GraphQL/Mutations";

import styles from "./StockCard.module.css";
import Loading from "../UI/Loading";

const StockCard = () => {
  const [addItemToTab] = useMutation(ADD_DRINK_TO_TAB);
  const list_beverages = useQuery(GET_BEVERAGES);
  const list_tab = useQuery(USER_TAB, {
    variables: {
      userPk: localStorage.getItem("userId"),
    },
  });

  const [confirmReport, setConfirmReport] = useState(false);
  const [searchBox, setSearchBox] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [drinkId, setDrinkId] = useState("");

  const [msgType, setMsgType] = useState("");
  const [msg, setMsg] = useState("");

  const onFinish = (quan) => {
    addItemToTab({
      variables: {
        bevId: drinkId,
        userId: localStorage.getItem("userId"),
        count: quan.toString(),
      },
    })
      .then((res) => {
        setSearchBox("");
        setSelectedItem("");
        setDrinkId("");
        setQuantity(0);
        setMsgType("success");
        setMsg("The drink has been added to the list");
        console.log(res);
      })
      .catch((err) => {
        setSearchBox("");
        setSelectedItem("");
        setDrinkId("");
        setQuantity(0);
        setMsgType("error");
        setMsg(err.message);
        console.log(err);
      });
  };

  const SearchDrinkTap = (props) => {
    return (
      <button
        className={styles.searchButton}
        onClick={selectItemHandler.bind(this, props.name, props.id)}
      >
        {props.name}
      </button>
    );
  };

  const selectItemHandler = (name, id) => {
    setSearchBox(name);
    setSelectedItem(name);
    setDrinkId(id);
  };

  const ResetButton = () => {
    return (
      <button
        className={styles.searchButton}
        onClick={resetHandler}
        style={{ backgroundColor: "#ff5335", color: "#353943", marginLeft: 5 }}
      >
        RESET
      </button>
    );
  };

  const updateQuantityHandler = (tempQuan) => {
    let temp = quantity + tempQuan;
    setQuantity(parseInt(temp));
  };

  const resetQuantityHandler = () => {
    setQuantity(0);
  };

  const resetHandler = () => {
    setQuantity(0);
    setSearchBox("");
  };

  const addHandler = (name, quan) => {
    onFinish(quan);
    resetHandler();
    window.location.reload();
  };

  const subHandler = (name, quan) => {
    onFinish(quan);
    resetHandler();
    window.location.reload();
  };

  if (list_beverages.loading) {
    <Loading />;
  } else {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className={styles.mainStockContainer}>
          <div className={styles.stockContainer}>
            <h2 className={styles.stockHeading}>Stock In/Out</h2>
            <input
              className={styles.stockInput}
              type="text"
              placeholder="Enter a Drink Name"
              value={searchBox}
              onChange={(e) => setSearchBox(e.target.value)}
            />
            <div className={styles.searchTabContainer}>
              {list_beverages.data.allBeverages.map((drink) => {
                if (
                  drink.name.toLowerCase().indexOf(searchBox.toLowerCase()) !==
                    -1 &&
                  searchBox.length > 2
                ) {
                  return (
                    <div key={drink.name}>
                      <SearchDrinkTap name={drink.name} id={drink.id} />
                      <ResetButton />
                    </div>
                  );
                } else {
                  return <span></span>;
                }
              })}
            </div>

            {selectedItem === searchBox && searchBox.length > 2 && (
              <div className={styles.quantityButtonContainer}>
                <input
                  className={styles.stockInput}
                  type="number"
                  value={quantity}
                  disabled
                />
                <div
                  className={styles.quantityHContainer}
                  style={{ marginTop: 20 }}
                >
                  <button
                    onClick={updateQuantityHandler.bind(this, "1")}
                    className={styles.quantityButton}
                  >
                    1
                  </button>
                  <button
                    onClick={updateQuantityHandler.bind(this, "2")}
                    className={styles.quantityButton}
                  >
                    2
                  </button>
                  <button
                    onClick={updateQuantityHandler.bind(this, "3")}
                    className={styles.quantityButton}
                  >
                    3
                  </button>
                </div>
                <div className={styles.quantityHContainer}>
                  <button
                    onClick={updateQuantityHandler.bind(this, "4")}
                    className={styles.quantityButton}
                  >
                    4
                  </button>
                  <button
                    onClick={updateQuantityHandler.bind(this, "5")}
                    className={styles.quantityButton}
                  >
                    5
                  </button>
                  <button
                    onClick={updateQuantityHandler.bind(this, "6")}
                    className={styles.quantityButton}
                  >
                    6
                  </button>
                </div>
                <div className={styles.quantityHContainer}>
                  <button
                    onClick={updateQuantityHandler.bind(this, "7")}
                    className={styles.quantityButton}
                  >
                    7
                  </button>
                  <button
                    onClick={updateQuantityHandler.bind(this, "8")}
                    className={styles.quantityButton}
                  >
                    8
                  </button>
                  <button
                    onClick={updateQuantityHandler.bind(this, "9")}
                    className={styles.quantityButton}
                  >
                    9
                  </button>
                </div>
                <div className={styles.quantityHContainer}>
                  <button
                    onClick={updateQuantityHandler.bind(this, "0")}
                    className={styles.quantityButton}
                  >
                    0
                  </button>
                  <button
                    onClick={resetQuantityHandler}
                    className={styles.quantityButton}
                  >
                    Cl
                  </button>
                </div>
                <div className={styles.footerButtons}>
                  <button
                    className={styles.updateButton}
                    onClick={addHandler.bind(this, searchBox, quantity)}
                    style={{
                      width: "30%",
                      backgroundColor: "#19C964",
                      color: "#fff",
                    }}
                  >
                    Add
                  </button>
                  <button
                    className={styles.updateButton}
                    onClick={subHandler.bind(this, searchBox, -quantity)}
                    style={{
                      width: "70%",
                      backgroundColor: "#F31260",
                      color: "#fff",
                    }}
                  >
                    Substract
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className={styles.stockContainer}
          style={{ marginTop: 50, marginBottom: 100 }}
        >
          <h2 className={styles.stockInfoItem}>Summary</h2>
          {list_tab.error && <h3 style={{color: "#3f8b9a"}}>Your list is Empty 😢</h3>}
          {!list_tab.error && !list_tab.loading && list_tab.data.userTab.length > 0 && (
            <>
              <div>
                <ul>
                  {list_tab.data.userTab.map((item) => (
                    <li style={{marginBottom: 12}}>
                      <span>{item.beverage.name}</span>{" "}
                      { item.count < 0 ? <Badge color="error">{item.count}</Badge> : <Badge color="success">{item.count}</Badge>}
                    </li>
                  ))}
                </ul>
              </div>
              <Checkbox
                isSelected={confirmReport}
                color="success"
                onChange={setConfirmReport}
              >
                <span style={{ fontSize: 12 }}>
                  I agree that the summary is accurate
                </span>
              </Checkbox>
              <Button
                iconRight={<CiLocationArrow1 size={20} />}
                color="success"
                flat
                css={{ marginBottom: 30 }}
              >
                Send Report
              </Button>
            </>
          )}
        </div>
      </div>
    );
  }
};

export default StockCard;
