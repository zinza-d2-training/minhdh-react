import styled from '@emotion/styled';
import Header from '../../components/Header';
import BoxResearch from './components-home/BoxResearch';
import AggregateParameter from './components-home/AggregateParameters';
import ChartOne from './components-home/Chart1';
import Footer from './components-home/Footer';
import InjectionSite from './components-home/InjectionSite';

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
      <BoxResearch />
      <AggregateParameter />
      <ChartOne />
      <InjectionSite />
      <Footer />
    </HomePage>
  );
};

export default Home;
