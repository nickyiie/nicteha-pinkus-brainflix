import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './pages/Main'
import Header from './components/Header/Header'




class App extends Component {
     
  render() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path='/' exact component={Main}/>
          {/* <Route path='/upload' component={Upload}/> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}}

export default App;
