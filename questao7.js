const prompt = require("prompt-sync")({sigint: true});

let num = 100;


for(let i=0; i<num; i++){
    if(i%3 == 0){
        console.log(`${i}`);
    }
       
}