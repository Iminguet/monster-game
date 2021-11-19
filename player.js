import { playerAttack } from './player_monster_actions.js';

//
// player name con valor por defecto tu09 p38
//

function GameHero(heroName) {
  this.name = heroName;
  this.health = 100;
  this.potion = 2; // use counter -- para restar el número de pociones. tu04 pagina30
  this.maximunAttack = 20;
  this.manimunAttack = 10;
  this.damage = () =>
    parseInt(
      Math.random() * (this.MaximunAttack - this.MinimunAttack + 1) +
        this.MinimunAttack
    );
}

function heroStorage(a) {
  const hero = a;
  return hero;
}
// Healing function and consecuences of dont have enougth potions
// take care of the healt dont be much than 100.
function healing(who) {
  if (enougthPotions(who) == true) {
    who.health += 70;
    showPlayerHealth(who);
    if (who.health >= 100) {
      who.health = 100;
      showPlayerHealth(who);
    }
  } else {
    alert('No hay pociones, toca huida hacia delante');
    playerAttack();
  }
  return;
}
function showPlayerHealth(who) {
  alert(who.health);
}

function enougthPotions(who) {
  who.potion >= 1 ? true : false;
  return;
}
export { GameHero, healing, heroStorage };
