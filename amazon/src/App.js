import './App.css';
// import 'https://fonts.googleapis.com/css2?family=Asap+Condensed:wght@400;500;700&display=swap';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <div className='row'>
        <Header />
      </div>

      <div className='row'>
        <Home />
      </div>
    </div>
  );
}

export default App;
