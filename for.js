//for(declaracao e inicializacao da variavel; condicao; incremento){ codigo que sera repetido n vezes}
let i = 0
let n = 0
for (let i = 0; i <= 10; i++) {
    //codigo que sera repetido n vr=ezes
    console.log(i);
    n++
}
console.log(`Esse codigo sera executado ${n} vezes`);


for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) console.log(i);
}