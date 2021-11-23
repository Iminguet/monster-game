import { playerAction, results } from './player_monster_actions.js';
import { createMonsters } from './monsters.js';
import { GameHero } from './player.js';

const heroName = prompt('Introduce el nombre del héroe', 'Anonymous');

function startGame(nameHeroInput) {
  const hero = new GameHero(nameHeroInput);
  const monsters = createMonsters(2, 0);
  const result = `Welcome ${hero.name}. Are you ready to face ${monsters.length} monster(s) ?.`;
  alert(result);
  while (monsters.length > 0 && hero.health > 0) {
    const monster = monsters.pop();
    const selection = prompt('Choose H to heal or A to attack');
    playerAction(selection, hero, monster);
    console.log(`${monster.name} health is:${monster.health}. \n 
    ${hero.name} health is: ${hero.health}.`);
    if (monster.health > 0) {
      monsters.push(monster);
    }
  }
  results(hero);

  // for (let i = 0; i < monsters.length; i++) {
  //   const monster = monsters[i];
  //   while (monsters.health > 0) {
  //     const selection = prompt('Choose H to heal or A to attack');
  //     playerAction(selection, hero, monster);
  //     console.log(monster.health, hero.health);
  //   }

  // }
}
startGame(heroName);
