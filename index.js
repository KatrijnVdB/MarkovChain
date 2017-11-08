import { readFileSync } from 'fs';
import path from 'path';
var Text = require ('markov-chains-text').default;
var fakeText = new Text;
 
const MobyDick = readFileSync(path.join(_dirname, './Text.txt'));
 
// build the generator 
const fakeMobyDick = new Text(MobyDick);
 
// generate a sentence 
const sentence = fakeMobyDick.makeSentence();
 
console.log(sentence);
 