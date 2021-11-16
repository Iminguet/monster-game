// hay que asignar una variable al resultado de la pregunta que hacer.
import { player, healing } from './player.mjs';
import { monster } from './monsters.mjs';
export { managemenstadistics };
export { playerAttack };
import { globalStadistics } from './gameFinale.mjs';

function playerAction(pregunta) {
  if (pregunta === 'h') {
    healing();
  } else {
    playerAttack();
  }
  return playerAttack();
}
function playerAttack() {
  const playerHit = player.damage();
  monster.health -= playerHit;
  return monster.health;
}
// funcion para quitar el .push(hit) de dentro de ataques
function managemenstadistics() {
  player.damage().push(globalStadistics.playerTotalDamage());
  monster.damage().push(globalStadistics.monstersTotalDamage());
}
console.log(player.damage);
//
function monsterAttack() {
  const monsterHit = monster.damage();
  player.health -= monsterHit;
  return player.health;
}

// campo de pruebas
playerAction('h');
console.log('salud de player' + player.health + '\n');
console.log(`DAÑO HECHO POR MONSTRUYO ${monsterAttack()}`);

console.log(`salud de ${player.name} =` + player.health + '\n');

// player.health = player.health - monstruos[0].damage();
// console.log(player.health);
///////////////////////////////////
managemenstadistics();
