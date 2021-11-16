// Conseguir nombre del monstruo
// const numberOfMonsters = () => {
//   const nMonst = parseInt(Math.random() * 1) + 3;
//   for (let units = 0; units < nMonst; units++) {
//     const mName = [('Gwyn', 'Orstein', 'Smoug')];
//     console.log(mName);
//   }
// };

// numberOfMonsters();

// Objeto monster

// constructor function
let monsterName = 'Antofagasto';

function Monster(monsterName) {
  this.name = monsterName;
  this.health = 100;
  this.monsterMaxAttack = 20;
  this.monsterMinAttack = 10;
  this.damage = () => {
    return Math.floor(
      Math.random() * (this.monsterMaxAttack - this.monsterMinAttack + 1) +
        this.monsterMinAttack
    );
  };
}
// Creando monstruos, listado y asociando
const defaultNames = ['Gwyn', 'Orstein', 'Smoug', 'Izalith', 'Nito'];
const monstruos = [];
const numeroMonstros = parseInt(Math.random() * 3) + 1;
for (let i = 0; i <= numeroMonstros; i++) {
  const nuevoMOnstruo = new Monster(defaultNames[i]);
  monstruos.push(nuevoMOnstruo);
}
// ataque monster
console.log(monstruos[0].damage());

// objeto player
const player = {
  name: 'pname',
  health: 100,
  potion: 2,
  damage: () => parseInt(Math.random() * 10) + 10,
};

// prueba DE DAÑO A OBJETO PLAYER
console.log(player.health);
player.health = player.health - monstruos[0].damage();
console.log(player.health);
///////////////////////////////////

// prueba de como baja la salud

const mon02 = monstruos.pop();

while (player.health > 0 && mon02.health > 0) {
  mon02.health = mon02.health - player.damage();
  if (mon02.health > 0) {
    player.health = player.health - mon02.damage();
  }

  console.log(' esto es el daño recibdo por monter', mon02.health);
  console.log('Este es el dañor recibido por player', player.health);
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
