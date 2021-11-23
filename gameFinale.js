// import { managemenstadistics } from './player_monster_actions.mjs';

function playerVictory(hero) {
  const victory = '\u270C';
  console.log(`\n Victory !${hero.name} defeated all the monsters ${victory}`);
  // separación de 2 segundos
  // showGlobalStadistics(hero);
}

function playerDefeated(hero) {
  const dead = '\u2620';
  console.log(` ${hero.name} died!${dead}`);
  // showGlobalStadistics(hero);
}

// estadisticas totales
// function showGlobalStadistics(hero) {
//   console.log(
//     `\n
//     *********************\n
//     ** GAME STADISTICS **\n
//     *********************\n

//     ${hero.name} weak attacks: ${globalStadistics[0][1]}.\n
//     Monsters attacks: ${globalStadistics[1][1]}.\n
//     ${hero.name}'s heals: ${globalStadistics[2][1]}.\n
//     Total damage made by ${heroName}:${globalStadistics[3][1]}.\n
//     Total damage made by monsters:${globalStadistics[4][1]}.\n`
//   );

//   showGameOverMessage();
// }
// showGlobalStadistics();
// function wait2Seconds() {
//   setTimeout(2000);
// }

// const showGameOverMessage = () => {
//   //Esperar 2 segundos
//   console.log('GAME OVER');
// };

// objeto estadisticas globales
//
// Usar rest tu09 p20 para calcular el número de elementos del array si saberlo, y poder manjearlo.
//
// const globalStadistics = {
//   playerAttacks: [], //0
//   monstersAttacks: [], //1
//   potionsConsumed: [], //2
//   playerTotalDamage: [], //3
//   monstersTotalDamage: [], //4
// };

// objeto estadisticas por round
//

// const roundStadistics = {
//   playerName: '', //0
//   playerHealt: [], //1
//   remainingPotions: [], //2
//   monsterName: monstername, //3
//   monsterHealth: monsterhealth, //4
//   remainingMonsters: [], //5
// };

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
export { playerDefeated, playerVictory };
