import React, { Component } from 'react';
import {HashRouter,Route,Link,BrowserRouter,Switch} from "react-router-dom"
//components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Portfolio from './components/pages/portfolioPage';
import LearnMorePage from './components/pages/learnMorePage';
import ContactUsPage from './components/pages/contactUsPage';
import BootStrapModal from './components/pages/bootStrapModal';
//includes


class App extends Component {
  render() {
    return (
      <div className="App">

        <Header/>
        <HashRouter basename="/">
        <Switch>
        <Route exact path="/Portfolio" component={Portfolio}/>
        <Route exact path="/ContactUs" component={ContactUsPage}/>
        <Route exact path="/LearnMore" component={LearnMorePage}/>
          <Route exact path="/Modals" component={BootStrapModal}/>
        <Route exact path="/" component={Homepage}/>
        </Switch>
        </HashRouter>
        <Footer/>

      </div>
    );
  }
}

export default App;
