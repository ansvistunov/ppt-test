const user = require("./User");
const test = require("./test");

const v = new user.User("Вася");
const p = new user.User("Петя");

v.hello(p);
console.log(test.Hello);