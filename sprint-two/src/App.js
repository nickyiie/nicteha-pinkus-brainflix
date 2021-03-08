import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './pages/Main/Main';
import Header from './components/Header/Header';
import Upload from './pages/Upload/Upload';




class App extends Component {
     
  render() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path='/' exact component={Main}/>
          <Route path='/upload' component={Upload}/>
          <Route path='/videos/:videoId' exact component={Main}/> 
        </Switch>
      </BrowserRouter>
    </div>
  );
}}

export default App;
