import React from "react";
import { Container, Role, User, Avatar } from "./styles";

interface userProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<userProps> = ({nickname, isBot}) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''} />
            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    )
}

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickname="Guilherme Rodz" />

            <Role>Offline - 18</Role>
            <UserRow nickname="Diego Fernandes" isBot />
            <UserRow nickname="Diego Fernandes"/>
            <UserRow nickname="Diego Fernandes"/>
            <UserRow nickname="Diego Fernandes"/>
            <UserRow nickname="Diego Fernandes"/>
            <UserRow nickname="Diego Fernandes"/>
            <UserRow nickname="Diego Fernandes"/>
            <UserRow nickname="Diego Fernandes"/>
            <UserRow nickname="Diego Fernandes"/>
            <UserRow nickname="Diego Fernandes"/>
            <UserRow nickname="Diego Fernandes"/>
            <UserRow nickname="Diego Fernandes"/>
            <UserRow nickname="Diego Fernandes"/>
            <UserRow nickname="Diego Fernandes"/>
            <UserRow nickname="Diego Fernandes"/>
            <UserRow nickname="Diego Fernandes"/>
            <UserRow nickname="Diego Fernandes"/>
            <UserRow nickname="Diego Fernandes"/>
            <UserRow nickname="Diego Fernandes"/>
            <UserRow nickname="Diego Fernandes"/>
            <UserRow nickname="Diego Fernandes"/>
            <UserRow nickname="Diego Fernandes"/>
            <UserRow nickname="Diego Fernandes"/>
            <UserRow nickname="Diego Fernandes"/>
        </Container>
    )
}

export default UserList;