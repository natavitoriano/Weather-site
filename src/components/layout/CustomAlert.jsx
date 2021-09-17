import React from "react";
import { AlertDiv, FixedDiv, Button, ContentButton, ErrorIcon, MsgText } from "./CustomAlertStyle";
import { Flex } from "./Flex";

//This component is used to return error messages to the user
const CustomAlert = (props) => {
    return(
        /*props.alert.visibility shows whether the message will be visible or not
        props.alert.msg is the error message
        */
        <FixedDiv visibility={props.alert.visibility}>
            <AlertDiv>
                <Flex flex="row" justify="space-between">
                    <MsgText>{props.alert.msg}</MsgText>
                    <ErrorIcon />
                </Flex>
                <ContentButton>
                    <Button onClick={() => props.updateAlert()}>Ok</Button>
                </ContentButton>
            </AlertDiv>
        </FixedDiv>
    )
}

export default CustomAlert;