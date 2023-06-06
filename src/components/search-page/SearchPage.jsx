import { useState } from "react";
import Results from "../results/Results";
import Search from "../search/Search";

function SearchPage() {
    const [isResultsVisible, setResultsVisible] = useState(true)
    return (
        <>
            {!isResultsVisible
                ? <Search isResultsVisible={isResultsVisible} setResultsVisible={setResultsVisible} />
                : <Results /> }
        </>
     );
}

export default SearchPage;