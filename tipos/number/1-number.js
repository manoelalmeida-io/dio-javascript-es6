const myNumber = 12.4032;

// Transformar número para string
const numberAsString = myNumber.toString();
console.log('Número transformado em string:', typeof numberAsString);

// Retorna número com um número de casas decimais
const fixedTwoDecimal = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais:', fixedTwoDecimal);

// Transforma um string em float
console.log('\nString parseada para float:', parseFloat('13.22'));

// Trasforma uma string em int
console.log('\nString parseada para int:', parseInt('13.20'));