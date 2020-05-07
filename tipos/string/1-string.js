// Retorna o tamanho de uma string
const textSize = 'texto'.length;
console.log(`Quantidade de letras: ${textSize}`);

// Retorna um array quebrando a string por um delimitador
const splittedText = 'texto'.split('x');
console.log('\nArray com posições separadas pelo delimitador:', splittedText);

// Busca por um valor e substitui por outro
const replacedText = 'texto'.replace('text', 'txet');
console.log('\nSubstituição de valor:', replacedText);

// Retorna a fatia de um valor
const lastChar = 'texto'.slice(-1);
console.log('\nÚltima letra de uma string:', lastChar);

const allWithoutLastChar = 'texto'.slice(0, -1);
console.log('\nValor da string da primeira letra menos a última:', allWithoutLastChar);

const secondToEnd = 'texto'.slice(1);
console.log('\nValor da string da segunda letra até a última:', secondToEnd);

const twoCharsBeforeFirstPos = 'texto'.substr(0, 2);
console.log('\nAs duas primeiras letras são:', twoCharsBeforeFirstPos);