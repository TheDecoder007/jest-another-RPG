const Potion = require('../lib/Potion');
const Character = require('./Character');


//old code using function and prototype
// //Player constructor function
// function Player(name = '') {
//     this.name = name;
  
//     this.health = Math.floor(Math.random() * 10 + 95);
//     this.strength = Math.floor(Math.random() * 5 + 7);
//     this.agility = Math.floor(Math.random() * 5 + 7);

//     this.inventory = [new Potion('health'), new Potion()];

//   }
//       //inherit prototype methods from Character
//       Player.prototype = Object.create(Character.prototype);

//         // returns an object with various player properties
//         Player.prototype.getStats = function() {
//             return {
//               potions: this.inventory.length,
//               health: this.health,
//               strength: this.strength,
//               agility: this.agility
//             };
//           };
        
//           // returns the inventory array or false if empty
//           Player.prototype.getInventory = function() {
//             if (this.inventory.length) {
//               return this.inventory;
//             }
//             return false;
//           };

//         //adds potion to players inventory
//         Player.prototype.addPotion = function(potion) {
//           this.inventory.push(potion);
//         };

//         //function to use a potion from the inventory
//         Player.prototype.usePotion = function(index) {
//           const potion = this.getInventory().splice(index, 1)[0];
        
//           switch (potion.name) {
//             case 'agility':
//               this.agility += potion.value;
//               break;
//             case 'health':
//               this.health += potion.value;
//               break;
//             case 'strength':
//               this.strength += potion.value;
//               break;
//           }
//         };


//new code using class and constructor and extends
class Player extends Character {
  constructor(name = '') {
    //'super' calls parent constructor from extends
    super(name);

    this.inventory = [new Potion('health'), new Potion()];
  }

  getStats() {
    return {
      potions: this.inventory.length,
      health: this.health,
      strength: this.strength,
      agility: this.agility
    };
  }

  getInventory() {
    if (this.inventory.length) {
      return this.inventory;
    }
    return false;
  }

  addPotion(potion) {
    this.inventory.push(potion);
  }

  usePotion(index) {
    const potion = this.inventory.splice(index, 1)[0];

    switch (potion.name) {
      case 'agility':
        this.agility += potion.value;
        break;
      case 'health':
        this.health += potion.value;
        break;
      case 'strength':
        this.strength += potion.value;
        break;
    }
  }
}

  module.exports = Player;