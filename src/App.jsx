import { Routes, Route } from "react-router-dom";
//pages
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import PokemonDetail from "./pages/PokemonDetail";
import Favorite from "./pages/Favorite";
//componentes
import Navbar from "./components/NavBar";
import Buscador from "./components/inputBuscar";
//css
import './App.css';

function App() {
    
    return (
      <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/pokemondetail" element={<PokemonDetail />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
      </>
  )
}
export default App
