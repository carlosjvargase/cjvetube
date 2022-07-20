import React from 'react'
import styled from "styled-components";
import Comment from './Comment';
import noAvatar from "../img/noAvatar.png"


const Container = styled.div`


`;

const NewComment = styled.div`

    display: flex;
    align-items: center;
    gap: 10px;
`;

const Avatar = styled.img`

    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-top: 10px;
`;

const Input= styled.input`

    border: none;
    border-bottom: 1px solid ${({theme}) => theme.soft};
    background-color: transparent;
    outline: none;
    padding: 5px;
    width: 100%;
`;



const Comments = () => {
  return (
    <Container>
        <NewComment>
            <Avatar src={noAvatar}/>
            <Input placeholder="Add a comment..."/>
        </NewComment>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
    </Container>
  );
};

export default Comments;