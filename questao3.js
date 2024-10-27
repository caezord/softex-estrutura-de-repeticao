const prompt=require("prompt-sync")({sigint:true});

let num = parseFloat(prompt(`digite um numero: `));

for(i=num; i>0; i--){
    console.log(i);
}