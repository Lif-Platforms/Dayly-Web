import './App.css';
import { Routes, Route} from "react-router-dom";
import Login from "./Pages/login";
import Main from "./Pages/main";
import React from 'react';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/Pages/main" element={<Main />} />
      <Route path="/Pages/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
