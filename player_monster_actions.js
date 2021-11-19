function playerAction(playerOption) {
  switch (playerOption) {
    case H:
      // healing();
      alert('sana sana culito de rana');
      break;
    case A:
      // attack();
      alert('quieres sentill en el pecho?');
      break;

    default:
      alert('esta vida loca');
      break;
  }
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

// player.health = player.health - monstruos[0].damage();
// console.log(player.health);
///////////////////////////////////
// managemenstadistics();

export { playerAttack, playerAction };
