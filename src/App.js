import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";

import All_component from "./components/All_component";
import Active_component from "./components/Active_component";
import Completed_component from "./components/Completed_component";
import AddDetail_component from "./components/AddDetail_component";

const App = () => {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <Router>
      <div className="container">
        <div className="">
          <div className="todo">#todo</div>

          <div className="navigation">
            <All_component setActiveTab={setActiveTab} activeTab={activeTab} />
            <Active_component
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            />
            <Completed_component
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            />
          </div>
          <Routes>
            <Route
              path="/"
              element={<AddDetail_component activeTab={activeTab} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
