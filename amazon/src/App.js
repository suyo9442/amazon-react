import { Shop } from '@mui/icons-material';
import {Routes, Switch, Route} from "react-router-dom";
import './App.css';
// import 'https://fonts.googleapis.com/css2?family=Asap+Condensed:wght@400;500;700&display=swap';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';

function App() {
  return (
      <div className="App">

        <div className='row02'>
          <Header />
        </div>

        <Routes>
          <Route path='/' element={
            <div className='row02'>
              <Home />
            </div>
          }/>

          <Route path='/checkout' element={
            <div className='row02'>
              <Checkout />
            </div>
          }/>
        </Routes>



      </div>

  );
}

export default App;
