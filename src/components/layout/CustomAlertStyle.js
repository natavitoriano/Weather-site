import styled from "styled-components";

import { BiError } from 'react-icons/bi';
import { MediaLarge, MediaMedium } from "../../assets/styles/medias";

export const MsgText = styled.h1`
    font-size: var(--font-small);
    @media(min-width: ${MediaMedium}){
        font-size: var(--font-medium);
    }

    @media(min-width: ${MediaLarge}){
        font-size: var(--font-large);
    }
`

export const FixedDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    background-color: rgb(0,0,0, 0.9);
    z-index: 9999;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    visibility: ${props => props.visibility};
`

export const AlertDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    justify-content: space-between;
    background-color: var(--secundary-color);
    border-radius: 5px;
    width: 80%;
    height: 20%;

    @media(min-width: ${MediaMedium}){
        width: 50%;
        height: 30%;
    }

`

export const ContentButton = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const Button = styled.button`
    font-family: Oswald;
    font-weight: bold;
    font-size: var(--font-small);
    padding: 5px 20px;
    border-radius: 50px;

    @media(min-width: ${MediaMedium}){
        font-size: var(--font-medium);
    }

    @media(min-width: ${MediaLarge}){
        font-size: var(--font-large);
    }
`

export const ErrorIcon = styled(BiError)`
    font-size: 2rem;
    @media(min-width: ${MediaMedium}){
        font-size: 3rem;
    }

    @media(min-width: ${MediaLarge}){
        font-size: 5rem;
    }
`