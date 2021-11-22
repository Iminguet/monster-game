import { playerAttack } from './player_monster_actions';

function round(monster, player) {
  const selection = prompt('Choose H to heal or A to attack');

  manageCharacters(selection, hero, monsters);
}
