import React, { useState } from 'react';
import DropDown from './components/DropDown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Rentals from './pages/Rentals';
import Homes from './pages/Homes';

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
    <Router>   
      <GlobalStyle />
      <Navbar toggle= {toggle}/>
      <DropDown isOpen={isOpen} toggle={toggle} />
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/about' exact component={About}/>
      <Route path='/homes' exact component={Homes}/>
      <Route path='/rentals' exact component={Rentals}/>
      </Switch>
      <Footer />
      </Router>
    </>
  );
}

export default App;
