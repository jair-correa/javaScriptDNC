const convertFactor = 0.01;

const IMC_STATUS_DICT = {
    UNDEWEIGHT: 'UNDERWEIGHT',
    REGULAR: 'REGULAR',
    OVERWEIGHT: 'OVERWEIGHT',
    OBESITY: 'OBESITY'
}
function getClassification(classification) {
    return {
        [IMC_STATUS_DICT.OVERWEIGHT]: 'Abaixo do peso',
        [IMC_STATUS_DICT.REGULAR]: 'Peso normal',
        [IMC_STATUS_DICT.UNDEWEIGHT]: 'Acima do peso',
        [IMC_STATUS_DICT.OBESITY]: 'Obesidade',
    }[classification] || 'failed to find status description'
}

function classifyIMC(imc) {
    if (imc < 18.5) return IMC_STATUS_DICT.OVERWEIGHT;
    if (imc < 25) return IMC_STATUS_DICT.REGULAR;
    if (imc < 30) return IMC_STATUS_DICT.UNDEWEIGHT;
    return IMC_STATUS_DICT.OBESITY;
}

function calculateIMC(person) {
    const imc = person.weight / (person.height ** 2);
    const classification = classifyIMC(imc);
    return {
        imc: imc.toFixed(2),
        classification: getClassification(classification)
    };
}

const person = {
    name: 'Joaquim',
    age: 34,
    height: 1.7,
    weight: 92,
    getIMC() {
        return calculateIMC(this);
    }
};

const person2 = {
    name: 'Marlon',
    age: 53,
    height: 1.87,
    weight: 76,
    getIMC() {
        return calculateIMC(this);
    }
};

const result = person.getIMC();
console.log(`${person.name} tem IMC ${result.imc} - ${result.classification}`);


const result2 = person2.getIMC();
console.log(`${person2.name} tem IMC ${result2.imc} - ${result2.classification}`);

/*
const convertFactor = 0.01;

const IMC_STATUS_DICT = {
    UNDERWEIGHT: 'Abaixo do peso',
    REGULAR: 'Peso normal',
    OVERWEIGHT: 'Acima do peso',
    OBESITY: 'Obesidade'
};

function getClassification(classification) {
    return IMC_STATUS_DICT[classification] || 'Falha ao classificar';
}

function classifyIMC(imc) {
    if (imc < 18.5) return 'UNDERWEIGHT';
    if (imc < 25) return 'REGULAR';
    if (imc < 30) return 'OVERWEIGHT';
    return 'OBESITY';
}

function calculateIMC(person) {
    const imc = person.weight / (person.height ** 2);
    const classification = classifyIMC(imc);
    return {
        imc: imc.toFixed(2),
        classification: getClassification(classification)
    };
}

const person = {
    name: 'Joaquim',
    age: 34,
    height: 1.7,
    weight: 92,
    getIMC() {
        return calculateIMC(this);
    }
};

const result = person.getIMC();
console.log(`${person.name} tem IMC ${result.imc} - ${result.classification}`);

*/

/*
💡 Projeto simples e útil: Calculadora de IMC com Classificação de Risco
🚀 O que você aprende/pratica:
Condicionais (if, else if, else)

Objetos

Funções

Organização de código

Exibição de dados (ex: console.log() ou até numa tela HTML)

🎯 Problema do mercado que você resolve:
Muitas empresas de saúde, academias ou seguradoras usam o IMC para avaliar risco ou monitorar saúde dos colaboradores/clientes.

Um sistema simples pode automatizar essa análise ou ser usado como teste de lógica para candidatos da área de TI/Front-end.

💻 Exemplo de como divulgar no LinkedIn:
📚 Aprendendo JavaScript na prática!
Acabei de criar uma calculadora de IMC que utiliza condicionais para classificar a saúde de uma pessoa com base em seu peso e altura.

🧠 O legal é que esse tipo de lógica pode ser usado por academias, clínicas ou seguradoras para automatizar a análise de dados de saúde.

Veja o código aqui 👉 [link do GitHub ou CodePen]

#javascript #condicionais #logicaDeProgramacao #imc #desenvolvimentoweb #aprendizado #projetopessoal

🌐 Onde publicar o projeto?
CodePen – fácil e rápido de testar online

GitHub – cria um repositório com README explicando o projeto

JSFiddle – boa alternativa também

Ou posso te ajudar a criar uma versão HTML com botão e input!

Se quiser, posso montar com você um mini projeto visual com HTML + JS, tipo:

Formulário com nome, peso, altura

Botão "Calcular IMC"

Resultado aparecendo com a classificação

Quer seguir por esse caminho?

*/