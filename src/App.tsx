
import './App.css';
import Header from './components/Header';
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom"
import Singleproduct from './pages/SingleProduct';

function App() {
  return (
    <div className="App">

     <Header />
     <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/:id" element={ <Singleproduct/> } />
      </Routes>
    </div>
  );
}

export default App;
