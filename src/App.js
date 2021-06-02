import React from 'react';
import {Router, Route, Switch} from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import {Container} from 'reactstrap';

import Footer from './components/Footer';
import Graphs from './components/Graphs';
import Header from './components/Header';
import Survey from './components/Survey';

function App() {


  return (
    <>
      <Container>
      <BrowserRouter>
        <Header />
        <h1>App Component</h1>
        <Switch>
          <Route  exact path ='/' component={Survey} />
          <Route  path = '/Graphs' component={Graphs}/>
        </Switch>
      </BrowserRouter>
     
     <Footer />
      </Container>
      
       
    </>
  );
}

export default App;
