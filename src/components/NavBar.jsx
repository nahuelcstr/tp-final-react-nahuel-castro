import { Link } from "react-router-dom";
import { poketradingLogo } from "../assets/poketrading.png";

function Navbar() {
    return (
      <nav className="navbar">
        <Link><img
            src={ poketradingLogo }
            className="navbar-logo"
            alt="Poketrading logo"
          /></Link>
        <ul>
          <li>
            <Link to='/'> Inicio </Link>
          </li>
          <li>
            <Link to='/pokemon'> Pokemon </Link>
          </li>
          <li>
            <Link to='/pokemondetail'> Estadisticas </Link>
          </li>
          <li>
            <Link to='/favorite'> Favoritos </Link>
          </li>
        </ul>
      </nav>
  )
}
export default Navbar;