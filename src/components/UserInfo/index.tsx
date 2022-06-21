import React from "react";
import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadFoneIcon, SettingsIcon } from "./styles";

const UserInfo: React.FC = () => {
    return (
        <Container>
            <Profile>
                <Avatar />
                <UserData>
                    <strong>Bkuste2</strong>
                    <span>#8110</span>
                </UserData>
            </Profile>
            <Icons>
                <MicIcon />
                <HeadFoneIcon />
                <SettingsIcon />
            </Icons>
        </Container>
    )
}

export default UserInfo;