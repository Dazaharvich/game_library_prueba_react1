import React, { useState } from 'react';
import Header from "./Components/Header";
import './Stylesheets/header.css';
import MiApi from "./Components/MiApi";

function App() {
  const [busqueda, setBusqueda] = useState(""); // useState usado para almacenar la busqueda

  return (
    <div className="App">
      <Header setBusqueda={setBusqueda} />
      <main className='Main'>
        <MiApi busqueda={busqueda} />
      </main>
    </div>
  );
}

export default App;
