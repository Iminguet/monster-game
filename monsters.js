function randomlyGeneratedNumberOfMonsters(maxMonsters, minMonsters) {
  return (
    Math.floor(Math.random() * (maxMonsters - minMonsters + 1)) + minMonsters
  );
}
// useoperator || para elegir nombre del onstruo.
//tu04 p44
//monster name true o false, usar opartor || o && para elegir el nombre.
//dejar la var del nombre del monstruo como undefinded o null y que && o || elija nombre
//tu04 p49, p51,p55 para nombres. tu05,p07
//
//pop push, usar array length para controlar el número de mosntruos. array.length==0 FIN
//
//  Create monster function
//

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

//namename
// ****** BORRADOR *******
//
//
//  const defaultNames =
//  prompt == true ? promtconst : ['Gwyn', 'FurtivoPigmeo', 'Izalith'];
//
//***************************************************************************/

// Here, saving the result of the createMOnsters function in variable
//

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

export { createMonsters };
