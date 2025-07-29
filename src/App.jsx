import { useState, useEffect } from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import Account from '../components/Account';
import Auth from '../components/Auth';
import MusicPlayer from '../components/MusicPlayer';
import Nav from '../components/Nav';
import Playlist from '../components/Playlist';
import Search from '../components/Search';
import Home from '../components/Home';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() =>{
    const saveToken = localStorage.getItem('token');
    if(saveToken) setToken(saveToken);
  }, []);

  useEffect(() =>{
    if(token) localStorage.setItem('token', token);
  }, [token])

  return (
    <>
    <Nav token={token}/>
    <MusicPlayer/>
    <Routes>
      <Route path='/' element={<Navigate to="/home"/>} />
      <Route path='/auth' element={<Auth setToken={setToken}/>} />
      <Route path='/account' element={token ? <Account token ={token} /> : <Navigate to="/auth"/>} />
      <Route path='/home' element={<Home />} />
      <Route path='/playlist' element={<Playlist/>} />
      <Route path='/search' element={<Search />} />
    </Routes>
    </>
  )
}

export default App
