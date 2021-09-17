import styled from 'styled-components';

import { MediaMedium } from '../../assets/styles/medias';

export const Panel = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    background-color: var(--platinum);
    box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
    animation: 1s ease-out 0s 1 slideInFromLeft;

    @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }

    @media(min-width: ${MediaMedium}){
        width: 100%;
    }
`

