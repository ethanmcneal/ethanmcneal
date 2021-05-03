import {Route, Switch} from 'react-router'
import Home from './pages/Home';

function App() {
  return (
    <div style={{backgroundColor: '	#f9f1f1', marginTop: '0'}}>
    <Switch>
   <Route exact path='/' component={Home}/>
   </Switch>
   </div>
  );
}

export default App;
