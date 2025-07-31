import { useState } from "react";

function Search({ onSearch }) {
    const [query, setQuery] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if(onSearch) onSearch(search);
    };

    return(
        <form onSubmit={handleSubmit} className="search-bar">
            <input 
            type="text"
            placeholder="Search music, playlist, moods, artist..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">🔍</button>
        </form>
    )
}

export default Search;