
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import HomeSecond from './component/HomeSecond';
import HomeThird from './component/HomeThird';
import Last from './component/Last';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <HomeSecond/>
     <HomeThird/>
     <Last/>
    </div>
  );
}

export default App;
