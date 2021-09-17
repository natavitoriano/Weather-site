import styled from 'styled-components'

import { MediaLarge, MediaMedium } from '../../assets/styles/medias';

export const Button = styled.button`
    margin-left: 10px;
    border-radius: 10px;
    font-size: var(--font-small);
    font-family: Oswald;
    font-weight: bold;
    padding: 0px 5px 0px 5px;

    @media(min-width: ${MediaMedium}){
        font-size: var(--font-medium);
    }

    @media(min-width: ${MediaLarge}){
        font-size: var(--font-large);
    }
`;

export const InputSearch = styled.input`
    font-size: var(--font-small);
    width: 80%;
    border-radius: 10px;
    padding: 5px;
    outline: 0;

    &:focus{
        border: solid 3px #00000090;
    }

    @media(min-width: ${MediaMedium}){
        font-size: var(--font-medium);
    }

    @media(min-width: ${MediaLarge}){
        font-size: var(--font-large);
    }
`

export const Text = styled.h1`
    margin-top: 20px;
    font-size: var(--font-small);

    @media(min-width: ${MediaMedium}){
        font-size: var(--font-large);
    }

    @media(min-width: ${MediaLarge}){
        font-size: var(--font-big-large);
    }
`