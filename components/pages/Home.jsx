import MoodCarousel from "../layout/MoodCarousel";
import {useState} from 'react';
import SongList from "./SongList";
import { NavLink } from "react-router-dom";


function Home({ onSelectTrack }){
    const [selectedMood, setSelectedMood] = useState("Chill"); 

    return(
        <div className="home-page">
            <h1 className="glow"> Welcome to Sonara</h1>
            <p> Let the music take you beyond the ordinary. </p>

            <MoodCarousel onMoodSelect={setSelectedMood}/>

            <h2>{selectedMood} Songs</h2>
            <SongList moodFilter={selectedMood} onSelectSong={(song, playlist) => {
            onSelectTrack(song)
            onSetPlaylist(playlist)}}
             />
        </div>
    )
}

export default Home;