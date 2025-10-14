import { Link } from "react-router-dom";
import "../styles/home.css";
import ButtonTypes from "../components/ButtonTypes";


function Home(){
    return(
        <>
        <section className="home">
            <div className="home-container">
                <div className="home-text">
                    <h1>Pokewiki</h1>
                    <p>
                        Bienvenido a <strong>Pokéwiki</strong>, tu enciclopedia Pokémon
                        interactiva. Explorá información de cada Pokémon, sus habilidades,
                        tipos y estadísticas. ¡Convertite en el mejor entrenador!
                    </p>
                </div>
                <div className="home-links">
                    <Link to='/pokemon' className="btn-todos">Ver todos</Link>
                    <Link to='/favorite' className="btn-fav">Mis favoritos</Link>
                </div>
                <div className="filter">
                    
                </div>
            </div>
        </section>
        </>
    );
}
export default Home;