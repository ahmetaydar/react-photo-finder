import React from "react";
import "./App.css";
import SearchPhoto from "./components/SearchPhoto";

function App() {
  return (
    <div className="App">
      <div className="container"></div>
      <h1 className="title">React Photo Search App 📷</h1>
      <SearchPhoto />
    </div>
  );
}

export default App;
