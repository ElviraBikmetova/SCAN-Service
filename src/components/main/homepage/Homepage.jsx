import Hero from "./hero/Hero";
import Benefits from "./benefits/Benefits";
import Tariffs from "./tariffs/Tariffs";
import css from './Homepage.module.scss'
import { useDispatch } from "react-redux";
import { addDocuments, publicationsDocuments, toggleisEmptyResponse } from "../../../store/publicationsSlice";

function Homepage() {
    localStorage.removeItem('currentPage')
    localStorage.removeItem('request')
    const dispatch = useDispatch()
    dispatch(toggleisEmptyResponse(false))
    // dispatch(publicationsDocuments([]))
    // dispatch(addDocuments([]))

    return (
        <div>
            <Hero />
            <Benefits />
            <Tariffs />
        </div>
     );
}

export default Homepage;