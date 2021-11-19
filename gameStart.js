import { playerAction } from './player_monster_actions.js';
import { createMonsters } from './monsters.js';
import { GameHero } from './player.js';

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
//  function startGame() {
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
function startGame(nameHeroInput) {
  const hero = new GameHero(nameHeroInput);
  const monsters = createMonsters(2, 0);
  const result = `Welcome ${hero.name}. Are you ready to face ${monsters.length} monster(s). Which name(s) are ${monsters[0]}`;
  alert(result);
  const selection = prompt('Choose H to heal or A to attack');
  alert(selection);
}
startGame(heroName);
