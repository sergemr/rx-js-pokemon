import React , {useEffect, useState}from 'react';
import logo from './logo.svg';
import './App.css';
import Button  from "./components/Button/Button";
import {PokemonProvider, pokemonWithPower$ } from "./rxjs/store";
import Main  from "./components/Main/Main";

function App() {
  useEffect(() => {
    pokemonWithPower$.subscribe(console.log)
  }, [])

  function primera():void {
   console.log('consola')
  }
  function segunda():void {
    alert('alerta')
   }
  return (
    <div className="App">
        <PokemonProvider>
          <Main></Main>
        </PokemonProvider>
    </div>
  );
}

export default App;
