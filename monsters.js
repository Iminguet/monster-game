function randomlyGeneratedNumberOfMonsters(maxMonsters, minMonsters) {
  return (
    Math.floor(Math.random() * (maxMonsters - minMonsters + 1)) + minMonsters
  );
}

function createMonsters(maxMonsters, minMonsters) {
  const defaultNames = ['Gwyn', 'FurtivoPigmeo', 'Izalith'];
  const monsters = [];
  const numMonsters = randomlyGeneratedNumberOfMonsters(
    maxMonsters,
    minMonsters
  );
  for (let i = 0; i <= numMonsters; i++) {
    const newMonster = new Monster(defaultNames[i]);
    monsters.push(newMonster);
  }
  return monsters;
}

function Monster(monsterName) {
  this.name = monsterName;
  this.health = 100;
  this.monsterMaxAttack = 20;
  this.monsterMinAttack = 10;
  this.damage = () => {
    return parseInt(
      Math.random() * (this.monsterMaxAttack - this.monsterMinAttack + 1) +
        this.monsterMinAttack
    );
  };
}

export { createMonsters };
