import React, { useRef, useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useLocation } from "react-router-dom";
import styles from "./CheckInScreen.module.css";
import RequireAuth from "../system/RequireAuth";
import { GET_BEVERAGES } from "../GraphQL/Queries";
import { CHECK_IN } from "../GraphQL/Mutations";
import Loading from "../components/UI/Loading";

const CheckInScreen = (props) => {
  const firstRender = useRef(true);
  const location = useLocation();
  const [searchBox, setSearchBox] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [quantity, setQuantity] = useState();
  const [drinkId, setDrinkId] = useState("");

  const list_beverages = useQuery(GET_BEVERAGES);
  const [checkinSubmit] = useMutation(CHECK_IN);

  const onFinish = () => {
    checkinSubmit({
      variables: {
        bevId: drinkId,
        quantity: quantity.toString(),
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const submitCheckInHandler = () => {
    onFinish();
    window.location.reload();
  };

  const SearchDrinkTap = (props) => {
    return (
      <button
        className={styles.searchButton}
        onClick={selectItemHandler.bind(this, props.name, props.id)}
      >
        {props.name} - {props.quantity}
      </button>
    );
  };

  const selectItemHandler = (name, id) => {
    setSearchBox(name);
    setSelectedItem(name);
    setDrinkId(id);
  };

  useEffect(() => {
    props.setCurPage(String(location.pathname));
    firstRender.current = false;
  }, [location.pathname, props]);

  if (list_beverages.loading) {
    <>
      <RequireAuth />
      <Loading />;
    </>;
  } else {
    return (
      <>
        <RequireAuth />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className={styles.mainStockContainer}>
            <div className={styles.stockContainer}>
              <h2 className={styles.stockHeading}>Check In</h2>
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
                    drink.name
                      .toLowerCase()
                      .indexOf(searchBox.toLowerCase()) !== -1 &&
                    searchBox.length > 2
                  ) {
                    return (
                      <div key={drink.name}>
                        <SearchDrinkTap
                          name={drink.name}
                          id={drink.id}
                          quantity={drink.count}
                        />
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
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
              )}
            </div>
          </div>
          <button
            onClick={submitCheckInHandler}
            style={{
              marginTop: 10,
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 5,
              paddingBottom: 5,
            }}
          >
            Submit
          </button>
        </div>
      </>
    );
  }
};

export default CheckInScreen;
