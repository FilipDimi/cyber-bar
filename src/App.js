import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { CHECK_LOGIN } from "./GraphQL/Queries";

import Homepage from "./screens/Homepage";
import ErrorPage from "./screens/ErrorPage";

import Footer from "./components/BigContainers/Footer";
import InventoryScreen from "./screens/InventoryScreen";
import MenuScreen from "./screens/MenuScreen";
import DiscussionScreen from "./screens/DiscussionScreen";
import CheckInScreen from "./screens/CheckInScreen";
import Header from "./components/UI/Header";
import ArchiveScreen from "./screens/ArchiveScreen";
import GodMode from "./screens/GodMode";
import CocktailDetail from "./screens/CocktailDetail";
import LoginScreen from "./screens/LoginScreen";

function App() {
  const [activePage, setActivePage] = useState("");

  // * GraphQL
  const check_login = useQuery(CHECK_LOGIN, {
    variables: {
      token: localStorage.getItem("user_token"),
    },
  });

  return (
    <Router>
      <Header />
      <div style={{ marginBottom: 120 }}></div>
      <Routes>
        <Route path="/" element={<Homepage setCurPage={setActivePage} />} />
        <Route
          path="inventory/"
          element={<InventoryScreen setCurPage={setActivePage} />}
        />
        <Route
          path="bar/"
          element={<MenuScreen setCurPage={setActivePage} />}
        />
        <Route
          path="bardetail/:cocktail_id"
          element={<CocktailDetail setCurPage={setActivePage} />}
        />
        <Route
          path="discussion"
          element={<DiscussionScreen setCurPage={setActivePage} />}
        />
        <Route
          path="checkin/"
          element={<CheckInScreen setCurPage={setActivePage} />}
        />
        <Route
          path="archive/"
          element={<ArchiveScreen setCurPage={setActivePage} />}
        />
        <Route
          path="12sdc349kcj9iqpnmxi9w30cmv32/"
          element={<GodMode setCurPage={setActivePage} />}
        />
        <Route path="login/" element={<LoginScreen />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer actPage={activePage} />
    </Router>
  );
}

export default App;

// Custom link has props to keep active page colored, name the tab, and the path
