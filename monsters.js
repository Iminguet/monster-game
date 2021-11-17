export { monster };
// Function that chooses the number of monsters to be confronted
//
function randomlyGeneratedNumberOfMonsters() {
  return Math.floor(Math.random() * (2 - 0 + 1) + 0);
}

//  Create monster function
//
function createMonsters() {
  const defaultNames = ['Gwyn', 'FurtivoPigmeo', 'Izalith'];
  const monsters = [];
  for (let i = 0; i <= randomlyGeneratedNumberOfMonsters(); i++) {
    const newMonster = new Monster(defaultNames[i]);
    monsters.push(newMonster);
  }
  return monsters;
}

//
// ****** BORRADOR *******
//
//
//  const defaultNames =
//  prompt == true ? promtconst : ['Gwyn', 'FurtivoPigmeo', 'Izalith'];
//
//***************************************************************************/

// Here, saving the result of the createMOnsters function in variable
//
let monstersToFRont = createMonsters();

// Extracting monsters from monsters ARRAY
//
const monster = monstersToFRont.pop();

// Monster constructor.
//
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
