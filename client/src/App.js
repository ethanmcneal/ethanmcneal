import {Route, Switch} from 'react-router'
import Home from './pages/Home';

function App() {
  return (
    <div>
    <Switch>
   <Route exact path='/' component={Home}/>
   </Switch>
   </div>
  );
}

export default App;
