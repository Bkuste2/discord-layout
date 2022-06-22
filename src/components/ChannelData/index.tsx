import React from "react";
import ChannelMessage, { Mention } from "../ChannelMessage";
import { Container, Messages, Input, InputWrapper, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
    return (
        <Container>
            
            <Messages>
                <ChannelMessage
                    author="Bkuste2"
                    date="22/06/2022"
                    content="To virando um monstro no react!"
                />
                <ChannelMessage
                    author="Bkuste2"
                    date="22/06/2022"
                    content="To virando um monstro no react!"
                />
                <ChannelMessage
                    author="Bkuste2"
                    date="22/06/2022"
                    content="To virando um monstro no react!"
                />
                <ChannelMessage
                    author="Bkuste2"
                    date="22/06/2022"
                    content="To virando um monstro no react!"
                />
                <ChannelMessage
                    author="Bkuste2"
                    date="22/06/2022"
                    content="To virando um monstro no react!"
                />
                <ChannelMessage
                    author="Bkuste2"
                    date="22/06/2022"
                    content="To virando um monstro no react!"
                />
                <ChannelMessage
                    author="Bkuste2"
                    date="22/06/2022"
                    content="To virando um monstro no react!"
                />
                <ChannelMessage
                    author="Bkuste2"
                    date="22/06/2022"
                    content="To virando um monstro no react!"
                />
                <ChannelMessage
                    author="Bkuste2"
                    date="22/06/2022"
                    content="To virando um monstro no react!"
                />
                <ChannelMessage
                    author="Bkuste2"
                    date="22/06/2022"
                    content="To virando um monstro no react!"
                />
                <ChannelMessage
                    author="Bkuste2"
                    date="22/06/2022"
                    content="To virando um monstro no react!"
                />
                <ChannelMessage
                    author="Bkuste2"
                    date="22/06/2022"
                    content="To virando um monstro no react!"
                />
                <ChannelMessage
                    author="Bkuste2"
                    date="22/06/2022"
                    content="To virando um monstro no react!"
                />
                <ChannelMessage
                    author="Bkuste2"
                    date="22/06/2022"
                    content="To virando um monstro no react!"
                />
                <ChannelMessage
                    author="Bkuste2"
                    date="22/06/2022"
                    content="To virando um monstro no react!"
                />
                <ChannelMessage
                    author="Bkuste2"
                    date="22/06/2022"
                    content="To virando um monstro no react!"
                />

                <ChannelMessage
                    author="Diego Fernandes"
                    date="21/06/2020"
                    content={
                        <>
                        <Mention>@Guilherme Rodz</Mention>, me carrega no LoL e CS de novo
                        por favor?
                        </>
                    }
                    hasMention
                    isBot
                />

            </Messages>
            <InputWrapper>
                <Input type={"text"} placeholder="Conversem #chat-livre"/>
                <InputIcon/>
            </InputWrapper >
        </Container>
    )
}

export default ChannelData;