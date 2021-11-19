import { heroStorage, healing } from './player.js';

function playerAction(sel, ourHero, monstersArray) {
  const upper = sel.toUpperCase();
  switch (upper) {
    case 'H':
      alert('sana sana culito de rana');
      healing(ourHero);
      break;
    case 'A': //////////////_____aquí______// hacer una callback que separe a los mosntruos y devolverla aquí
      playerAttack(ourHero, monstersArray);
      alert('quieres sentil·la en el pescho?');
      break;
    default:
      const invalidCharacter = prompt(
        'Valor incorrecto, introduce un caracter válido'
      );
      playerAction(invalidCharacter);
      break;
  }
}

// Ataque de player
//
function playerAttack(player, monster = selectone()) {
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

// player.health = player.health - monstruos[0].damage();
// console.log(player.health);
///////////////////////////////////
// managemenstadistics();

export { playerAttack, playerAction };
