import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getSummary } from "../../../requests/publications";
import Results from "./results/Results";
import Search from "./search/Search";

function SearchPage() {
    const currentPage = localStorage.getItem('currentPage');

    const [isResultsVisible, setResultsVisible] = useState(false)
    return (
        <>
            {!isResultsVisible && currentPage !== 'resultsPage'
                ? <Search setResultsVisible={setResultsVisible} />
                : <Results setResultsVisible={setResultsVisible} /> }
        </>
     );
}

export default SearchPage;