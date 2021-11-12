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

//constructor function
let monster = {
  name: '',
  health: 100,
  damage: 0,
  attack: () => {
    this.damage = parseInt(Math.random() * 10) + 10;
  },
};

// objeto player
let player = {
  name: 'pname',
  health: 100,
  potion: 2,
  damage: parseInt(Math.random() * 10) + 10,
};
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
showGlobalStadistics = () => {
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
  //SEPARACIÓN DE 2 SEGUNDOS
  console.log('GAME OVER');
};

// objeto estadisticas globales
let globalStadistics = {
  playerAttacks: 0,
  monstersAttacks: 0,
  potionsConsumed: 0,
  playerTotalDamage: 0,
  monstersTotalDamage: 0,
};

// objeto estadisticas por round
let roundStadistics = {
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

playerDefeated();
