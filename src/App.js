import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Start from './components/Start'
import Buy from './components/Buy'
import Sell from './components/Sell'
import Help from './components/Help'

function App() {
  return (
    <div className="container">
      <Navbar />
      <Start />
      <Buy />
      <Sell />
      <Help />
      <Footer />
    </div>
  );
}

export default App;
