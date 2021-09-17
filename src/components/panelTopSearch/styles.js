import styled from 'styled-components';

import { MediaLarge, MediaMedium } from '../../assets/styles/medias';

export const Table = styled.table`
    border-collapse: collapse;
    margin-top: 20px;
    margin-bottom: 5px;
    tr:nth-child(even){background: #FFFFFF}
    tr:nth-child(odd) {background: #E1E1E1}    
`

export const TableTitleColumn = styled.th`
    background: var(--secundary-color);
    border: solid 1px #AAAAAA;
    font-size: var(--font-small);
    font-weight: bold;

    @media(min-width: ${MediaMedium}){
        font-size: var(--font-large);
    }

    @media(min-width: ${MediaLarge}){
        font-size: var(--font-big-large);
    }
`

export const TableRow = styled.tr`
    border: solid 1px #AAAAAA; 
`
export const TableData = styled.td`
    border: solid 1px #AAAAAA;
    text-align: center;
    font-size: var(--font-small);

    @media(min-width: ${MediaMedium}){
        font-size: var(--font-medium);
    }

    @media(min-width: ${MediaLarge}){
        font-size: var(--font-large);
    }
`

export const NoData = styled.h1`
    font-size: var(--font-small);
    visibility: ${props => props.visibility};

@media(min-width: ${MediaMedium}){
    font-size: var(--font-large);
}

@media(min-width: ${MediaLarge}){
    font-size: var(--font-big-large);
}
`