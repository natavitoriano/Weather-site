import React, { useEffect, useState } from "react";
import axios from 'axios';

import { Panel } from "../layout/ContainerPanel.js";
import { Flex } from "../layout/Flex";
import { Title } from "../layout/Title";
import { Table, TableData, TableRow, TableTitleColumn } from "./styles";

//Panel with top cities surveyed and latest surveys done
const PanelTopSearch = props => {
    const [topCities, setTopCities] = useState([]);
    const [latestCities, setLatestCities] = useState([]);

    //Updates the information in the tables if any city is searched
    useEffect(function (){
        //update top five table
        async function getApiTop(){
            const apiTop = axios.create({
                baseURL: `http://localhost:8080/topcities`,
            })
            const response = await apiTop.get()
            setTopCities(response.data)
        }
        //updates table of latest searches
        async function getApiLatest(){
            const apiLatest = axios.create({
                baseURL: `http://localhost:8080/latestcities`,
            })
            const response = await apiLatest.get()
            setLatestCities(response.data)
        }
        getApiTop();
        getApiLatest();
    },[props.update]);

    return(
        <Panel>
            <Flex flex='column'>
                <Title>Top 5 cidades mais pesquisadas</Title>
                <Table>
                    <tbody>
                    <TableRow>
                        <TableTitleColumn>Cidades</TableTitleColumn>
                        <TableTitleColumn>Número de pesquisas</TableTitleColumn>
                    </TableRow>
                    {topCities.map(city => (
                        <TableRow key={city.name}>
                            <TableData>{city.name}</TableData>
                            <TableData>{city.count}</TableData>
                        </TableRow>
                    ))}
                    </tbody>
                </Table>
                <Title>Ultimas pesquisas</Title>
                <Table>
                    <tbody>
                    <TableRow>
                        <TableTitleColumn>Cidades</TableTitleColumn>
                    </TableRow>
                    {latestCities.map(city => (
                        <TableRow key={city.name}>
                            <TableData>{city.name}</TableData>
                        </TableRow>
                    ))}
                    </tbody>
                </Table>
            </Flex>
    </Panel>
    )
}

export default PanelTopSearch;