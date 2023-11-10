
// Write Javascript code!
/**
 * Un espía está enviando mensajes encriptados.

Tu misión es crear un programa que nos ayude a buscar patrones...

Los mensajes son palabras separadas por espacios como este:
gato perro perro coche Gato peRRo sol

Necesitamos que el programa nos devuelva el número de veces que aparece cada palabra en el mensaje, independientemente de si está en mayúsculas o minúsculas.

El resultado será una cadena de texto con la palabra y el número de veces que aparece en el mensaje, con este formato:
gato2perro3coche1sol1

¡Las palabras son ordenadas por su primera aparición en el mensaje!

** Más ejemplos: **
llaveS casa CASA casa llaves -> llaves2casa3
taza ta za taza -> taza2ta1za1
casas casa casasas -> casas1casa1casas1
 */
 export  function countWords(string) {
  const wordsArray = string.toLowerCase().split(' ');
  const resultArray = [];
  const ignoreCaseWordsArray = new Set(wordsArray)
  ignoreCaseWordsArray.forEach(word=>{
    const findWords = wordsArray.filter((x)=> word === x.toLowerCase())
    resultArray.push(`${word}${findWords.length}`)
  })
  
  return resultArray.join('')
}


export  function countWords2(string){
  const wordsArray = string.toLowerCase().split(' ');
  const wordsObject = {}
  
  wordsArray.forEach(word=>{
    wordsObject[word] = wordsObject[word] ? wordsObject[word] + 1 : 1
  })
   const result = []
   Object.entries(wordsObject).forEach(([key, value]) => {
    result.push(`${key}${value}`)
  });
  return result.join('')
}
