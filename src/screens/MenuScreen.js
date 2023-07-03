import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import styles from "./MenuScreen.module.css";

import { GET_COCKTAILS } from "../GraphQL/Queries";
import Loading from "../components/UI/Loading";
import RequireAuth from "../system/RequireAuth";

const BarItem = (props) => {
  const navigate = useNavigate();

  const openCocktailDetailHandler = () => {
    navigate(`/bardetail/${props.id}`);
  };

  return (
    <div
      className={styles.drinkContainer}
      style={{ backgroundColor: props.color }}
      onClick={openCocktailDetailHandler}
    >
      <span className={styles.cocktailTitle}>{props.title}</span>
    </div>
  );
};

const MenuScreen = (props) => {
  const firstRender = useRef(true);
  const location = useLocation();
  const [searchCocktail, setSearchCocktail] = useState("");
  const cocktails = useQuery(GET_COCKTAILS);
  let selectedCocktailList = cocktails.loading
    ? []
    : cocktails.data.allCocktails;

  useEffect(() => {
    props.setCurPage(String(location.pathname));
    firstRender.current = false;
  }, [location.pathname, props]);

  if (!cocktails.loading && searchCocktail.length > 0) {
    selectedCocktailList = cocktails.data.allCocktails.filter((cocktail) => {
      return (
        cocktail.name.toLowerCase().indexOf(searchCocktail.toLowerCase()) !== -1
      );
    });
  }

  if (cocktails.loading) {
    <RequireAuth />;
    return <Loading />;
  } else {
    return (
      <div className={styles.outsideContainer}>
        <RequireAuth />
        <input
          type="text"
          placeholder="Search for a Cocktail"
          className={styles.searchCocktailField}
          value={searchCocktail}
          onChange={(e) => setSearchCocktail(e.target.value)}
        />
        <div className={styles.mainContainer}>
          {selectedCocktailList.map((cocktaile) => (
            <BarItem
              title={cocktaile.name}
              id={cocktaile.id}
              color={cocktaile.color}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default MenuScreen;
