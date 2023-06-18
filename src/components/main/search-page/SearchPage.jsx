import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getSummary } from "../../../requests/publications";
import Results from "./results/Results";
import Search from "./search/Search";

function SearchPage() {
    const currentPage = localStorage.getItem('currentPage');
    const dispatch = useDispatch()

    useEffect(() => {
        // if (currentPage) {
            // setResultsVisible(true)
            dispatch(getSummary())
        // }
    }, [])

    // const [isResultsVisible, setResultsVisible] = useState(false)
    return (
        <>
            {currentPage !== 'SecondPage'
                ? <Search />
                : <Results /> }
        </>
     );
}

export default SearchPage;