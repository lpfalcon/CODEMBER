// Import stylesheets
import {countWords, countWords2} from './CHALLENGE/challenge_01.js'
import compiler from './CHALLENGE/challenge_02.js'

const challenge_01 = countWords('casas casa casasas casa');
const challenge_01_2 = countWords2('casas casa casasas casa');
// CHALLENGE_01 RESULTS
console.log(challenge_01, challenge_01_2)

// CHALLENGE_02 RESULTS

const challenge_02 = compiler('&##&*&@&')

console.log(challenge_02)