import { useEffect, useRef, useState } from "react";
import "../../src/MusicPlayer.css";

export default function MusicPlayer({ track, playlist, setTrack }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoop, setIsLoop] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);

  useEffect(() => {
    if (track) {
      audioRef.current.load();
      setIsPlaying(true);
    }
  }, [track]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = isLoop;
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPlaying, isLoop]);

  const handlePrev = () => {
    if (!track || !playlist) return;
    const index = playlist.findIndex((t) => t.id === track.id);
    const newIndex = (index - 1 + playlist.length) % playlist.length;
    setTrack(playlist[newIndex]);
  };

  const handleNext = () => {
    if (!track || !playlist) return;

    if (isShuffle) {
      let next;
      do {
        next = playlist[Math.floor(Math.random() * playlist.length)];
      } while (next.id === track.id && playlist.length > 1);
      setTrack(next);
    } else {
      const index = playlist.findIndex((t) => t.id === track.id);
      const newIndex = (index + 1) % playlist.length;
      setTrack(playlist[newIndex]);
    }
  };

  if (!track) return null;

  return (
    <div className="music-player">
      <img src={track.cover} alt="Cover" />
      <div className="info">
        <h4>{track.title}</h4>
        <p>{track.artist}</p>
      </div>

      <audio ref={audioRef}>
        <source src={track.url} type="audio/mpeg" />
      </audio>

      <div className="controls">
        <button onClick={handlePrev}>⏮</button>
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? "⏸" : "▶️"}
        </button>
        <button onClick={handleNext}>⏭</button>
        <button
          className={isLoop ? "active" : ""}
          onClick={() => setIsLoop(!isLoop)}
        >
          🔁
        </button>
        <button
          className={isShuffle ? "active" : ""}
          onClick={() => setIsShuffle(!isShuffle)}
        >
          🔀
        </button>
      </div>
    </div>
  );
}
