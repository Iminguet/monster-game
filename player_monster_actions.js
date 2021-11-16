// hay que asignar una variable al resultado de la preguNta que hacer.

const pregunta = 'h';
function playerAction(pregunta) {
  if (pregunta === 'h') {
    healing();
  } else {
    attack();
  }
}
function attack() {
  monster.health -= player.attack;
}
attack();
// console.log(player.health);
// player.health = player.health - monstruos[0].damage();
// console.log(player.health);
///////////////////////////////////
