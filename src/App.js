import React from "react";
import Home from "./pages/Home";
import "./App.css";
import Footer from "./components/section/Footer";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="app">
      {/* <Home /> */}
      <SearchPage />
      <Footer />
    </div>
  );
}

export default App;
