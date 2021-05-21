import {Route, Switch} from 'react-router'
import Home from './pages/Home';
import Landing from './pages/Landing';
import MUSN from './pages/MUSN';
import Streaks from './pages/Streaks';

function App() {
  return (
    <div style={{backgroundColor: '#222222', marginTop: '0', color: 'white'}}>
    <Switch>
   <Route exact path='/' component={Landing}/>
   <Route exact path='/ethanmcneal' component={Home}/>
   <Route exact path='/streaks' component={Streaks}/>
   <Route exact path='/musn' component={MUSN}/>
   </Switch>
   </div>
  );
}

export default App;
