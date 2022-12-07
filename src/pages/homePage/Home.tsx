import styled from '@emotion/styled';
import Header from './component_homePage/HeaderHomePage';
import BoxResearch from './component_homePage/BoxResearch';
import AggregateParameter from './component_homePage/AggregateParameters';
import ChartOne from './component_homePage/Chart1';
import Footer from './component_homePage/Footer';
import InjectionSite from './component_homePage/InjectionSite';

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
