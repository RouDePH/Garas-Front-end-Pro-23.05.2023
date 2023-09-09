import './App.css';

import {  Route, Routes } from 'react-router-dom';

import Header from './components/Header';

import UserList from './components/UserList';
import AlbumList from './components/AlbumList';
import PhotoList from './components/PhotoList';


const App = () => {
  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" exact element={<UserList/>} />
        <Route path="albums/:userId" element={<AlbumList/>} />
        <Route path="photos/:albumId" element={<PhotoList/>} />
      </Routes>
    </>
  );
};

export default App;
