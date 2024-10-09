// If else statements, Break & Continue

console.log(`Hello Lam Dinh`);

let CLB = [`real`, `chelsea`, `mu`, `liver`];
let i = 0;

while(i < CLB.length) {
    if(CLB[i].length === 2){
        console.log(`Top CLB: `, i + 1, CLB[i]);
    
    }
    else if(CLB[i].length === 4){
        console.log(`Top CLB: `, i + 1, CLB[i]);
        
    }
    else{

    }
    i++;
}


// break 
let cup = [`real`, `chelsea`, `mu`, `liver`];
let j = 0;
while(j < cup.length) {
    console.log(`>>> check j: `, j);
    if(cup[j] === "chelsea"){
        console.log(`Found it: `, cup[j]);
        break;
    }
    
    j++;
}

// continue
let champion = [`real`, `chelsea`, `mu`, `liver`];
let k = 0;
while(k < champion.length) {
    k++;
    if(champion[k] === "chelsea"){
        console.log(`Found it: `, champion[k]);
        continue;
    }

    console.log(`>>> check k: `, k);
    
}

