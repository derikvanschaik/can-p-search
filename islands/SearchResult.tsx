import { useState } from "preact/hooks";
export default function SearchResult({ result, setView, backText }) {
    return (
        <div class="search-result-container">
            <button
                class="back-btn outline secondary"
                onClick={() => setView(0)}
            >
                {backText}
            </button>
            <article>
                <div className="search-res-group">
                    <h1>Search :</h1>
                    <h1 class="search-res">{result}</h1>
                </div>

                <div className="search-res-group">
                    <h1>Item:</h1>
                    <h1 class="search-res">123124</h1>
                </div>

                <div className="search-res-group">
                    <h1>Catalog:</h1>
                    <h1 class="search-res">12314242145</h1>
                </div>

                <div className="search-res-group">
                    <h1>Catalog:</h1>
                    <h1 class="search-res">12314242145</h1>
                </div>
            </article>
        </div>
    );
}
