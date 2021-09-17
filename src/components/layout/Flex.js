import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    flex-direction: ${props => props.flex};
    justify-content: ${props => props.justify};
    align-items: ${props => props.items};
    margin-top: ${props => props.margin};
    flex: ${props => props.flexValue};
    width: ${props => props.width};
`