function NavBar() {
    return (
    <>
      <div>
        <h1>PokeTrading</h1>
        <a href="">
          <img src={poketradingLogo} className="logo" alt="PokeTrading logo" />
        </a>
        <ul>
          <li>Home</li>
          <li>Pokemon</li>
          <li>Estadisticas</li>
          <li>Favoritos</li>
        </ul>
      </div>
    </>
  )
}
export default NavBar;