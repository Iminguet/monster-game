// Player object
//
export { player, healing };
import { playerAttack } from './player_monster_actions.js';
//
// player name con valor por defecto tu09 p38
//

const player = {
  name: '',
  health: 100,
  potion: 2, // use counter -- para restar el número de pociones. tu04 pagina30
  MaximunAttack: 20,
  MinimunAttack: 10,
  damage: () =>
    parseInt(
      Math.random() * (player.MaximunAttack - player.MinimunAttack + 1) +
        player.MinimunAttack
    ),
};
console.log(player.name);

// Healing function and consecuences of dont have enougth potions
// take care of the healt dont be much than 100.
function healing() {
  if (enougthPotions(true)) {
    player.health += 70;
    if (player.health >= 100) {
      player.health = 100;
    }
  } else {
    playerAttack();
  }
}
// Function to validate if there is potions available
function enougthPotions() {
  return player.potion >= 1 ? true : false;
}
