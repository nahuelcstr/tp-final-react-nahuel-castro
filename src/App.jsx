import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import PokemonDetail from "./pages/PokemonDetail";
import Favorite from "./pages/Favorite";
import NavBar from "./components/NavBar";
import poketradingLogo from './assets/poketrading.png';
import './App.css';

function App() {
    return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/pokemondetail" element={<PokemonDetail />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </Router>
  )
}


export default App
