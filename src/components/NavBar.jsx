import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import poketradingLogo from "../assets/poketrading.png";
import "../styles/NavBar.css";

function Navbar() {
  // const [open, setOpen] = useState(flase);
    return (
      <nav className="navbar">
        <div className="container-navbar">
          <Link><img
              src={ poketradingLogo }
              className="logo-navbar"
              alt="Poketrading logo"
            /></Link>
          <ul className="links-navbar">
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
            <button id="menu-toggle" onClick={() => setOpen(!open)}>☰</button>
          </ul>
        </div>
      </nav>
  )
}
export default Navbar;