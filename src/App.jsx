import './App.css'
import { useState, useEffect } from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import Account from '../components/pages/Account';
import Auth from '../components/auth/Auth';
import MusicPlayer from '../components/player/MusicPlayer';
import Nav from '../components/Layout/Nav';
import Playlist from '../components/pages/Playlist';
import Search from '../components/ui/SearchBar';
import Home from '../components/pages/Home';


function App({ currentSong }) {
  const [token, setToken] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [currentPlaylist, setCurrentPlaylist] = useState([]);

  useEffect(() =>{
    const saveToken = localStorage.getItem('token');
    if(saveToken) setToken(saveToken);
  }, []);

  useEffect(() =>{
    if(token) localStorage.setItem('token', token);
  }, [token])

  return (
    <div className="app-wrapper">
    <Nav token={token}/>
    <MusicPlayer track={currentTrack} playlist={currentPlaylist} setTrack={setCurrentTrack} />
    <main>
      <Routes>
        <Route path='/' element={<Navigate to="/home"/>} />
        <Route path='/auth' element={<Auth setToken={setToken}/>} />
        <Route path='/account' element={token ? <Account token ={token} /> : <Navigate to="/auth"/>} />
        <Route path='/home' element={<Home onSelectTrack={setCurrentTrack} onSetPlaylist={setCurrentPlaylist} />} />
        <Route path='/playlist' element={<Playlist/>} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </main>
    
    </div>
  )
}

export default App
