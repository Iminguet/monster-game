import { player, healing } from './player.js';
import { monster } from './monsters.js';
// export { managemenstadistics };
export { playerAttack };
import { globalStadistics } from './gameFinale.js';

// Función para preguntar sobre la acción que quiere realizar player
// H --> hEALTH
// A  --> ATTACK
function playerAction(pregunta) {
  if (pregunta === 'H') {
    healing();
  } else {
    playerAttack();
  }
  return playerAttack();
}
// Ataque de player
//
function playerAttack() {
  const playerHit = player.damage();
  monster.health = monster.health - playerHit;
  return monster.health;
}
// ataque de monster
//
function monsterAttack() {
  const monsterHit = monster.damage();
  player.health = player.health - monsterHit;
  return player.health;
}

// funcion para quitar el .push(hit) de dentro de las funciones de  ataques
//
// function managemenstadistics() {
//   globalStadistics.playerTotalDamage.push(playerHit));
//   monster.damage().push(globalStadistics.monstersTotalDamage());
// }
// console.log(player.damage);

// campo de pruebas
playerAction('h');
console.log('salud de player' + player.health + '\n');
console.log(`DAÑO HECHO POR MONSTRUYO ${monsterAttack()}`);

console.log(`salud de ${player.name} =` + player.health + '\n');

// player.health = player.health - monstruos[0].damage();
// console.log(player.health);
///////////////////////////////////
// managemenstadistics();