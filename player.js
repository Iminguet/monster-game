// Player object
//
const player = {
  name: 'pname',
  health: 100,
  potion: 2,
  MaximunAttack: 20,
  MinimunAttack: 10,
  damage: () =>
    parseInt(
      Math.random() * (player.MaximunAttack - player.MinimunAttack + 1) +
        player.MinimunAttack
    ),
};

// Healing funtcion and consecuences of dont have enougth potions
// take care of the healt dont be much than 100.
function healing() {
  if (enougthPotions(true)) {
    player.health += 70;
    if (player.health >= 100) {
      player.health = 100;
    }
  } else {
    console.log('esa peña'); // diseñar funcion de PLAYER.ATAQUE
  }
}
// Function to validate if there is potions available
function enougthPotions() {
  return player.potion >= 1 ? true : false;
}
