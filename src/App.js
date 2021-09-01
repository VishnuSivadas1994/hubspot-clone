import './App.css';

//importing router modules
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import components
import NavBar from './components/navbar/navbar';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
    </BrowserRouter>
  );
}

export default App;
