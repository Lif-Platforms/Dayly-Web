import './App.css';
import { Routes, Route} from "react-router-dom";
import Login from "./Pages/login";
import Main from "./Pages/main";
import React from 'react';
import NewPost from './Pages/new post';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<NewPost />} />
      </Routes>
    </div>
  );
}

export default App;
