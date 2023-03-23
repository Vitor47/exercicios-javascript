//atividade 1
const numeros = [1, 2, 3, 4, 5];
// //função que passa por cada numero do array e multiplica ele ao quadrado
// const quadrados = numeros.map(numero => numero * numero);
// console.log(quadrados);

//atividade 2
//função que usa reduce para somar todos os numeros para reduzir o array com vários elementos para um array com um unico elemento
// const soma = numeros.reduce((count, numero) => count += numero);
// console.log(soma)

//atividade 3
//função que usa filter que filtra numeros que encaixam na condição passada
// const pares = numeros.filter(numero => numero % 2 == 0);
// console.log(pares);

//atividade 4
//FilterMap, para filtrar elementos dentro das condições e map posteriormente para multiplicar os elementos selecionados
// const dobraPares = numeros.filter(numero => numero % 2 == 0)
//     .map(numero => numero * numero)
// console.log('dobra dos pares: ',dobraPares);


// //atividade 5
// //Use a função reduce() e filter() para calcular a média dos números pares em um array.
// // const numeros = [1, 2, 3, 4, 5];
// const pares = numeros.filter(numero => numero % 2 === 0);
// const media = numeros.reduce((acumulador, numero) => acumulador + numero / 2);
// console.log(media);

//atividade 6
//Use a função map() para transformar um array de strings em um array de seus comprimentos
// const palavras = ["olá", "mundo", "!"];
// const comprimentos = palavras.map(palavras.slice(1,2,3));
// console.log(comprimentos); 

//atividade 7
//Use a função map() para transformar um array de objetos em um array de suas propriedades.

const pessoas = [
  { nome: "João", idade: 25 },
  { nome: "Maria", idade: 17 },
  { nome: "Pedro", idade: 30 }
];

//   const nomes = pessoas.map(pessoa => pessoa.nome);
//   const idade = pessoas.map(pessoa => pessoa.idade);
//   console.log(nomes, idade);


// //atividade 8 
// let array = [];
// const toArray = pessoas.map(pessoa => pessoa.nome)
// pessoas.forEach(pessoa => array.push(pessoa.nome));
// console.log('array de nomes: ', array);

// //atividade 9   
// const addNewPrpt = pessoas.map(pessoa => {
//   return {
//     nome: pessoa.nome + ' sobrenome',
//     idade: pessoa.idade,
//     profissao: ''
//   };
// });
// console.log(addNewPrpt)


//atividade 10
//Use a função filter() para filtrar apenas pessoas com mais de 18 anos de um array de objetos.
// const maiores = pessoas.filter(pessoa => pessoa.idade >= 18);
// console.log(maiores);

//atividade 11
//Use a função filter() para filtrar apenas strings com mais de 5 caracteres de um array de strings.
// const words = ["hello", "world", "this", "is", "a", "test"];
// const caracter = words.filter(word => word.words <= 5);
// console.log(caracter);


//atividade 12
// const products = [
//   { name: "apple", price: 0.99 },
//   { name: "orange", price: 12 },
//   { name: "banana", price: 0.49 },
//   { name: "pear", price: 11 }
// ];

// const produtos = products.filter(produto => produto.price > 10);
// console.log(produtos); 


//atividade 13
//Use a função filter() para filtrar apenas elementos únicos de um array.
// const numbers = [1, 2, 3, 4, 3, 2, 5, 6, 5];
// let array1 = [];
// const uniqueNumbers = numbers.filter((num, index, array) => {
//   return array.indexOf(num) === array.lastIndexOf(num);
// });
// console.log(uniqueNumbers);

//atividade 14
// const produto = numbers.reduce((count, numero) => count * numero);
// console.log(produto);

//atividade 15
// const number = [1, 2, 3, 4, 5, 8];
//  const maior = number.reduce(numero => Math.max.apply(null, number));
//  console.log(maior);
// console.log(Math.max.apply(null, number));



//atividade 16 
// const people = [
//   { name: "John", age: 25, country: "USA" },
//   { name: "Mary", age: 17, country: "Canada" },
//   { name: "Peter", age: 30, country: "USA" },
//   { name: "Anna", age: 22, country: "Canada" }
// ];
// função com 2 parametros o array de objetos, e a propriedad ao qual ele sera agrupado
// function groupBy(objectArray, property) {
//acc = acumulador, obj = objeto que esta sendo processado 
//   return objectArray.reduce((acc, obj) => {
//     const key = obj[property];
//verifica se a chave já existe
//     if (!acc[key]) {
//       acc[key] = [];
//     }
//     // adiciona objeto à lista dentro da key
//     acc[key].push(obj);
//     return acc;
//   }, {});
// }
// const groupedPeople = groupBy(people, 'country');
// console.log(groupedPeople);


// atividade 17
//Use a função every() para verificar se todos os números em um array são pares.
const palavras = ["olá", "mundo", "!"];
const numero = [1, 2, 3];
const par = numero.every(numeros => numeros % 2 == 0);
 console.log(par);


//atividade 18 
const numerosPares = [2, 4, 6, 8];
const numerosImpares = [1, 3, 5, 7];
const chekcer = numerosImpares.every(numero => numero % 2 == 0)
const chekcer1 = numerosPares.every(numero => numero % 2 == 0)
console.log(chekcer);
console.log(chekcer1);
