import { Shop } from '@mui/icons-material';
import './App.css';
// import 'https://fonts.googleapis.com/css2?family=Asap+Condensed:wght@400;500;700&display=swap';
import Header from './Header';
import Home from './Home';
import Product from './Product';

function App() {
  return (
    <div className="App">
      <div className='row02'>
        <Header />
      </div>

      <div className='row02'>
        <Home />
      </div>
      
    </div>
  );
}

export default App;
