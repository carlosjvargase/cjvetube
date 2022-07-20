import React from 'react'
import styled from "styled-components";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import Comments from '../components/Comments';
import Card from '../components/Card';
import CardA from '../components/CardA';
import CardB from '../components/CardB';
import { videos } from "../helpers/library";
const Container = styled.div`

    display: flex;
    gap: 24px;
`;

const Content = styled.div`

    flex: 5;
`;

const VideoWrapper = styled.div`

    width: 100%;
`;

const Title = styled.h1`

    font-size: 17px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 10px;
    color: ${({theme}) => theme.text};
`;


const Details = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
`;

const Info= styled.span`
    color: ${({theme}) => theme.textSoft};    
`;

const Buttons = styled.div`

    display: flex;
    gap: 20px;
    color: ${({theme}) => theme.text};
    font-size: 12px;

    
`;

const Button = styled.div`

    display: flex;    
    align-items: center;
    gap: 5px;
    cursor: pointer;
`;

const Hr = styled.hr`

    margin-top: 15px 0px;
    border: 0.5px solid ${({theme}) => theme.soft};
`;


const Recommendation = styled.div`

    flex: 2;
`;

const Channel = styled.div`

    display: flex;
    justify-content: space-between;
`;

const ChannelInfo = styled.div`

    display: flex;
    gap: 20px;
`;

const Image = styled.img`

    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-top: 10px;
`;

const ChannelDetail = styled.div`

    margin-top: 10px;
    display: flex;
    flex-direction: column;
    color: ${({theme}) => theme.text};
`;

const ChannelName = styled.span`

    font-weight: 500;
`;

const ChannelCounter = styled.span`

    margin-top: 5px;
    margin-bottom: 20px;
    color: ${({theme}) => theme.textSoft}; 
    font-size: 12px;
`;

const Description = styled.p`

    
    font-size: 14px;
`;

const Subscribe = styled.button`

    background-color: #06b270;
    border: none; 
    border-radius: 3px;
    font-weight: 500;
    color: white;
    height: max-content;
    padding: 10px 20px;
    margin-top: 10px;
    cursor: pointer;
`;



const Video = () => {
  return (
    <Container>
        <Content>
            <VideoWrapper>
                <iframe width="100%" height="720" src={videos[0].Video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </VideoWrapper>
            <Title>{videos[0].Title}</Title>
            <Details>
                <Info>{videos[0].Info}</Info>
                <Buttons>
                    <Button><ThumbUpOutlinedIcon/>{videos[0].Like}</Button>
                    <Button><ThumbDownAltOutlinedIcon/> Dislike</Button>
                    <Button><ReplyOutlinedIcon/> Share </Button>
                    <Button><AddTaskOutlinedIcon/> Save </Button>
                </Buttons>
            </Details>
            <Hr/>
            <Channel>
                <ChannelInfo>
                    <Image src={videos[0].Avatar}/>
                    <ChannelDetail>
                        <ChannelName>{videos[0].ChannelName}</ChannelName>
                        <ChannelCounter>{videos[0].ChannelCounter}</ChannelCounter>
                        <Description>{videos[0].Description}</Description>
                    </ChannelDetail>
                </ChannelInfo>
                    <Subscribe>SUBSCRIBE</Subscribe>
            </Channel>
            <Hr/>
            <Comments/>
        </Content>

        <Recommendation>
            <Card type="sm"/>
            <CardA type="sm"/>
            <CardB type="sm"/>
            <Card type="sm"/>
            <CardA type="sm"/>
            <CardB type="sm"/>
            <Card type="sm"/>
            <CardA type="sm"/>
        </Recommendation>
    </Container>
  );
};

export default Video;