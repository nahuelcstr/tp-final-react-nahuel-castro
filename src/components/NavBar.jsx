import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import poketradingLogo from "../assets/poketrading.png";
import "../styles/NavBar.css";

function Navbar() {
  const [open, setOpen] = useState(false); //estado del menu
  const mostrarBarra = () => {
    if (window.innerWidth <= 768) { // solo alterna el menú si es mobile
    setOpen(!open);
  }
  };
  //bloquear el scroll
  useEffect(() => {
  document.body.style.overflow = open ? "hidden" : "auto";
}, [open]);
    return (
      <>
      <nav className="navbar">
        <div className="container-navbar">
          <Link to='/'><img
              src={ poketradingLogo }
              className="logo-navbar"
              alt="Poketrading logo"
            /></Link>
          <ul className={`links-navbar ${open ? 'active' : ''}`}>
            <li>
              <Link to='/' onClick={mostrarBarra}> Inicio </Link>
            </li>
            <li>
              <Link to='/pokemon' onClick={mostrarBarra}> Pokemon </Link>
            </li>
            <li>
              <Link to='/pokemondetail' onClick={mostrarBarra}> Estadisticas </Link>
            </li>
            <li>
              <Link to='/favorite' onClick={mostrarBarra}> Favoritos </Link>
            </li>
          </ul>
          <button className={`menu-btn ${open ? "active" : ""}`} onClick={mostrarBarra}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      </>
  )
}
export default Navbar;