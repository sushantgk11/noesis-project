import './App.css';
import Productlist from './components/Productlist';
import Productdetails from './components/Productdetails';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (<>
    <Header/>
    <Switch>
      <Route exact path='/noesis-project' component={Productlist}></Route>
      <Route path='/Productdetails/:id' component={Productdetails}></Route>
    </Switch></>
  );
}

export default App;
