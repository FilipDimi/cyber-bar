import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./MenuScreen.module.css";

const cocktails = [
  { title: "Espresso Martini", id: "1", color: "#a03912" },
  { title: "Pomegranate Cosmo", id: "2", color: "#f90f5a" },
  { title: "Indigo Gimlet", id: "3", color: "#d7269b" },
  { title: "Agave Margarita", id: "4", color: "#d3d9a4" },
  { title: "Angry Orchard", id: "5", color: "#e698be" },
  { title: "Sour Strawberry", id: "6", color: "#ff2222" },
  { title: "Blue Lagoon", id: "7", color: "#05becb" },
];

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
  let selectedCocktailList = cocktails;

  useEffect(() => {
    props.setCurPage(String(location.pathname));
    firstRender.current = false;
  }, [location.pathname, props]);

  if (searchCocktail.length > 0) {
    selectedCocktailList = cocktails.filter((cocktail) => {
      return cocktail.title.toLowerCase().indexOf(searchCocktail.toLowerCase()) !== -1
    })
  }

  return (
    <div className={styles.outsideContainer}>
      <input
        type="text"
        placeholder="Search for a Cocktail"
        className={styles.searchCocktailField}
        value={searchCocktail}
        onChange={e => setSearchCocktail(e.target.value)}
      />
      <div className={styles.mainContainer}>
        {selectedCocktailList.map((cocktaile) => (
          <BarItem
            title={cocktaile.title}
            id={cocktaile.id}
            color={cocktaile.color}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuScreen;
