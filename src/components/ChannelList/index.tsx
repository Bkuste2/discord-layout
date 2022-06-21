import React from "react";
import { Container, Category, AddSpanIcon} from "./styles";
import ChannelButton from "../ChannelButton";

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Canais de Texto</span>
                <AddSpanIcon/>
            </Category>
            
            <ChannelButton channelName="chat-livre"/>
            <ChannelButton channelName="trabalho"/>
            <ChannelButton channelName="cs"/>
            <ChannelButton channelName="Lol"/>
            <ChannelButton channelName="Vavas"/> 
           
        </Container>
    )
}

export default ChannelList;