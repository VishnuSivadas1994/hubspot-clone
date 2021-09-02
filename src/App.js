import './App.css';

//importing router modules
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';

//import components


import NavBar from './components/navbar/navbar';
import Homepage from './components/homepage/homepage';
import Contact from './components/contact/contact';
import Conversation from './components/conversation/conversation';
import Marketing from './components/marketing/marketing';
import Sales from './components/sales/sales';
import Service from './components/service/service';
import Automation from './components/automation/automation';
import Reports from './components/reports/reports';
import Account from './components/account/account';

// import NavBar from './components/CustomNavBar';


function App() {
  return (
    <BrowserRouter basename="/hubspot-clone">
      <NavBar />
      <Switch>

        <Route component={Homepage} path='/' exact />
        <Route component={Contact} path='/contacts' />
        <Route component={Conversation} path='/conversations' />
        <Route component={Marketing} path='/marketing' />
        <Route component={Sales} path='/sales' />
        <Route component={Service} path='/service' />
        <Route component={Automation} path='/automation' />
        <Route component={Reports} path='/reports' />
        <Route component={Account} path='/account' />

      </Switch>
    </BrowserRouter>
    // <BrowserRouter>
    //   <NavBar/>

    // </BrowserRouter>
  );
}

export default App;
