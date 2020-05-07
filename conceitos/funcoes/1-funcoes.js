function getName() {
  return 'João Paulo da Silva';
}

function logFn(fn) {
  console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);