const prompt=require("prompt-sync")({sigint:true});

let num = parseFloat(prompt(`digite um numero: `));
let i=1;

for(i=1; i<=10; i++){
    console.log(`${num} x ${i} = ${num*i}`);
}


