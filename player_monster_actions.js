import { healing } from './player.js';
import { playerDefeated, playerVictory } from './gameFinale.js';

function playerAction(sel, ourHero, enemy) {
  const upper = sel.toUpperCase();
  switch (upper) {
    case 'H':
      alert('sana sana culito de rana');
      healing(ourHero);
      break;
    case 'A':
      playerAttack(ourHero, enemy);
      alert(`${ourHero.name} hits ${enemy.name}`);
      break;
    case 'uuddlrlrba':
      alert('A fer la má');
      playerWIn();
      break;
    default:
      alert(
        'Valor incorrecto, introduce un caracter válido',
        'A to attack - H to healing'
      );
      break;
  }
  if (enemy.health > 0) {
    monsterAttack(enemy, ourHero);
  }
}

function playerAttack(player, monster) {
  const playerHit = player.damage();

  console.log(
    `${player.name} ha hecho un daño de ${playerHit} a ${monster.name}`
  );
  monster.health = monster.health - playerHit;
}

function monsterAttack(monster, player) {
  const monsterHit = monster.damage();
  console.log(
    `${monster.name} ha hecho un daño de ${monsterHit} a ${player.name}`
  );
  player.health = player.health - monsterHit;
}
function results(player) {
  if (player.health > 0) {
    playerDefeated(player);
    alert('Ganan los monstruos');
  } else {
    playerVictory(monster);
    alert(`Ha ganado ${monster.name}`);
  }
}

export { playerAttack, playerAction, results };
