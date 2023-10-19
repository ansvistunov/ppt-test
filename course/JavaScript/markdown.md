### Объекты и их прототипы
* Объекты в JavaScript можно организовать в цепочки так, чтобы свойство, не найденное в одном объекте, автоматически искалось бы в другом.​
* Если один объект имеет специальную ссылку \__proto__ на другой объект, то при чтении свойства из него, если свойство отсутствует в самом объекте, оно ищется в объекте \__proto__
```js 
let animal = {eats: true};​
let rabbit = {jumps: true};​
rabbit.__proto__ = animal;​
alert( rabbit.jumps ); // true​
alert( rabbit.eats ); // true​
```
---
### Объекты и их прототипы
* Объект, на который указывает ссылка \__proto__, называется «прототипом». ​
* Также говорят, что объект rabbit «прототипно наследует» от animal.​
* Прототип используется исключительно при чтении. Запись значения – работает напрямую с объектом.
```js 
let animal = {eats: true};​
let rabbit = {jumps: true};​
rabbit.__proto__ = animal;​
rabbit.eats = false;​
alert( rabbit.eats ); //false​
```
---
### Объекты и их прототипы
* Обычный цикл for..in не делает различия между свойствами объекта и его прототипа.​
```js 
let animal = {eats: true};​
let rabbit = {jumps: true,__proto__: animal};​
for (let key in rabbit) {​
  alert( key + " = " + rabbit[key] ); ​
// выводит и "eats" и "jumps"​
}​
```
* Вызов obj.hasOwnProperty(prop) возвращает true, если свойство prop принадлежит самому объекту obj, иначе false.​
---
### Объекты и их прототипы
* Установка прототипа при использовании функции-конструктора
```js 
let animal = {eats: true};​
function Rabbit(name) {this.name = name;}​
Rabbit.prototype = animal;​
let rabbit = new Rabbit("Кролик"); ​
//  rabbit.__proto__ == animal​
alert( rabbit.eats ); // true​​
```
---
### Объекты и их прототипы
* По умолчанию (если оно не изменялось), свойство prototype содержит объект вида 

{constructor: <функция-конструктор данного объекта>}​

Т.е. допустим код вида:​
```js 
function Rabbit(name) {​
  this.name = name;​
  alert( name );​
}​
let rabbit = new Rabbit("Братец Кролик");​
let rabbit2 = new rabbit.constructor("Крольчиха");​
```
---
### Объекты и их прототипы
* Все объекты в JavaScript «наследуют» от Object.prototype​
```js 
let obj = {};​
// метод берётся из прототипа?​
alert( obj.toString == Object.prototype.toString ); // true, да​
// проверим, правда ли что __proto__ это Object.prototype?​
alert( obj.__proto__ == Object.prototype ); // true​
// А есть ли __proto__ у Object.prototype?​
alert( obj.__proto__.__proto__ ); // null, нет​
```
---
### Объекты и их прототипы
* Встроенные прототипы можно изменять
```js 
String.prototype.repeat = function(times) {​
  return new Array(times + 1).join(this);​
};​
alert( "ля".repeat(3) ); // ляляля​
```

