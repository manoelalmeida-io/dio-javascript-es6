function Pessoa() {
  if (!Pessoa.instance) {
    Pessoa.instance = this;
  }

  return Pessoa.instance;
}

const p = Pessoa.call({ name: 'Manoel' });
const p2 = Pessoa.call({ name: 'Guilherme' });

console.log(p);
console.log(p2);