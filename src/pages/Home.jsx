import React from 'react';
import styled from "styled-components";
import Card from '../components/Card';
import CardA from '../components/CardA';
import CardB from '../components/CardB';


const Container = styled.div`

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;


const Home = () => {
  return (
    <Container>
        <Card/>
        <CardA/>
        <CardB/>
    </Container>
  )
};

export default Home;