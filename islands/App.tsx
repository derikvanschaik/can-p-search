import { useEffect, useState } from "preact/hooks";
import EntryInput from "./EntryInput.tsx";
import SearchResult from "./SearchResult.tsx";
import RecentResult from "./RecentResult.tsx";

export default function AppView() {
    const [view, setView] = useState(0);
    const [entry, setEntry] = useState("");

    return (
        <>
            {view === 0 && (
                <EntryInput
                    setAppView={setView}
                    entry={entry}
                    setEntry={setEntry}
                />
            )}
            {view === 1 && (
                <div>
                    <SearchResult
                        result={entry}
                        setView={setView}
                        backText={"Back to Search"}
                    />
                    <a onClick={() => setView(2)}>Recently Searched</a>
                </div>
            )}
            {view === 2 && <RecentResult goBackToSearch={() => setView(0)} />}
        </>
    );
}
