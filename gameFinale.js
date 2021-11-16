// constructor objeto monstruo.
function Monster(monsterName) {
  this.name = monsterName;
  this.health = 100;
  this.monsterMaxAttack = 20;
  this.monsterMinAttack = 10;
  this.damage = () => {
    return parseInt(
      Math.random() * (this.monsterMaxAttack - this.monsterMinAttack + 1) +
        this.monsterMinAttack
    );
  };
}

// array con nombres por defecto

// función para elegir el número de monstruos disponibles.

const howMannyMonsters = function howMannyMonsters() {
  const numberOfMonsters = Math.floor(Math.random() * (2 - 0 + 1) + 0);
  return numberOfMonsters;
};

// funcion para asignarles nombre
const names = function givingNames(numberOfMonsters) {
  const defaultNames = ['Gwyn', 'Furtivo pigmeo', 'Izalith'];
  const monsters = [];
  for (let i = 0; i <= numberOfMonsters; i++) {
    const newMonster = new Monster(defaultNames[i]);
    monsters.push(newMonster);
  }
  return monsters;
};

const monster = monsters.pop();
console.log(monster);
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *

const player = {
  name: 'pname',
  health: 100,
  potion: 2,
  MaximunAttack: 20,
  MinimunAttack: 10,
  damage: () =>
    parseInt(
      Math.random() * (player.MaximunAttack - player.MinimunAttack + 1) +
        player.MinimunAttack
    ),
};

// prueba DE DAÑO A OBJETO PLAYER
// console.log(player.health);
// player.health = player.health - monstruos[0].damage();
// console.log(player.health);
///////////////////////////////////

// prueba de como baja la salud

while (player.health > 0 && monster.health > 0) {
  monster.health = monster.health - player.damage();
  if (monster.health > 0) {
    player.health = player.health - monster.damage();
  }

  console.log(
    `Salud de ${monster.name} ES: ${
      monster.health
    } \n JUgador ha dado un golpe de ${player.damage()} \nla salud despues del golpe es: ${
      monster.health
    }`
  );
  // console.log('Daño hecho por monster', mon02.damage());
  // console.log('Este es el dañor recibido por player', player.health);
  // console.log('Daño hecho por player', player.damage());
}

// mensajes
// player victory
const playerVictory = () => {
  const victory = '\u270C';
  console.log(
    `\n Victory !${player.name} defeated all the monsters ${victory}`
  );
  // separación de 2 segundos
  showGlobalStadistics();
};

// player defeated
const playerDefeated = () => {
  const dead = '\u2620';
  console.log(` ${player.name} died!${dead}`);
  showGlobalStadistics();
};

// estadisticas totales
let showGlobalStadistics = () => {
  console.log(
    `\n
    *********************\n
    ** GAME STADISTICS **\n
    *********************\n

    ${player.name} weak attacks: ${globalStadistics.playerAttacks}.\n
    Monsters attacks: ${globalStadistics.monstersAttacks}.\n
    ${player.name}'s heals: ${globalStadistics.potionsConsumed}.\n
    Total damage mady by ${player.name}:${globalStadistics.playerTotalDamage}.\n
    Total damage mady by monsters:${globalStadistics.monstersTotalDamage}.\n`
  );
  wait2Seconds();
  showGameOverMessage();
};
function wait2Seconds() {
  setTimeout(2000);
}

const showGameOverMessage = () => {
  //Esperar 2 segundos
  console.log('GAME OVER');
};

// objeto estadisticas globales
const globalStadistics = {
  playerAttacks: [],
  monstersAttacks: [],
  potionsConsumed: [],
  playerTotalDamage: [],
  monstersTotalDamage: [],
};

// objeto estadisticas por round
const roundStadistics = {
  playerName: 'player',
  playerHealth: 0,
  remainingPotions: 0,
  monsterName: 'Monster',
  monsterHealth: 0,
  remainingMonsters: 0,
};

// acciones de player

function playerAction() {
  monster.health -= player.damage;
  console.log(monster.health);
  return monster.health;
}

// ¿ Nested functions para conservar el valor del daño ? TU 15  P07
function playerAction_nested() {
  let health = false;

  if (health == false) {
    hit = () => {
      monster.health -= player.damage;
    };
  }
}

// playerAction();
// playerAction_nested();
// console.log(player);
// console.log(monster);
// showGlobalStadistics();

// playerDefeated();
// playerVictory();
