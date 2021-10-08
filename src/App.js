import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import './app.css'
import Home from './Pages/Home'
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import UserList from "./Pages/UserList/UserList";
import User from "./Pages/User/User";
import NewUser from "./Pages/User/NewUser";


function App() {
  return (
    <Router className="App"> 
         <Topbar />
         <div className="container">
            <Sidebar />
            <Switch>

              <Route exact path="/">
                 <Home />
              </Route>

              <Route path="/users">
                 <UserList />
              </Route>

              <Route path="/user/:userId">
                 <User />
              </Route>

              <Route path="/newUser">
                 <NewUser />
              </Route>

            </Switch>
           
         </div> 
    </Router>
  );
}

export default App;
