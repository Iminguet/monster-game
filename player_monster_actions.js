import { healing } from './player.js';
import { playerDefeated, playerVictory } from './gameFinale.js';

function playerAction(sel, ourHero, enemy) {
  const upper = sel.toUpperCase();
  switch (upper) {
    case 'H':
      console.log(`${ourHero.name} is trying to heal itself`);
      healing(ourHero, enemy);
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
      console.log(
        ' Invalid character, please, type A to attack or H to health.'
      );
  }
  if (enemy.health > 0) {
    monsterAttack(enemy, ourHero);
  }
}

// function roundStatus() {
//   console.log(`Round Status`);
//   console.log(playerRoundWarehouse);
//   console.log(monsterRoundWarehouse);
// }

function playerRoundWarehouse(player, playerDamage) {
  return console.log(
    `${player.name} -D: ${playerDamage}, H:${player.health}, P:${player.potion}`
  );
}
function monsterRoundWarehouse(monster, monsterDamage) {
  return console.log(
    `${monster.name} -D: ${monsterDamage}, H:${monster.health}.`
  );
}

function playerAttack(player, monster) {
  const playerHit = player.damage();

  monster.health = monster.health - playerHit;
  playerRoundWarehouse(player, playerHit);
}

function monsterAttack(monster, player) {
  const monsterHit = monster.damage();
  // console.log(
  //   `${monster.name} has done a damage of ${monsterHit} to ${player.name}`
  // );
  player.health = player.health - monsterHit;
  monsterRoundWarehouse(monster, monsterHit);
}
function results(player) {
  if (player.health > 0) {
    playerVictory(player);
  } else {
    playerDefeated(player);
  }
}

export { playerAttack, playerAction, results };
