const Potion = require('./Potion');
const Character = require('./Character');


//old code using function and prototype
//creates enemy object
// function Enemy(name, weapon) {
//   this.name = name;
//   this.weapon = weapon;
//   this.potion = new Potion();

//   this.health = Math.floor(Math.random() * 10 + 85);
//   this.strength = Math.floor(Math.random() * 5 + 5);
//   this.agility = Math.floor(Math.random() * 5 + 5);
// }



// //inherit prototype methods from Character
//   Enemy.prototype = Object.create(Character.prototype);

// //concantenates the name and weapon in the description
// Enemy.prototype.getDescription = function() {
//     return `A ${this.name} holding a ${this.weapon} has appeared!`;
//   };


//new code using Class and contructor and extends
class Enemy extends Character {
  constructor(name, weapon) {
    //'super' calls parent constructor from extends, passes name argument
    //to the constructor of the Character class
      super(name);
    this.weapon = weapon;
    this.potion = new Potion();

  }


  getDescription() {
      return `A ${this.name} holding a ${this.weapon} has appeared!`;
    };
  }

module.exports = Enemy;