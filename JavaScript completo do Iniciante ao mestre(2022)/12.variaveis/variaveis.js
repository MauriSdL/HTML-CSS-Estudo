// var, let, const
// var -> não ultilizar mais essa variavel é pra navegadores antigos a menos que o seu
//projeto prescise sendo ele usado por esses navegadores antigos

// var -> ES5 - cross-browser -> funciona em varios browser
// let e const -> ES2015 so nao funciona no explore 11


// Site kangax.github.io/compat-table/es6/
// Site caniuse.com/#search=let


//Site Babel converte codigo javaScript novo em versoes para navegadores antigos como explore11
//Endereço do Site -> babeljs.io

// codigo novo
// let teste = "teste"
// console.log(2 ** 3)
//
// cont fn = () => 2

// Codigo gerado pelo Site babel
//"use strict";
//
// var teste = "teste";
// console.log(2 ** 3);
//
// var fn = function fn() {
//  return 2;    
// };