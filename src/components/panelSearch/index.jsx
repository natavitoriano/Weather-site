import React, { useState } from "react";
import axios from 'axios';

//import components
import { Title } from "../layout/Title";
import { Button, InputSearch, Text } from './styles';
import CustomAlert from "../layout/CustomAlert";
import { Flex } from "../layout/Flex.js";
import { Panel } from "../layout/ContainerPanel.js";

//import react-icons
import { AiOutlineSearch } from 'react-icons/ai';
import { FaCity, FaTemperatureHigh } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';
import { BsDropletHalf } from 'react-icons/bs';
import { WiDayRainMix } from 'react-icons/wi';

/* This component is the first panel or left panel, it is used
for city search to return temperature, climate, humidity and
country.
*/
const PanelSearch = props => {
  //state for alert control and visibility
  const [alertMsg, setAlertMsg] = useState({msg: "", visibility: "hidden"})
  const [input, setInput] = useState('');
  //state that will contain weather information of the city
  const [informations, setInformations] = useState({ 
    city: "--- // ---", 
    country: "--- // ---", 
    temperature: "--- // ---", 
    moisture: "--- // ---", 
    climate: "--- // ---"
  });

  //Hide alert function
  const alertHidden = () => {
      setAlertMsg({msg:"",visibility: "hidden"})
  }

  //function to send surveyed city to return weather information
  const sendCity = async () => {
    if(input !== ''){
        let inputText = encodeURI(input)
        const api = axios.create({
            baseURL: encodeURI(`http://localhost:8080/temp/${inputText}`),
        })

        const response = await api.get();
        //If the city informed is not found it returns an error message to the user
        if(response.data.message === 'Request failed with status code 404'){
            setAlertMsg({msg: "A cidade digitada não foi encontrada!", visibility: "visible"})
        }else{
            //return weather information to the user
            setInformations({
                city: response.data.name, 
                country: response.data.sys.country, 
                temperature: response.data.main.temp, 
                moisture: response.data.main.humidity, 
                climate: response.data.weather[0].description
            })
            //Updates latest polls and top five
            props.update();
        }   
    }
    else{
        //If the input is empty return an error message to the user
        setAlertMsg({msg: "O campo de pesquisa está vazio!", visibility: "visible"})
    }
  }

  return (
    <Panel>
        <Title>Painel de pesquisa</Title>
        <Flex flex='row' justify='space-around' margin='10px'>
            <InputSearch type="text" placeholder="Pesquise por uma cidade..."
                value={input} onChange={e => setInput(e.target.value)}/>
            <Button onClick={() => sendCity()}> 
                <AiOutlineSearch />
            </Button>
        </Flex>
        <Flex flex='column' justify="center" flexValue="1">
            <Flex flex='row' justify='space-around'>
                <Text><FaCity />  Cidade: {informations.city}</Text>
                <Text><BiWorld /> País: {informations.country}</Text>
            </Flex>
            <Flex flex='column' items="center">
                <Text><FaTemperatureHigh /> Temperatura: {informations.temperature}</Text>
                <Text><BsDropletHalf /> Umidade: {informations.moisture}</Text>
                <Text><WiDayRainMix /> Clima: {informations.climate}</Text>
            </Flex>  
        </Flex>
        <CustomAlert alert={alertMsg} updateAlert={alertHidden}/>
    </Panel>
  )
}

export default PanelSearch;