import styled from "styled-components";

import { MediaLarge, MediaMedium } from "../../assets/styles/medias";

export const Title = styled.h1`
    display: flex;
    font-size: var(--font-medium);
    justify-content: center;
    margin-top: 5px;

    @media(min-width: ${MediaMedium}){
        font-size: var(--font-large);
    }

    @media(min-width: ${MediaLarge}){
        font-size: var(--font-big-large);
    }
`