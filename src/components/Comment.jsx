import React from 'react'
import styled from "styled-components";
import avatar from "../img/avatar.PNG"

const Container = styled.div`

    display: flex;
    gap: 10px;
    margin: 30px 0px;
`;

const Avatar = styled.img`

    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-top: 10px;
`;

const Details = styled.div`

    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${({theme}) => theme.text};
`;

const Name = styled.span`

    font-size: 13px;
    font-weight: bold;
`;

const Date = styled.span`

    font-size: 12px;
    font-weight: 400;
    color: ${({theme}) => theme.textSoft};
    margin-left: 5px; 
`;

const Text = styled.span`

    font-size: 14px;
    color: ${({theme}) => theme.text};
`;

const Comment = () => {
  return (
    <Container>
        <Avatar src={avatar}/>
        <Details>
            <Name>Carlos Vargas <Date>1 day ago</Date></Name>
            <Text>
                The Best Video in the world!!!
            </Text>

        </Details>
    </Container>
  );
};

export default Comment;