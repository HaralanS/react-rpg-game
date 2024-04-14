import goblinImage from "../assets/characters/goblin-01.png"
import goblinWarriorImage from "../assets/characters/goblin-warrior-01-128.png"


function getMonsters(){
  return {
    goblin: {
      name: "Goblin",
      life: 50,
      maxLife: 50,
      strength: 3,
      experience: 10,
      gold: 10,
      image: goblinImage,
      loot: "",
      rareLoot: [0],
      
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
    },
    goblinWarrior: {
      name: "Goblin Warrior",
      life: 75,
      maxLife: 75,
      strength: 4,
      experience: 15,
      gold: 15,
      image: goblinWarriorImage,
      
      meleeAtack: function(){
        let monsterLuck = Math.random() * 10;
          if (monsterLuck < 7){
            console.log("Golpe certeiro!");
              return 6 + Math.random() * 6;
          } else {
              console.log("GOLPE CRITICO!");
              return parseInt(6 * 1.5 + 4 * Math.random() * 3);
        }
      },
      
      takeDamage: function(damage){
        this.life = damage > this.life ? 0 : this.life - damage;
        
      },
    }
  }
}

export default getMonsters;
