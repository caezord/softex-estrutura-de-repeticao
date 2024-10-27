const prompt = require("prompt-sync")({sigint: true});

let num = 20; 
let i;
let soma = 0; 

for(i = 1; i != num+1; i++) {
    soma += i; 
    
}

console.log(`a soma dos números de 1 a 20 é ${soma}`); 
