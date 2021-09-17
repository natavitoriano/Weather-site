import React from "react";

import { CustomHeader } from "./header";
import { Title } from "../layout/Title";

//this component is the page header
const Header = props => (
    <header>
        <CustomHeader flex='row' items="center" justify="center">
            <Title>Meteorologia</Title>
        </CustomHeader>
    </header>
)

export default Header;