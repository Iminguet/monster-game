import { playerAttack } from './player_monster_actions.js';

//
// player name con valor por defecto tu09 p38
//

function GameHero(heroName) {
  this.name = heroName;
  this.health = 100;
  this.potion = 2; // use counter -- para restar el número de pociones. tu04 pagina30
  this.maximunAttack = 20;
  this.minimunAttack = 10;
  this.damage = () =>
    parseInt(
      Math.random() * (this.maximunAttack - this.minimunAttack + 1) +
        this.minimunAttack
    );
}

// Healing function and consecuences of dont have enougth potions
// take care of the healt dont be much than 100.
function healing(ourHero, actualMonster) {
  if (enoughPotions(ourHero) === true) {
    ourHero.health += 70;
    ourHero.potion -= 1;
    if (ourHero.health > 100) {
      ourHero.health = 100;
    }
    showPlayerHealth(ourHero);
  } else {
    alert('THere is no potions, desperate struggle');
    playerAttack(ourHero, actualMonster);
  }
  return;
}
function showPlayerHealth(ourHero) {
  alert(ourHero.health);
}

function enoughPotions(ourHero) {
  return ourHero.potion >= 1 ? true : false;
}
export { GameHero, healing };
