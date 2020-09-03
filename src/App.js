import React from 'react';
import {BrowserRouter, Switch,Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/project/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/project/CreateProject'
class App extends React.Component {
  render(){
  return (
    <BrowserRouter>
   
    <div className="App">
    
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/project/:id" component={ProjectDetails}/>
        <Route path='/signin' component={SignIn}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/create' component={CreateProject}/>
      </Switch>
    </div>
    </BrowserRouter>
  );

}
}
//allow read, write: if
//request.time < timestamp.date(2020, 10, 2);

export default App;
