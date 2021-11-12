// // Objeto monster
let monster = {
  name: 'monster',
  health: 100,
  damage: parseInt(Math.random() * 10) + 10,
};

// objeto player
let player = {
  name: 'player',
  health: 100,
  potion: 2,
  damage: parseInt(Math.random() * 10) + 10,
};

// objeto estadisticas globales
let globalStadistics = {
  playerAttacks: 0,
  monstersAttacks: 0,
  potionsConsumed: 0,
  playerTotalDamage: 0,
  monstersTotalDamage: 0,
};

// objeto estadisticas por round
let roundStadistics = {
  playerName: 'player',
  playerHealth: 0,
  remainingPotions: 0,

  monsterName: 'Monster',
  monsterHealth: 0,
  remainingMonsters: 0,
};

// acciones de player

function playerAction() {
  monster.health -= player.damage;
  console.log(monster.health);
  return monster.health;
}

// ¿ Nested functions para conservar el valor del daño ? TU 15  P07
function playerAction_nested() {
  let health = false;

  if (health == false) {
    hit = () => {
      monster.health -= player.damage;
    };
  }
}

playerAction();
playerAction_nested();
console.log(player);
console.log(monster);
