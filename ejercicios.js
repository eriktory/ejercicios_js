// ejercicios.js
const ejercicios = {
  
  //ejercicio 01
  contarCadena: (cadena="") => { (!cadena) ? console.log(`no hay nada escrito`) : console.log(`la cadena ${cadena}, tiene ${cadena.length} caracteres`)},
  
  //ejercico 02
  //cortarCadena: (cadena="", longitud=undefined) => { (!cadena) ? console.log(`no hay nada escrito`) : console.log(cadena.slice(0,longitud))},

  // Ejercicio 03
  
  prueba: () => {
  console.error('error'),
  console.warn('alerta'),
  console.log(`log`),
  console.info('info')}
  
}

module.exports = ejercicios;
