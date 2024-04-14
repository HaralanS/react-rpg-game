import woodenSwordImg from "../assets/items/wooden-sword-01.png";
import ironSwordImg from "../assets/items/iron-sword-01.png";
import battleAxeImg from "../assets/items/battle-axe-01.png";


function getItems() {
  return [
    {
      id: 0,
      name: "Espada de Madeira",
      damage: 4,
      image: woodenSwordImg,
      sellingPrice: 2,
      precision: 1,
      specialAttackName: "Estocada",
      specialAttackDescription: "Este golpe direto causa 50% a mais de dano que um atague convencional mas gasta 10 de mana.",
      specialAttackMana: 10,
      description: "Nao e a melhor espada, mas eh melhor que sair no soco D:",
      itemType: "weapon",
      quanity: 0,

      normalAtack: function(luck, hero) {
        let hit = hero.strength + ((Math.random() * this.damage + this.damage)/2);
        if(luck <= this.precision) {
          console.log("GOLPE CRITICO!");
          return hit * 2;
        }
        if (luck > 10 - ((10 - this.precision) / 5)){
          console.log("Voce errou o golpe");
          return 0;
        } else {
          console.log("Golpe certeiro!");
            return hit;
      }
      },
      specialAttack: function(luck, hero) {
        let hit = 1.5 * (hero.strength + ((Math.random() * this.damage + this.damage)/2));
        if(luck <= this.precision) {
          console.log("GOLPE CRITICO!");
          return hit * 2;
        }
        if (luck > 10 - ((10 - this.precision) / 5)){
          console.log("Voce errou o golpe");
          return 0;
        } else {
          console.log("Golpe certeiro!");
            return hit;
      }
      }
    },
    {
      id: 1,
      name: "Espada de Ferro",
      damage: 6,
      image: ironSwordImg,
      sellingPrice: 10,
      precision: 1.5,
      specialAttackName: "Estocada",
      specialAttackMana: 10,
      description: "Espada basica de ferro. Da pro gasto :/",
      itemType: "weapon",
      quanity: 0,

      normalAtack: function(luck, hero) {
        let hit = hero.strength + ((Math.random() * this.damage + this.damage)/2);
        if(luck <= this.precision) {
          console.log("GOLPE CRITICO!");
          return hit * 2;
        }
        if (luck > 10 - ((10 - this.precision) / 5)){
          console.log("Voce errou o golpe");
          return 0;
        } else {
          console.log("Golpe certeiro!");
            return hit;
      }
      },
      specialAttack: function(hero) {
        let hit = 1.5 * (hero.strength + ((Math.random() * this.damage + this.damage)/2));
        if(luck <= this.precision) {
          console.log("GOLPE CRITICO!");
          return hit * 2;
        }
        if (luck > 10 - ((10 - this.precision) / 5)){
          console.log("Voce errou o golpe");
          return 0;
        } else {
          console.log("Golpe certeiro!");
            return hit;
      }
      }
    }
  ]
}

export default getItems;