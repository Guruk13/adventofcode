const fs = require('fs');
var inputMapped = fs.readFileSync('input.txt').toString().trim().split(',');

var  opRes = inputMapped ;
opRes[1] = 12;
opRes[2] = 2 ;

var  statementIndex = 0 ;


while(statementIndex < 99){
    //console.log(statementIndex);
    //console.log("Green World");
    let operand = inputMapped[statementIndex];
    let param1Index = inputMapped[statementIndex+1];
    let param2Index = inputMapped[statementIndex+2];
    let storeAtPos = inputMapped[statementIndex+3];

    statement(operand, param1Index, param2Index, storeAtPos, inputMapped);


    statementIndex += 4;
}

function printreadable(parray){
    //console.log(parray);

    let i = 0;
    while (i < parray.len ){
        for(y= i ; y<3; 
            y++) {
            //console.log(parray[y]);
        }
    }
    console.log("Finally, after so long ");
    console.log(parray[0]);
}

function statement(poperand, pparam1Index, pparam2Index, pstoreAtPos, pinputMapped){
    let value ;
    if (poperand === 99){
        //console.log("The prime time");
    }
    else if (poperand == 1){
        value = opRes[pparam1Index] +  opRes[pparam2Index];
    }
    else if (poperand == 2){
        value = opRes[pparam1Index] + opRes[pparam2Index];
    }
    pinputMapped[pstoreAtPos] = value ;
    
    console.log(pstoreAtPos);
    console.log(pinputMapped[pstoreAtPos]);

    //console.log("print you marwane");
    //console.log(pinputMapped);
    printreadable(pinputMapped);




}