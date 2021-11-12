// suma = () => {
//   let resultadosum = 5 + 5;

//   resta = () => {
//     let resultadores = 2 - 3;
//     return resultadores;
//   };

//   round = (a, b) => {
//     console.log(a - b);
//   };
//   round(resultadosum, resultadores);
// };
// suma();
const miFuncion = () => {
  let miValor = 2;
  console.log(miValor);

  const funcionHija = () => {
    console.log((miValor += 1));
  };

  return funcionHija;
};

const resultado = miFuncion();
console.log(resultado);
resultado();
resultado();
resultado();
