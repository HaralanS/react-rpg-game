import { useState, useEffect } from 'react'
import BattleScreen from '../components/battleScreen/BattleScreen';
import goblinImage from "../assets/characters/goblin-01.png"
import getMonsters from '../lists/monesters';
import getItems from '../lists/items';

let monster = getMonsters();
// let monster = {
//   goblin: {
//     name: "Goblin",
// life: 50,
// maxLife: 50,
// strength: 3,
// experience: 50,
// gold: 5,

// meleeAtack: function(){
//   let monsterLuck = Math.random() * 10;
//     if (monsterLuck < 7){
//       console.log("Golpe certeiro!");
//         return 4 + Math.random() * 4;
//     } else {
//         console.log("GOLPE CRITICO!");
//         return parseInt(4 * 1.5 + 4 * Math.random() * 2);
//   }
// },

// takeDamage: function(damage){
//   this.life = damage > this.life ? 0 : this.life - damage;
  
// },
//   }
// }
let itemList = getItems();

let chosenMonster;

let luck = Math.random() * 10;
  if(luck < 5) {
     chosenMonster = monster.goblin
  } else {
    chosenMonster = monster.goblinWarrior
  }

function BattlePage() {
  
  localStorage.getItem('GameData');

  // let variavel = JSON.parse(localStorage.getItem('GameData'));
  // console.log(variavel.hero);

  const [monsterHBar, setMonsterHBar] = useState(100);
  const [heroHBar, setHerorHBar] = useState(100);
  const [message, setMessage] = useState("Fight");
  const [data, setData] = useState(JSON.parse(localStorage.getItem('GameData')));
  const [disableAtkBtn, setDisableAtkBtn] = useState(false);
  // const [data, setData] = useState({
  //   hero: {
  //     name: "Hara",
  //   life: 100,
  //   strength: 5,
  //   maxLife: 100,
  //   level: 1,
  //   experience: 0,
  //   mana: 50,
  //   maxMana: 50,
  //   gold: 10,
  //   magicPower: 3,
  //   lifePotion: 1,
  //   manaPotion: 1,

  //   meleeAtack: function () {
  //     let heroLuck = Math.random() * 10;
  //       if (heroLuck < 7){
  //         console.log("Golpe certeiro!");
  //           return this.strength + Math.random() * this.strength;
  //       } else {
  //           console.log("GOLPE CRITICO!");
  //           return parseInt(this.strength * 1.5 + this.strength * Math.random() * 2);
  //   }
  //   },

  //   takeDamage: function (damage) {
  //     this.life = damage > this.life ? 0 : this.life - damage;
      
  //   },
  //   },
  //   goblin: {
  //     name: "Goblin",
  // life: 50,
  // maxLife: 50,

  // meleeAtack: function(){
  //   let monsterLuck = Math.random() * 10;
  //     if (monsterLuck < 7){
  //       console.log("Golpe certeiro!");
  //         return 4 + Math.random() * 4;
  //     } else {
  //         console.log("GOLPE CRITICO!");
  //         return parseInt(4 * 1.5 + 4 * Math.random() * 2);
  //   }
  // },

  // takeDamage: function(damage){
  //   this.life = damage > this.life ? 0 : this.life - damage;
    
  // },
  //   },
  // });

  function chooseMonster() {
    if(luck < 5) {
      chosenMonster = monster.goblin
   } else {
     chosenMonster = monster.goblinWarrior
   }
  }
  
  useEffect(() => {
    localStorage.setItem('GameData', JSON.stringify(data));
    
  }, [data])
  useEffect(() => {
    monster = getMonsters();
    luck = Math.random() * 10;
    chooseMonster();
    setHerorHBar(data.hero.life);
    
  }, [])

  let isBattleOn = true;

  function heroAttack(heroData) {
    let heroLuck = Math.random() * 10;
    let weaponIndice = heroData.weaponEquiped;
    console.log("indice: " + weaponIndice)
    return itemList[weaponIndice].normalAtack(heroLuck, heroData);
  }
  function heroSpecialAttack(heroData) {
    let heroLuck = Math.random() * 10;
    let weaponIndice = heroData.weaponEquiped;
    return itemList[weaponIndice].specialAttack(heroLuck, heroData)
  }

  function monsterAttack(monsterData){
    let monsterLuck = Math.random() * 10;
      if (monsterLuck < 7){
        console.log("Golpe certeiro!");
          return monsterData.strength + Math.random() * monsterData.strength;
      } else {
          console.log("GOLPE CRITICO!");
          return parseInt(monsterData.strength * 1.5 + monsterData.strength * Math.random() * 2);
    }
  }

  function gainXp(hero, monster) {
    hero.experience += monster.experience;
  }

  function levelUp(hero, xp) {
    let heroUp = " ";
    if (hero.experience >= 540) {
      if(hero.experience - xp < 540) {
        hero.life = Math.min(hero.life + 15, hero.maxLife);
        hero.mana = Math.min(hero.mana + 5, hero.maxMana);
        heroUp = "Voce subiu para o level 5";
        console.log("upo para level 5")
      }
      hero.level = 5;
      hero.strength = 13;
      hero.magicPower = 6;
      hero.maxLife = 160;
      hero.maxMana = 70;
    } else if (hero.experience >= 365) {
      if(hero.experience - xp < 365) {
        hero.life = Math.min(hero.life + 15, hero.maxLife);
        hero.mana = Math.min(hero.mana + 5, hero.maxMana);
        heroUp = "Voce subiu para o level 4";
        console.log("upo para level 4")
      }
      hero.level = 4;
      hero.strength = 11;
      hero.magicPower = 5;
      hero.maxLife = 145;
      hero.maxMana = 65;
    } else if (hero.experience >= 220) {
      if(hero.experience - xp < 220) {
        hero.life = Math.min(hero.life + 15, hero.maxLife);
        hero.mana = Math.min(hero.mana + 5, hero.maxMana);
        heroUp = "Voce subiu para o level 3";
        console.log("upo para level 3")
      }
      hero.level = 3;
      hero.strength = 9;
      hero.magicPower = 4;
      hero.maxLife = 130;
      hero.maxMana = 60;
    } else if (hero.experience >= 100) {
      if(hero.experience - xp < 100) {
        hero.life = Math.min(hero.life + 15, hero.maxLife);
        hero.mana = Math.min(hero.mana + 5, hero.maxMana);
        heroUp = "Voce subiu para o level 2";
        console.log("upo para level 2")
      }
      hero.level = 2;
      hero.strength = 7;
      hero.magicPower = 3;
      hero.maxLife = 115;
      hero.maxMana = 55;
    }

    return heroUp;
    
  } 

  function lootGold(hero, monsterGold) {
    hero.gold +=Math.round(Math.random() * monsterGold);
  }

  function meleeAtackHero(){
    let dataProvisorio = {...data};
    let attack = 0;
    if (dataProvisorio.hero.life == 0) {
      setMessage("Voce morreu")
      setDisableAtkBtn(true);
    }
    if(dataProvisorio.hero.life > 0 && chosenMonster.life > 0) {
      attack = parseInt(heroAttack(dataProvisorio.hero));
      chosenMonster.life = attack > chosenMonster.life ? 0 : chosenMonster.life - attack;
      setDisableAtkBtn(true);
      setMonsterHBar(() => 100/chosenMonster.maxLife * chosenMonster.life);
      setMessage(`Voce acertou um dano de ${attack}`);
      setData(dataProvisorio);
      
      if(chosenMonster.life > 0) {
        setTimeout(() => {
          attack = parseInt(monsterAttack(chosenMonster));
  

          dataProvisorio.hero.life = attack > dataProvisorio.hero.life ? 0 : dataProvisorio.hero.life - attack;;
          setHerorHBar(() => 100/dataProvisorio.hero.maxLife * dataProvisorio.hero.life);
          setMessage(`Voce levou um dano de ${attack}`);
          setData(dataProvisorio);
          setDisableAtkBtn(false);
          // console.log("Delayed for 1 second.");s
        }, "1000");
        // console.log(hero.life + " - " + goblin.life);
      } else {
        lootGold(dataProvisorio.hero, chosenMonster.gold);
        gainXp(dataProvisorio.hero, chosenMonster);
        const upou = levelUp(dataProvisorio.hero, chosenMonster.experience)
        setData(dataProvisorio);
        setMessage(`Voce venceu ${upou}`);
        
      }
      
    }
    
  }

  function specialAtackHero(){
    let dataProvisorio = {...data};
    let weaponIndice = dataProvisorio.hero.weaponEquiped;
    if (dataProvisorio.hero.mana >= itemList[weaponIndice].specialAttackMana) {
      let attack = 0;
      dataProvisorio.hero.mana -= itemList[weaponIndice].specialAttackMana;
    if (dataProvisorio.hero.life == 0) {
      setMessage("Voce morreu")
      setDisableAtkBtn(true);
    }
    if(dataProvisorio.hero.life > 0 && chosenMonster.life > 0) {
      attack = parseInt(heroSpecialAttack(dataProvisorio.hero));
      chosenMonster.life = attack > chosenMonster.life ? 0 : chosenMonster.life - attack;
      setDisableAtkBtn(true);
      setMonsterHBar(() => 100/chosenMonster.maxLife * chosenMonster.life);
      setMessage(`Voce acertou um dano de ${attack}`);
      setData(dataProvisorio);
      
      if(chosenMonster.life > 0) {
        setTimeout(() => {
          attack = parseInt(monsterAttack(chosenMonster));
  

          dataProvisorio.hero.life = attack > dataProvisorio.hero.life ? 0 : dataProvisorio.hero.life - attack;;
          setHerorHBar(() => 100/dataProvisorio.hero.maxLife * dataProvisorio.hero.life);
          setMessage(`Voce levou um dano de ${attack}`);
          setData(dataProvisorio);
          setDisableAtkBtn(false);
          // console.log("Delayed for 1 second.");s
        }, "1000");
        // console.log(hero.life + " - " + goblin.life);
      } else {
        lootGold(dataProvisorio.hero, chosenMonster.gold);
        gainXp(dataProvisorio.hero, chosenMonster);
        const upou = levelUp(dataProvisorio.hero, chosenMonster.experience)
        setData(dataProvisorio);
        setMessage(`Voce venceu ${upou}`);
        
      }
      
    }
    } else {
      setMessage("Mana insuficiente")
    }
    
    
  }
  
  return (
    <div className='game-bg'>
      <h1 className="game-title">RPG GAME</h1>
      {/* <img src={goblinImage} alt="" /> */}
      
      <div className='screen'>
      <BattleScreen message={message} heroHBar={heroHBar} monsterHBar={monsterHBar} specialAtackHero={() => specialAtackHero()} meleeAtackHero={() => meleeAtackHero()} monsterLife={chosenMonster.life} monsterImage={chosenMonster.image} heroProp={data.hero} monsterName={chosenMonster.name} dibledBtn={disableAtkBtn}/>
       
      </div>
    </div>
  )
}

export default BattlePage