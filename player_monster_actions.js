import { healing } from './player.js';

function manageCharacters(hSel, hObj, monsArr) {
  popMonster(monsArr);
  playerAction(hSel, hObj);
}

function popMonster(monstersArray) {
  const monster = monstersArray.pop();
  return monster;
}

function playerAction(sel, ourHero, enemy) {
  const upper = sel.toUpperCase();
  switch (upper) {
    case 'H':
      alert('sana sana culito de rana');
      healing(ourHero);
      break;
    case 'A': //////////////_____aquí______// hacer una callback que separe a los mosntruos y devolverla aquí
      playerAttack(ourHero, popMonster);
      alert('quieres sentil·la en el pescho?');
      break;
    case 'uuddlrlrba':
      alert('A fer la má');
      playerWIn();
      break;
    default:
      const invalidCharacter = prompt(
        'Valor incorrecto, introduce un caracter válido',
        'A to attack - H to healing'
      );

      playerAction(invalidCharacter, '');
      break;
  }
  monsterAttack(popMonster, ourHero);
}

// Ataque de player
//
function playerAttack(player, monster) {
  const playerHit = player.damage();

  return (monster.health = monster.health - playerHit);
}
// ataque de monster
//
function monsterAttack(monster, player) {
  const monsterHit = monster.damage();
  player.health = player.health - monsterHit;
  return player.health;
}

export { playerAttack, manageCharacters };
