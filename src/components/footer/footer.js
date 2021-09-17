import styled from "styled-components";

import { MediaLarge, MediaMedium } from "../../assets/styles/medias";
import { Flex } from "../layout/Flex";

export const CustomFooter = styled(Flex)`
    background-color: var(--secundary-color); 
    min-height: 7vh;

    @media(min-width: ${MediaMedium}){
        min-height: 8vh;
    }

    @media(min-width: ${MediaLarge}){
        min-height: 9vh;
    }
` 