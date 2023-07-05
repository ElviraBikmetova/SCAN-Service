import Hero from "./hero/Hero";
import Benefits from "./benefits/Benefits";
import Tariffs from "./tariffs/Tariffs";
import css from './Homepage.module.scss'
import { useDispatch } from "react-redux";
import { addDocuments, publicationsDocuments, publicationsIds, toggleisEmptyResponse } from "../../../store/publicationsSlice";
import { useEffect } from "react";

function Homepage() {
    localStorage.removeItem('currentPage')
    localStorage.removeItem('request')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(toggleisEmptyResponse(false))
        dispatch(publicationsIds([]))
    }, [dispatch])

    return (
        <div>
            <Hero />
            <Benefits />
            <Tariffs />
        </div>
     );
}

export default Homepage;