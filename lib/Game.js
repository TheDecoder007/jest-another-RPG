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

module.exports = Game;