import { useState } from "react"
import "../../src/MoodCarousel.css";

const moods = [
{ name: "Chill", emoji: "🎧" },
  { name: "Workout", emoji: "💪" },
  { name: "Party", emoji: "🎉" },
  { name: "Dream", emoji: "🌌" },
  { name: "Rainy", emoji: "🌧" },
  { name: "Romance", emoji: "❤️" },
]

export default function MoodCarousel({ onMoodSelect }) {
    const [index, setIndex] = useState(0);

    const next = () =>{
        const newIndex = (index + 1) % moods.length;
        setIndex(newIndex);
        if(onMoodSelect) onMoodSelect(moods[newIndex].name);
    };

    const prev = () =>{
        const newIndex = (index - 1 + moods.length) % moods.length;
        setIndex(newIndex);
        if(onMoodSelect) onMoodSelect(moods[newIndex].name);
    };

    return(    
        <div className="carousel-wrapper">
            <button onClick={prev} className="scroll-btn">←</button>

            <div className="carousel">
                {[...Array(5)].map((_, i) => {
                    const mood = moods[(index + i) % moods.length];
                    return(
                        <div key={i} className={`tile ${i === 2 ? "active" : ""}`}>
                            <span className="emoji">{mood.emoji}</span>
                            <p>{mood.name}</p>
                        </div>
                    );
                })}
            </div>

            <button onClick={next} className="scroll-btn">→</button>

        </div>
    )
}