import Topbar from './scripts/Topbar.jsx'
import Homepage from './scripts/Homepage.jsx'
import CreatePost from './scripts/CreatePost.jsx';
import Signup from './scripts/Signup.jsx';
import Login from './scripts/Login.jsx';
import { Context } from './scripts/Context.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from 'react';


function App() {
  const { user } = useContext(Context);
  ;
  return (
    <>
    <Router>
    <Topbar/>
    <Switch>
      <Route exact path="/">
   { user ? <Homepage/> : <Signup/>}
      </Route>

      <Route path="/Signup">
      { user ? <Homepage/> : <Signup/>} 
      </Route>

      <Route path="/CreatePost">
      { user ? <CreatePost/> : <Signup/>} 
      </Route>

      <Route path="/Login">
      { user ? <Homepage/> : <Login/>}  
      </Route>


    </Switch>
    </Router>
    </>
    )
  
}

export default App;
