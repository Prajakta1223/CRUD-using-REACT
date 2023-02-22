import './App.css';
import Home from './components/Home';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Switch,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
      <Router>
        
        <Switch>
          
          <Route path="/add" component={AddUser} />
          <Route path="/edit:id" component={EditUser} />
          <Route path="/"  component={Home}/>
        
          </Switch>
      </Router>

    </div>
  );
}

export default App;
