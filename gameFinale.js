import { player } from './player.js';
import { monster } from './monsters.js';
import { heroName } from './gameStart.js';
export { globalStadistics, roundStadistics };

// import { managemenstadistics } from './player_monster_actions.mjs';

// mensajes
//
// player victory
//
const playerVictory = () => {
  const victory = '\u270C';
  console.log(`\n Victory !${heroName} defeated all the monsters ${victory}`);
  // separación de 2 segundos
  showGlobalStadistics();
};

// player defeated
//
const playerDefeated = () => {
  const dead = '\u2620';
  console.log(` ${heroName} died!${dead}`);
  showGlobalStadistics();
};

// estadisticas totales
let showGlobalStadistics = () => {
  console.log(
    `\n
    *********************\n
    ** GAME STADISTICS **\n
    *********************\n

    ${heroName} weak attacks: ${globalStadistics[0][1]}.\n
    Monsters attacks: ${globalStadistics[1][1]}.\n
    ${heroName}'s heals: ${globalStadistics[2][1]}.\n
    Total damage made by ${heroName}:${globalStadistics[3][1]}.\n
    Total damage made by monsters:${globalStadistics[4][1]}.\n`
  );

  showGameOverMessage();
};
showGlobalStadistics();
function wait2Seconds() {
  setTimeout(2000);
}

const showGameOverMessage = () => {
  //Esperar 2 segundos
  console.log('GAME OVER');
};

// objeto estadisticas globales
const globalStadistics = [
  [playerAttacks, []], //0
  [monstersAttacks, []], //1
  [potionsConsumed, []], //2
  [playerTotalDamage, []], //3
  [monstersTotalDamage, []], //4
];

// objeto estadisticas por round

const roundStadistics = [
  [playerName, heroName], //0
  [playerHealth, player.health], //1
  [remainingPotions, player.potion], //2
  [monsterName, monster.name], //3
  [monsterHealth, monster.health], //4
  [remainingMonsters, []], //5
];

// ¿ Nested functions para conservar el valor del daño ? TU 15  P07
// function playerAction_nested() {
//   let health = false;

//   if (health == false) {
//     hit = () => {
//       monster.health -= player.damage;
//     };
//   }
// }

// playerAction();
// playerAction_nested();
// console.log(player);
// console.log(monster);
// showGlobalStadistics();

// playerDefeated();
// playerVictory();
