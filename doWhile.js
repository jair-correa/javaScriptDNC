//while(condicao){
//    codigo que executa quantas vezes forem necessarias
//}

let num = 1

while (num <= 5) {
    console.log(num); 
    num++
}


console.log("--------------------------\n");

let isTrue = false;
let selectedNumber =Math.floor(Math.random() *10)+1
console.log(selectedNumber);

do{
  let guess = prompt('Qual o valor que o computador escolheu de 1 a 10? : ')
  
  if(Number(guess) ===selectedNumber)isTrue =true;
}while(!isTrue)

