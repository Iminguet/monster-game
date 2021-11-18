import { playerAction } from './player_monster_actions.js';
import { player } from './player.js';

// // Principio del juego, hasta que el player inicie acción
// HOla, quieres elegir un nombre ?

//     si / no

// luchas contra xx monstruyos

// quieres ponerles nombre ?

//     si / no

// Que haces ?

//   pego / uso poción

// Esto ha pasado.
//
// ********************************************//
// *
// *
// *
// * De momento, hacer esto en un solo archivo.
// *
// *
// function startGame() {
//   // Obtener nombre player()
//   // Crear Player()
//   // Calcular num monstruos
//   //
//   // Loop
//   //** Obtener nombre monstruo
//   //** Crear monstruo
// }
// startGame();
// // parametros de entrada y salida, y sin var globales.
// *
// *
// *
// *
// *
// *
// *
// *
// **********************************************//

const heroName = prompt('Introduce el nombre del héroe', 'Arcadio');
player.name = heroName;
console.log(`El nombre del héroe es: ${player.name}`);

function action() {
  const playerOption = prompt('Write A to attack or H to heal');
  return playerAction(playerOption);
}

function gaming() {
  action();
  playerAction();
  monsterAttack();
}

// use callbacks functions
test('7 is odd', () => {
  expect(isEven(7)).toBe(false);
});

function pregunta(heroName, si, no) {
  if (heroName(true)) si();
  else no();
}

// include logs

export { heroName, action };
