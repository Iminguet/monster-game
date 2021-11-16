export { globalStadistics };
import { player } from './player.mjs';
import { monster } from './monsters.mjs';
import { managemenstadistics } from './player_monster_actions.mjs';

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
  playerName: player.name,
  playerHealth: player.health,
  remainingPotions: player.potion,
  monsterName: monster.name,
  monsterHealth: monster.health,
  remainingMonsters: [],
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
