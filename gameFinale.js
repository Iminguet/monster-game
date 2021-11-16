//Mensage de prueba y testeo
//
console.log(
  `Salud de ${monster.name} ES: ${
    monster.health
  } \n JUgador ha dado un golpe de ${player.damage()} \nla salud despues del golpe es: ${
    monster.health
  }`
);

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
