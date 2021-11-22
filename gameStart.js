import { manageCharacters } from './player_monster_actions.js';
import { createMonsters } from './monsters.js';
import { GameHero } from './player.js';

const heroName = prompt('Introduce el nombre del héroe', 'Anonymous');

function startGame(nameHeroInput) {
  const hero = new GameHero(nameHeroInput);
  const monsters = createMonsters(2, 0);
  const result = `Welcome ${hero.name}. Are you ready to face ${monsters.length} monster(s) ?.`;
  alert(result);
  const selection = prompt('Choose H to heal or A to attack');

  manageCharacters(selection, hero, monsters);
  round(popMonster);
}
startGame(heroName);
