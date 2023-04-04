import styled from '@emotion/styled';
import Header from '../../components/Header';
import AggregateParameter from './componentsHome/AggregateParameters';
import ChartOne from './componentsHome/Chart1';
import Footer from '../../components/Footer';
import InjectionSite from './componentsHome/InjectionSite';
import * as React from 'react';
import { useLogin } from '../../hooks/useLogin';
import BoxChat from './componentsHome/BoxChat';

const HomePage = styled.div`
position: relative
`;

const Home = () => {
  useLogin();
  return (
    <HomePage>
      <Header />
      <AggregateParameter />
      <ChartOne />
      <InjectionSite />
      <Footer />
      <BoxChat />
    </HomePage>
  );
};

export default Home;
