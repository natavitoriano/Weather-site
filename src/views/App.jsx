import React, { useState } from "react";

import PanelSearch from "../components/panelSearch/index";
import PanelTopSearch from "../components/panelTopSearch/index";
import Header from "../components/header/index"
import Footer from "../components/footer/index"
import { Main, Content } from "./App.js";

  
const App = props => {
  const [isUpdate, setisUpdate] = useState(false);

  //function to check if the search button was clicked to refresh the page
  const update = () => setisUpdate(isUpdate === false? true: false);

  return(
    <Content>
      <Header />
      <Main>
        <PanelSearch update={update}/>
        <PanelTopSearch update={isUpdate}/>
      </Main>
      <Footer />
    </Content>
  )
}

export default App;
