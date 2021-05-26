import './App.css';
import Navbar from './components/Navbar';
import theme from './theme';
import {ThemeProvider} from 'styled-components';
import BannerComponent from './components/Banner';
import HeroComponent from './components/Hero';
import StyledApp from './styled-components/GlobalStyles';
import GettingStarted from './components/GettingStarted';
import TableView from './components/TableView';
import Extras from './components/Extras';
import Points from './components/Points';
import LoadPoints from './components/LoadPoints';
import Questions from './components/Questions';
import TermsAndConditions from './components/TermsAndConditions';
import Footer from './components/Footer';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <Navbar />
        <main>
          <BannerComponent />
          <HeroComponent />
          <GettingStarted />
          <TableView />
          <Extras />
          <Points />
          <LoadPoints />
          <Questions />
          <TermsAndConditions />
        </main>
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
