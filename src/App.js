import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./screens/Homepage";
import ErrorPage from "./screens/ErrorPage";

import Footer from "./components/BigContainers/Footer";
import InventoryScreen from "./screens/InventoryScreen";
import MenuScreen from "./screens/MenuScreen";
import DiscussionScreen from "./screens/DiscussionScreen";
import CheckInScreen from "./screens/CheckInScreen";
import Header from "./components/UI/Header";

function App() {
  const [activePage, setActivePage] = useState("Home");

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="inventory/" element={<InventoryScreen />} />
        <Route path="bar/" element={<MenuScreen />} />
        <Route path="discussion" element={<DiscussionScreen />} />
        <Route path="checkin/" element={<CheckInScreen />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

// Custom link has props to keep active page colored, name the tab, and the path
