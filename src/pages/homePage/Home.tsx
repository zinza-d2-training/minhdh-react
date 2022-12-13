import styled from '@emotion/styled';
import Header from '../../components/Header';
import AggregateParameter from './componentsHome/AggregateParameters';
import ChartOne from './componentsHome/Chart1';
import Footer from '../../components/Footer';
import InjectionSite from './componentsHome/InjectionSite';

const HomePage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #ffffff;
`;

const Home = () => {
  return (
    <HomePage>
      <Header />
      <AggregateParameter />
      <ChartOne />
      <InjectionSite />
      <Footer />
    </HomePage>
  );
};

export default Home;
