let pessoa = {
    name: 'joao',
    age: 20,
    height: 1.87,
    documento: 123456789,
}

Object.prototype.surname = 'teste',

for(let chave in pessoa) {
    //executar a iteração sobre a propriedade do objeto
    console.log(pessoa);
}