* Метод repeat теперь доступен для ВСЕХ строк
---
### Наследование методов​
```js 
function Animal(name) {
    this.name = name;
    this.speed = 0;
}​
// 1.1. Методы -- в прототип​
Animal.prototype.stop = function() {
    this.speed = 0;​
    alert( this.name + ' стоит' );
}​
Animal.prototype.run = function(speed) { 
    this.speed += speed;​
    alert( this.name + ' бежит, скорость ' + this.speed );
};​
function Rabbit(name) {
    this.name = name;
    this.speed = 0;
}​
// 2.1. Наследование​
Rabbit.prototype = Object.create(Animal.prototype);​
Rabbit.prototype.constructor = Rabbit;​
// 2.2. Методы Rabbit​
Rabbit.prototype.jump = function() {  
    this.speed++;​
    alert( this.name + ' прыгает, скорость ' + this.speed );
}​
```
---
### Методы родителя
* Переопределение метода родителя​
```js 
Rabbit.prototype.run = function(speed) {​
    this.speed++;   
    this.jump();​
};​​
```
* Вызов метода родителя​
```js 
Rabbit.prototype.run = function() {​
   // вызвать метод родителя, передав ему аргументы​
   Animal.prototype.run.apply(this, arguments);​
   this.jump(); 
}
```
---
### Ключевое слово "class"​
```js 
class Animal { // конструктор 
    constructor(name) { 
        this.name = name; 
        this.speed = 0; 
    } 
//методы класса 
    stop() { 
        this.speed = 0; 
        console.log(this.name + " state with speed " + this.speed); 
    } 
    run(speed) { 
        this.speed += speed; 
        console.log(this.name + ' run with speed:' + this.speed); 
    }
} 
```
---
### Ключевое слово "class"​
```js 
class Rabbit extends Animal {
    jump() {
        this.speed++;
        console.log(this.name + ' jump with speed ' + this.speed);
    }
}

let animal = new Animal("Животное");
let rabbit = new Rabbit("Кролик");
rabbit.stop(); //Кролик stop with speed 0
rabbit.run(10); //Кролик run with speed:10
rabbit.jump(); //Кроликjump with speed 11
```
---
### Как происходит выполнение программы?​
---
### Порядок инициализации
* На первой фазе происходит инициализация, подготовка к запуску.  Во время инициализации скрипт сканируется на предмет объявления функций вида Function Declaration, а затем – на предмет объявления переменных var. Каждое такое объявление добавляется в window.  Функции, объявленные как Function Declaration, создаются сразу работающими, а переменные – равными undefined.​
* На второй фазе происходит выполнение. Присваивание (=) значений переменных происходит, когда поток выполнения доходит до соответствующей строчки кода, до этого они undefined.​
---
### Порядок инициализации
```js 
alert("a" in window); // true,  т.к. есть свойство window.a​
alert(a); // равно undefined,  присваивание будет выполнено далее​
alert(f); // function ...,  готовая к выполнению функция​
alert(g); // undefined, т.к. это переменная, а не Function Declaration​

var a = 5;​
function f() { /*...*/ }​
var g = function() { /*...*/ };​
```
---
### Замыкания. Лексическое окружение​
* Все переменные внутри функции – это свойства специального внутреннего объекта LexicalEnvironment, который создаётся при её запуске. При запуске функция создает объект LexicalEnvironment, записывает туда аргументы, функции и переменные. Процесс инициализации выполняется в том же порядке, что и для глобального объекта, который, вообще говоря, является частным случаем лексического окружения.​
* В отличие от window, объект LexicalEnvironment является внутренним, он скрыт от прямого доступа.​
---
### Замыкания. Лексическое окружение​
* Из функции мы можем обратиться не только к локальной переменной, но и к внешней. Интерпретатор, при доступе к переменной, сначала пытается найти переменную в текущем LexicalEnvironment, а затем, если её нет – ищет во внешнем объекте переменных. В случае браузера им является window.​
---
### Замыкания. Лексическое окружение​
* Каждая функция при создании получает ссылку \[[Scope]] на объект с переменными, в контексте которого была создана.​
* При **запуске** функции **создаётся новый объект** с переменными LexicalEnvironment. Он получает ссылку на внешний объект переменных из \[[Scope]].​
* При поиске переменных он осуществляется сначала в текущем объекте переменных, а потом – по этой ссылке.​
---
### Замыкания. Лексическое окружение​
```js 
function makeCounter() {​
    let currentCount = 1;​
    return function() {return currentCount++;};​
}​

let counter = makeCounter();​
// каждый вызов увеличивает счётчик​
alert( counter() ); // 1​
alert( counter() ); // 2​
alert( counter() ); // 3​

// создать другой счётчик​
let counter2 = makeCounter();​
alert( counter2() ); // 1​
```
---
### Свойства функции
```js 
function makeCounter() {​
    function counter() {​
        return counter.currentCount++;​
    };​
    counter.currentCount = 1;​
    return counter;​
}​

let counter = makeCounter();​
alert( counter() ); // 1​
alert( counter() ); // 2​

counter.currentCount = 5;​
alert( counter() ); // 5​
```
Свойства функции доступны извне и могут быть изменены​
---
### Особенности при использовании Function​
* При создании функции с использованием new Function, её свойство \[[Scope]] ссылается не на текущий LexicalEnvironment, а на window.​

