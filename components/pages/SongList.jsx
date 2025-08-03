import songs from "../../src/data/song";

function SongList({moodFilter, onSelectSong}) {
    const filteredSongs = songs.filter(song => song.mood === moodFilter);

    if (filteredSongs.length === 0)
        return<p>No songs found for {moodFilter}.</p>

    return(
        <div className="song-list">
            {filteredSongs.map((song) => (
                <div key={song.id} className="song-card" onClick={() => onSelectSong(song)}>
                    <img src={song.cover} alt={`${song.title} cover`} />
                    <div>
                        <h4>{song.title}</h4>
                        <p>{song.artist}</p>
                    </div>
                </div>
            ))}
            </div>
    );
}

export default SongList;