import {Route, Switch} from 'react-router'
import Home from './pages/Home';
import MUSN from './pages/MUSN';
import Streaks from './pages/Streaks';

function App() {
  return (
    <div style={{backgroundColor: '#F5F6F8', marginTop: '0'}}>
    <Switch>
   <Route exact path='/' component={Home}/>
   <Route exact path='/streaks' component={Streaks}/>
   <Route exact path='/musn' component={MUSN}/>
   </Switch>
   </div>
  );
}

export default App;
