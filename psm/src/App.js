import './App.css';
import Home from './comp/Home';
import Contact from './comp/Contact';
import Navigate from './comp/Navigate';
import Heading from './comp/Heading';
import Yash from './comp/Yash';
import {BrowserRouter as Switch, Route, Router} from 'react-router-dom'
import Placement from './comp/Placement';

function App() {
  return (

      
      <Router>
       <div className ="App">
       <Navigate></Navigate>
       <Heading></Heading>
       <Switch>
       <Route exact path = "/Home" component = {Home}></Route>
       <Route exact path = "/Yash" component = {Yash}></Route>
       <Route exact path = "/Contact" component = {Contact}></Route>
       <Route exact path = "/Placement" component = {Placement}></Route>
       </Switch>
       </div>
      </Router>
  
  );
}
// yash
export default App;