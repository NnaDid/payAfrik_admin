import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import './app.css'
import Home from './Pages/Home'
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import UserList from "./Pages/UserList/UserList";
import User from "./Pages/User/User";
import NewUser from "./Pages/User/NewUser";
import Login from "./Pages/Login";


function App() {
   const isLoggedIn = false;
  return (
    <Router className="App"> 
      <Login /> 
            {/* <div> */}
               {/* <Topbar /> */}
               {/* <div className="container-fluid"> */}
                  {/* <Sidebar />   */}
                  
                  {/* <Switch>

                  <Route exact path="/">
                     <Home />
                  </Route>

                  <Route path="/users">
                     <UserList />
                  </Route>

                  <Route path="./admin">
                     <UserList />
                  </Route>

                  <Route path="/user/:userId">
                     <User />
                  </Route>

                  <Route path="/newUser">
                     <NewUser />
                  </Route>

                  </Switch> */}
               
               {/* </div> 
            </div> */}
         
    </Router>
  );
}

export default App;
