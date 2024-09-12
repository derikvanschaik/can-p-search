import { useState } from "preact/hooks";
import SearchResult from "./SearchResult.tsx";

export default function RecentResult({ goBackToSearch }) {
    const [view, setView] = useState(0);
    const [result, setResult] = useState(0);
    const recentSearches = [123123, 1233455, 123123132, 12323444, 12331223];
    function handleClick(e: number) {
        setResult(e);
        setView(1);
    }
    return (
        <>
            {view === 0 && (
                <div class="recent-results-container">
                    <button class="secondary outline" onClick={goBackToSearch}>
                        Back to Search
                    </button>
                    <h1 class="recently-searched-title">Recently Searched:</h1>
                    {recentSearches.map((e) => {
                        return (
                            <article>
                                <a onClick={() => handleClick(e)}>{e}</a>
                            </article>
                        );
                    })}
                </div>
            )}
            {view === 1 && (
                <SearchResult
                    result={result}
                    setView={setView}
                    backText={"Back to Recent Searches"}
                />
            )}
        </>
    );
}
