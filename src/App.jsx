import { useState, useEffect } from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import warriorImage from "./assets/characters/warrior-01-128.png"
import goblinImage from "./assets/characters/goblin-01.png"
import BattleScreen from './components/battleScreen/BattleScreen'
import StartPage from './pages/StartPage'
import BattlePage from './pages/BattlePage'
import MainScreen from './pages/MainScreen';

let goblin = {
  name: "Goblin",
  life: 50,
  maxLife: 50,

  meleeAtack: function(){
    let monsterLuck = Math.random() * 10;
      if (monsterLuck < 7){
        console.log("Golpe certeiro!");
          return 4 + Math.random() * 4;
      } else {
          console.log("GOLPE CRITICO!");
          return parseInt(4 * 1.5 + 4 * Math.random() * 2);
    }
  },

  takeDamage: function(damage){
    this.life = damage > this.life ? 0 : this.life - damage;
    
  },
}
let hero = {
  name: "Hara",
  life: 100,
  strength: 5,
  maxLife: 100,

  meleeAtack: function () {
    let heroLuck = Math.random() * 10;
      if (heroLuck < 7){
        console.log("Golpe certeiro!");
          return this.strength + Math.random() * this.strength;
      } else {
          console.log("GOLPE CRITICO!");
          return parseInt(this.strength * 1.5 + this.strength * Math.random() * 2);
  }
  },

  takeDamage: function (damage) {
    this.life = damage > this.life ? 0 : this.life - damage;
    
  },
}



function App() {
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/battlepage" element={<BattlePage />} />
        <Route path="/mainscreen" element={<MainScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
