import React from "react";
import { Container, Messages, Input, InputWrapper, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
    return (
        <Container>
            
            <Messages>

            </Messages>
            <InputWrapper>
                <Input type={"text"} placeholder="Conversem #chat-livre"/>
                <InputIcon/>
            </InputWrapper >
        </Container>
    )
}

export default ChannelData;