import React from "react";
import './App.css';

import PanelSearch from "./PanelSearch";
import PanelTopSearch from "./PanelTopSearch";
import Title from "../components/Title"

const App = props => (
  <div>
    <Title/>
    <div className="div-app">
      <PanelSearch />
      <PanelTopSearch />
    </div>
  </div>
)

export default App;
