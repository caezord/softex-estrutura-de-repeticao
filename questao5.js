const prompt=require("prompt-sync")({sigint:true});

let valor = parseFloat(prompt(`digite um valor para investir: `));
let i;

for(i=1; i<13; i++){
    console.log(`mês ${i} ${(valor*0.01)+valor}`);
    valor++;
}