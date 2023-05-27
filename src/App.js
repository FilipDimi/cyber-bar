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
  const [activePage, setActivePage] = useState("");

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage setCurPage={setActivePage} />} />
        <Route path="inventory/" element={<InventoryScreen setCurPage={setActivePage} />} />
        <Route path="bar/" element={<MenuScreen setCurPage={setActivePage} />} />
        <Route path="discussion" element={<DiscussionScreen setCurPage={setActivePage} />} />
        <Route path="checkin/" element={<CheckInScreen setCurPage={setActivePage} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer actPage={activePage} />
    </Router>
  );
}

export default App;

// Custom link has props to keep active page colored, name the tab, and the path