```js 
let a = 1;​
function getFunc() {​
    let a = 2;​
    let func = new Function('', 'alert(a)');​
    return func;​
}​

getFunc()(); // 1, из window !!!​
```
---
### Функция как объект​
```js 
function makeCounter() {​
    let currentCount = 1;​
    function counter() {return currentCount++;}​
    counter.set = function(value){currentCount =value;};​
    counter.reset = function() { currentCount = 1; };​
    return counter;​
}​

let counter = makeCounter();​
alert( counter() ); // 1​
alert( counter() ); // 2​

counter.set(5);​
alert( counter() ); // 5​
```
---
### Использование «Модулей»
* Скобки здесь важны. Из за них выражение превращается в Function Expression.​ В результате в глобальный объект переменные функции не попадут​

```js 
(function() {​
  // глобальная переменная нашего скрипта​
    let message = "Привет";​
  // функция для вывода этой переменной​
    function showMessage() {​
        alert( message );​
    } ​
  // выводим сообщение​
    showMessage();​

})();​
```
---
### Экспорт объектов из модулей​
```js 
(function() {​

  // main - основная функция для библиотеки​
    function main(value) {​
    // ...​
    }​

  // "экспортировать" main из модуля​
    window.m = main; ​

}());​
```
---
### Приложения
---
### CANVAS – элемент HTML 5​
```html 
<!doctype html> ​
<html> 
    <head> ​
        <title>canvasExample</title> 
        <meta charset='utf-8' /> ​
    </head> 
    <body> ​
        <canvas height='320' width='480' id="example"> 
            Обновите браузер
        </canvas>​
        <script> ​
            let example = document.getElementById("example")​
            let ctx = example.getContext('2d'); ​
            ctx.fillRect(0, 0, example.width, example.height); ​
        </script> ​
    </body> 
</html>​
```
---
### CANVAS – элемент HTML 5​
* Прямоугольники​
    * strokeRect(x, y, ширина, высота) // Рисует прямоугольник​
    * fillRect(x, y, ширина, высота)   // Рисует закрашенный прямоугольник​
    * clearRect(x, y, ширина, высота)  // Очищает область на холсте размером с прямоугольник заданного размера​
* Линии и дуги​
    * fill() заливает фигуру сплошным цветом​
    * moveTo(x, y) // перемещает "курсор" в позицию x, y​
    * lineTo(x, y) // ведёт линию из текущей позиции в указанную, и делает в последствии указанную текущей ​
---
### CANVAS – элемент HTML 5​
* Линии и дуги​
    * arc(x, y, radius, startAngle, endAngle, anticlockwise) // рисование дуги, где x и y центр окружности, далее начальный и конечный угол, последний параметр указывает направление​
* Кривые Бернштейна-Безье​
    * quadraticCurveTo(Px, Py, x, y) для построения кубической кривой​
    * bezierCurveTo(P1x, P1y, P2x, P2y, x, y) для построения квадратичной кривой Бизье​
---
### JSON
* JSON (англ. JavaScript Object Notation) — текстовый формат обмена данными, основанный на JavaScript. ​
* Данные в формате JSON (RFC 4627) представляют собой:​
    * JavaScript-объекты { ... } или​
    * Массивы [ ... ] или​
    * Значения одного из типов:​
        * строки в двойных кавычках,​
        * число,​
        * логическое значение true/false,​
        * null.​
* Основные методы для работы с JSON в JavaScript – это:​
    * JSON.parse – создает объекты из строки​
    * JSON.stringify – превращает объект в строку в формате JSON​
---
### JSON (пример)​
```json 
{​
    "name": "Вася",​
    "age": 25,​
    "roles": {​
        "isAdmin": false,​
        "isEditor": true​
    }​,
    "connections":["Oracle", "MSSQL","MySQL"]
}​
```
