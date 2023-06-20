import Hero from "./hero/Hero";
import Benefits from "./benefits/Benefits";
import Tariffs from "./tariffs/Tariffs";
import css from './Homepage.module.scss'

function Homepage() {
    localStorage.removeItem('currentPage')
    return (
        <div>
            <Hero />
            <Benefits />
            <Tariffs />
        </div>
     );
}

export default Homepage;