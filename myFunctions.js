const sayHello = function () {
  console.log('Hello there!');
};
const sayBye =  () =>
  console.log('Bye bye!');

exports.sayHello = sayHello;
exports.sayBye = sayBye;
