import React, { useContext } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { PorfolioContext } from './components/Context/PorfolioContext';
import { BackDrop } from './components/Navbar/backdrop/BackDrop';
import { Navbar } from './components/Navbar/Navbar';
import { SideMenu } from './components/Navbar/SideMenu/SideMenu';
import { AboutPage } from './components/pages/about/AboutPage';
import { BlogDetail } from './components/pages/blog/blogdetail/BlogDetail';
import { BlogPage } from './components/pages/blog/BlogPage';
import { ContactPage } from './components/pages/contact/ContactPage';
import { Dashboard } from './components/pages/dashboard/Dashboard';
import { HomePage } from './components/pages/home/HomePage';
import { PorfolioDetail } from './components/pages/porfolio/detailPorfolio/PorfolioDetail';
import { PorfolioPage } from './components/pages/porfolio/PorfolioPage';
import { GlobalStyles } from './themes/global';
import { darkTheme, lightTheme } from './themes/theme';

// Main SASS style
import './_main.scss';

function App() {

  const { toggleMenu, theme } = useContext(PorfolioContext);


  return (

    <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme }>
    <>
      <GlobalStyles />

      <Router>
        <div>
          {/* Navbar */}
          <Navbar />
          {/* /Navbar */}

          {/* Sidebar when do Click on burger */}
          {
            toggleMenu
            ?
            <>
              <SideMenu />
              <BackDrop />
            </>
            :
            <div></div>
          }


          {/* Switch path */}
          <Switch>
            <Route exact path="/"> 
              <HomePage />
            </Route>
            <Route exact path="/about"            component={ AboutPage }/>
            <Route exact path="/porfolio"         component={ PorfolioPage }/>
            <Route exact path="/porfolio/:number" component={ PorfolioDetail }/>
            <Route exact path="/blog"             component={ BlogPage }/>
            <Route exact path="/blog/:slug"       component={ BlogDetail } />
            <Route exact path="/contact"          component={ ContactPage }/>
            <Route exact path="/dashboard"        component={ Dashboard }/>
          </Switch>
          {/* /Switch path */}
        </div>
      </Router>


    </>
    </ThemeProvider>

  );
}

export default App;
