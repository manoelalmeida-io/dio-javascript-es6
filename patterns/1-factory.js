function Pessoa(customProperties) {
  return {
    name: 'Manoel',
    lastName: 'Almeida',
    ...customProperties
  }
}

const p = Pessoa({ name: 'Carlos', age: 18 });
console.log(p);