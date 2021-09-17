import styled from "styled-components";

import { MediaLarge, MediaMedium } from "../assets/styles/medias";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    @media(min-width: ${MediaMedium}){
        flex-direction: row;
    }

    @media(min-width: ${MediaLarge}){
        flex-direction: row;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;
`