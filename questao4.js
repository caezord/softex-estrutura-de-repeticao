const prompt=require("prompt-sync")({sigint:true});

let num = parseFloat(prompt(`digite um numero: `)); 
let ehPrimo = true; 

for (let i = 2; i * i <= num; i++) {
    if (num % i == 0) {
        ehPrimo = false; 
        break; 
    }
}

if (ehPrimo && num > 1) {
    console.log(`${num} é primo`);
} else {
    console.log(`${num} não é primo`);
}