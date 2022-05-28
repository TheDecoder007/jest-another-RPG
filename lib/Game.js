const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');

//game object
function Game() {

//object properties
this.roundNumber = 0;
this.isPlayerTurn = false;
this.enemies = [];
this.currentEnemy;
this.player;

}

//initialize game method prototype
//this.initializeGame() calls this.startNewBattle(), which calls this.battle()
Game.prototype.initializeGame = function() {

//populates enemies array with .push()
this.enemies.push(new Enemy('goblin', 'sword'));
this.enemies.push(new Enemy('orc', 'baseball bat'));
this.enemies.push(new Enemy('skeleton', 'axe'));

//keeps track of which enemy object is currently fighting
this.currentEnemy = this.enemies[0];

inquirer
    .prompt({
    type: 'text',
    name: 'name',
    message: 'What is your name?'
})

//destructure name from the prompt object
.then(({ name }) => {
    this.player = new Player(name);

//starts a new round
this.startNewBattle()
});

};

//function method for startNewBattle
Game.prototype.startNewBattle = function() {
//player with highest agility goes first
    if (this.player.agility > this.currentEnemy.agility) {
      this.isPlayerTurn = true;
    } else {
      this.isPlayerTurn = false;
    }

//console method to print a formatted table of data, instead of a string from getStats()
    console.log('Your stats are as follows:');
    console.table(this.player.getStats());
//gets enemy objects description
    console.log(this.currentEnemy.getDescription());

    this.battle()
  };

//battle method. main part of game that runs indefinite number of times
Game.prototype.battle = function() {
    if (this.isPlayerTurn) {
// player prompts
        inquirer.prompt ({
            type: 'list',
            message: 'What would you like to do?',
            name: 'action',
            choices: ['Attack', 'Use potion']
        })
        .then(({ action }) => {
            if (action === 'Use potion') {
                if (!this.player.getInventory()) {
                    console.log('You dont have any potions.');
                    return;
                }
                inquirer
                    .prompt({
                        type: 'list',
                        message: 'Which potion would you like to use?',
                        name: 'action',
                        choices: [ /* potions will go here */]
                    });
    
            } else {
                const damage = this.player.getAttackValue();
                this.currentEnemy.reduceHealth(damage);

                console.log(`You attacked the ${this.currentEnemy.name}`);
                console.log(this.currentEnemy.getHealth());
            }
        });
    } 
            else {
                const damage = this.currentEnemy.getAttackValue();
                this.player.reduceHealth(damage);
  
                console.log(`You were attacked by the ${this.currentEnemy.name}`);
                console.log(this.player.getHealth());
    }
  };


module.exports = Game;