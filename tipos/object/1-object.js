let user = {
  name: 'Guilherme'
};

console.log(user);

user.name = 'Outro nome 1';
console.log(user);
user['name'] = 'Outro nome 2';

console.log(user);
const prop = 'name';
user['prop'] = 'Outro nome 3';

console.log(user);

user.lastName = 'Silva';

console.log(user);

delete user.name;

console.log(user);