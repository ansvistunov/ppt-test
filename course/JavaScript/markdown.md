# JavaScript

---
### Что такое JavaScript?

JavaScript — язык программирования, который особенно широко используется при разработке Web-приложений.

Основные особенности:

- стандартизован спецификацией **ECMA-262**;
- появился в 1995 году, автор — **Брендан Эйх**;
- обычно используется как встраиваемый язык;
- поддерживает несколько парадигм программирования:
  - императивную;
  - объектно-ориентированную;
  - функциональную;
- в браузере работает совместно с HTML и CSS.
---
### Что такое JavaScript?

![Популярность языков программирования](https://redmonk.com/rstephens/files/2026/04/rankings_labeled-768x549.png)

RedMonk Top 20 Languages Over Time — January 2026 <!-- .element: class="copyright-reference"  -->


---
### Что такое JavaScript?

JavaScript применяется не только в браузере:

- (+) в клиентской части Web-приложений;
- (+) в серверных приложениях;
- для прикладного ПО;
- в офисных приложениях (Microsoft Office, Open Office);
- в других средах выполнения (существуют даже "браузерные ОС").

---
### JavaScript в браузере

В браузере JavaScript взаимодействует с HTML-документом и возможностями самого браузера.

Упрощённо можно разделить окружение на три части:

- **JavaScript** — сам язык и его встроенные объекты;
- **DOM (Document Object Model)** — представление HTML-документа;
- **BOM (Browser Object Model)** — объекты и возможности браузера.

---
### JavaScript в браузере
Именно благодаря этому JavaScript может:
- изменять содержимое страницы;
- изменять атрибуты HTML-элементов;
- изменять CSS;
- реагировать на действия пользователя;
- работать с URL, историей и другими возможностями браузера;
- выполнять сетевые и асинхронные операции.

---
### Подключение JavaScript к HTML
Использование элемента `<script>`

```html
<script type="application/javascript">
    alert('Hello, World!');
</script>
```

На странице может быть несколько элементов `<script>` (атрибут `type` для обычного JavaScript сегодня не требуется)

Другой вариант — написать код непосредственно в обработчике события:
```html
<a href="delete.php"
   onclick="return confirm('Вы уверены?');">
    Удалить
</a>
```
Такой способ возможен, но для сложного кода неудобен. Предпочтительнее отделять JavaScript от HTML.

---
### Подключение JavaScript к HTML
JavaScript можно вынести в отдельный файл:

```html
<head>
    <script src="script.js"></script>
</head>
```

Этот вариант самый предпочтительный, он позволяет хранить HTML и JavaScript отдельно и повторно использовать один скрипт на разных страницах.

---
###  `async` и `defer`
Для внешних скриптов важны атрибуты `async` и `defer`.

```html
<script async src="script.js"></script>
<script defer src="script.js"></script>
```
**`async`**:
- загрузка скрипта выполняется асинхронно;
- скрипт выполняется сразу после загрузки;
- порядок выполнения нескольких `async`-скриптов не гарантируется.
**`defer`**:
- скрипт загружается параллельно разбору HTML;
- выполнение откладывается;
- скрипты выполняются после разбора документа;
- порядок выполнения нескольких `defer`-скриптов сохраняется.

---

## Элементы синтаксиса

---
### Переменные
Современный JavaScript использует `let` и `const` для объявления:

```javascript
let cnt = 25;
const msg = 'Привет Мир!!!';

let value;
```

JavaScript является динамически типизированным языком: переменная может "сменить тип".

```javascript
let cnt = 25;

cnt = 'hello world!!!';
```

Повторное объявление переменной с таким же именем вызывает ошибку

---
###  Объявление через `var`

В старом коде часто встречается объявление переменных с помощью ключевого слова `var`:

```javascript
var cnt = 10;
```

Главное отличие от `let` — область видимости:
- `var` имеет **функциональную область видимости**
- `let` — **блочную**.

```javascript
if (true) {
    var test = 'Привет';
}

alert(test); // Привет
```
В новом коде обычно используют let и const, а var необходимо знать прежде всего для понимания старого JavaScript и особенностей области видимости.

---
### Область видимости let и var
`let` имеет блочную область видимости:

```javascript
for (let i = 0; i < 3; i++) {
    let j = i * 2;
}

// i и j здесь недоступны
```

`var` имеет функциональную область видимости:

```javascript
function cnt() {
    for (var i = 0; i < 3; i++) {
        var j = i * 2;
    }

    alert(i); // 3
    alert(j); // 4
}
```

---
### Поднятие объявлений (var)

Для `var` характерно поднятие объявления:

```javascript
function sayHi() {
    phrase = 'Привет';
    alert(phrase);

    var phrase;
}

sayHi();
```

Логически объявление `var phrase` уже существует в момент начала выполнения функции, хотя присваивание значения происходит позже.

---

### Константы

Константа объявляется с помощью `const`:

```javascript
const firstManInSpace = '12.04.1961';
```

Повторное присваивание запрещено:

```javascript
firstManInSpace = '05.05.1961'; // ошибка
```

`const` запрещает изменить саму переменную. Если переменная содержит ссылку на объект, свойства самого объекта при этом могут изменяться.

---

### Комментарии

Однострочный комментарий начинается с `//`:

```javascript
// это комментарий
```

Многострочный комментарий:

```javascript
/*
    Это многострочный
    комментарий.
*/
```

Вложенные комментарии не поддерживаются.


---
### Операторы языка

К привычным операторам относятся:

```text
+  -  *  /  %
++ --
=  +=  -=  *=  /=  %=
== !=
> < >= <=
&& || !
```

Есть и специальные операторы:

```javascript
typeof
delete
void
in
instanceof
===
```

---
### Операторы языка
Современный JavaScript также поддерживает деструктуризацию:

```javascript
let [a, b] = [10, 20];

let {name, age} = {
    name: "Маша",
    age: 25
};
```

---
### Простое взаимодействие с пользователем 
> Это элементы BOM (не являются частью языка)
- `alert()`: показывает сообщение:
```javascript
alert("Привет!");
```
- `confirm()` : показывает вопрос с кнопками OK/Cancel и возвращает `true` или `false`:

```javascript
let result = confirm("Вы согласны?");

if (result) {
    alert("Вы согласились");
}
```

---
### Простое взаимодействие с пользователем
- `prompt()` : запрашивает ввод пользователя:

```javascript
let name = prompt("Как вас зовут?");

alert("Привет, " + name);
```

---
### Вывод в консоль: console.log()
console.log() — главный инструмент разработчика для вывода информации:

```javascript
let total = 2 + 2;
console.log(total);        // 4
console.log("Сумма:", total); // Сумма: 4

```

Консоль открывается клавишей F12 (или правый клик → «Просмотреть код») → вкладка Console.

Также есть:

```javascript
console.warn("предупреждение");
console.error("ошибка");
```


---
### console.log() или alert()?
- alert():
    - блокирует выполнение страницы;
    - любое значение показывает в виде строки;
    - для отладки неудобен.

- console.log():
    - ничего не блокирует;
    - объекты и массивы показываются в развёрнутом виде;
    - можно вывести сразу несколько значений.
- В реальной разработке для отладки используют console.log().

---

### Оператор if\then\else
Основная конструкция:

```javascript
if (year < 1961) {
    alert("Это слишком рано");
} else if (year > 1961) {
    alert("Это слишком поздно");
} else {
    alert("Да, точно!");
}
```

### Циклы. while

```javascript
let i = 0;

while (i < 3) {
    alert(i);
    i++;
}
```

---
### Циклы. `do...while`

Тело выполняется хотя бы один раз:

```javascript
let i = 0;

do {
    alert(i);
    i++;
} while (i < 3);
```

### Циклы. `for`

```javascript
for (let i = 0; i < 3; i++) {
    alert(i);
}
```

Части цикла `for` можно опускать:

```javascript
let i = 0;

for (; i < 3; i++) {
    alert(i);
}
```

---
### Цикл for...of
Перебирает элементы массива:

```javascript
let holidays = ["1 января", "8 марта", "23 февраля"];
for (let day of holidays) {
        console.log(day);
}
```

Работает и со строками:

```javascript
for (let ch of "ABC") {    
    console.log(ch); // A, B, C
}
```
---
### for...in и for...of — не путать
for...in перебирает перечисляемые строковые свойства объекта, включая унаследованные свойства:

```javascript
let user = { name: "Маша", age: 25 };
for (let key in user) {    
    console.log(key, user[key]);
}
```

for...of перебирает значения (массивы, строки):

```javascript
let arr = [10, 20, 30];
for (let value of arr) {    
    console.log(value); // 10, 20, 30
}
```

> ⚠️ По массиву for...in вернёт индексы "0", "1", "2" — строки. Для массивов используйте for...of.


---
###  `break` и `continue` в циклах 
`break` завершает цикл:

```javascript
while (true) {
    let value = prompt("Введи число");

    if (!value) {
        break;
    }
}
```

`continue` пропускает текущую итерацию:

```javascript
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        continue;
    }

    alert(i);
}
```
---
### Метки в циклах 
Метка позволяет выйти из внешнего цикла:

```javascript
outer:
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt("Введите значение");

        if (!input) {
            break outer;
        }
    }
}
```

---
### Оператор `switch`
`switch` используется для выбора одного из вариантов:

```javascript
let a = parseInt(prompt("2 + 2 = ?"));

switch (a) {
    case 3:
        alert("Маловато");
        break;

    case 4:
        alert("В точку!");
        break;

    case 5:
        alert("Перебор");
        break;

    default:
        alert("Совсем далеко...");
}
```

Сравнение в `switch` производится по строгому равенству.

---
### Оператор `typeof`
Оператор `typeof` позволяет определить тип значения:

```javascript
typeof 100;       // "number"
typeof "hello";   // "string"
typeof false;     // "boolean"
typeof undefined; // "undefined"
```

Особенность:

```javascript
typeof null; // "object"
```

Это историческая особенность JavaScript.
---

### Нестрогое == и строгое === равенство
- == приводит типы перед сравнением:

```javascript
5 == "5";    // true  — строка приведена к числу
0 == false;  // true
"" == 0;     // true
```

- === сравнивает и тип, и значение:

```javascript

5 === "5";   // false
0 === false; // false
5 === 5;     // true

```

> ⚠️ Правило: в современном коде используйте === и !==. Нестрогое == полезно знать (например, x == null проверяет и null, и undefined), но обычно не нужно.

---
### null и undefined
undefined — значение «не присвоено»:

```javascript
let x;
console.log(x); // undefined
```

null — «значения нет», присваивается намеренно:

```javascript
let user = null; // пользователя нет
```

При сравнении:

```javascript
null == undefined;  // true
null === undefined; // false
```

---
### Оператор ??
a ?? b возвращает a, если оно не null/undefined, иначе b:

```javascript
let name = null;
let result = name ?? "Аноним";
console.log(result); // "Аноним"
```

Отличие от || — в трактовке «ложных» значений:
```javascript
0 || "запасное";  // "запасное" — 0 считается ложным
0 ?? "запасное";  // 0         — 0 не null/undefined
```

?? удобен для значений по умолчанию.

---
### Оператор ?. (опциональная цепочка)
Позволяет безопасно обратиться к вложенному свойству:

```javascript
let user = {}; // свойства address нет
user.address.street;  // ошибка TypeError!
user.address?.street; // undefined
```

Работает и с методами:

```javascript
user.sayHi?.(); // вызовется, только если метод есть
```

Без ?. пришлось бы писать проверку: 
```javascript
user.address && user.address.street
```

---

### Тернарный оператор ? :
Короткая запись выбора из двух значений:

```javascript
let age = 20;
let status = age >= 18 ? "взрослый" : "ребёнок";
```
Эквивалентно:
```javascript
let status;
if (age >= 18) {
    status = "взрослый";
} else {    
    status = "ребёнок";
}
```
Вложенные тернарники допустимы, но плохо читаются — для сложной логики используйте if/else или switch.


---
### Обработка ошибок: `try...catch`
Конструкция:

```javascript
try {
    // код, в котором может возникнуть ошибка
} catch (err) {
    // обработка ошибки
}
```

Если в `try` возникает исключение, выполнение блока прерывается и управление передаётся в `catch`.

```javascript
try {
    someFunction();
} catch (err) {
    alert(err.message);
}
```

Объект ошибки содержит информацию о произошедшем.

---
### Блок finally
Выполняется всегда: и при ошибке, и без неё:

```javascript
try {    
    // рабочий код
} catch (err) {    
    // обработка ошибки
} finally {    
    // выполнится в любом случае
}
```

Типичное применение: скрыть индикатор загрузки, разблокировать кнопку, закрыть соединение,...

---
### Генерация ошибок: throw
Исключение можно выбросить самому:

```javascript
function divide(a, b) {    
    if (b === 0) {
        throw new Error("Деление на ноль!");    
    }    
    return a / b;
}

try {
    divide(10, 0);
} catch (err) {
    alert(err.message); // Деление на ноль!
}
```

Обычно бросают экземпляр Error. 
- Полезные свойства объекта ошибки:
    - name    — тип ("Error", "TypeError", ...)
    - message — текст ошибки
    - stack   — стек вызовов

---

### Встроенные типы
<div style="flex: 1; text-align: center; font-size: 80%;">

К основным типам JavaScript относятся:
- Примитивные:
    - undefined
    - null
    - boolean
    - number
    - bigint
    - string
    - symbol
- Объектный:
    - object

Также существуют встроенные объекты, например:

- `Date`;
- `Array`;
- `Function`.

</div>
---
###  Number

Числа в JavaScript представлены числовым типом `Number`.

Примеры:

```javascript
let a = 100;
let b = 3.14;
let big = 123e5;
let small = 123e-5;
```

Специальные значения:

```javascript
Number.MIN_VALUE
Number.MAX_VALUE
Number.NaN
Number.POSITIVE_INFINITY
Number.NEGATIVE_INFINITY
```

---
###  Number
Основные операции:

```javascript
+  -  *  /  %
<  >  ==  !=
```

Пример:

```javascript
3.14 % 2; // 1.14
```

---
### Преобразование строк в числа

```javascript
parseInt("3.14");       // 3
parseFloat("3.14");     // 3.14
Number("3.14");         // 3.14
```

Преобразование числа в строку:

```javascript
(3.14).toString();      // "3.14"
```

Проверка `NaN`:

```javascript
Number.isNaN(3.14 / 0); // false
Number.isNaN(0 / 0);    // true
Number.isNaN("hello"); // false
Number.isNaN(NaN);     // true
```

---
### String

Строки можно записывать в одинарных или двойных кавычках:

```javascript
let slogan = "Don't be evil!";
let name = 'Ivan';
```

Escape-последовательности:

```text
\\
\'
\"
\t
\n
```

Конкатенация строк:

```javascript
"2" + "3"; // "23"
```

---
### Шаблонные строки
Обратные кавычки позволяют вставлять значения через ${...}:

```javascript
let name = "Маша";
let age = 25;
let msg = `Привет, ${name}! Тебе ${age} лет.`;
console.log(msg); // Привет, Маша! Тебе 25 лет.
```

Внутри ${} — любое выражение:

```javascript
console.log(`2 + 2 = ${2 + 2}`); // 2 + 2 = 4
```
Шаблонные строки могут занимать несколько строк без \n:

```javascript
let list = `1. Первый пункт
2. Второй пункт`;
```

Предпочтительный способ формирования строк вместо "a" + x + "b".


---
### String
Сравнение строк:

```javascript
"a" == "A"; // false
"10" < "5"; // true
```

Строгое сравнение учитывает тип:

```javascript
5 == "5";   // true
5 === "5";  // false
```

Свойство `length`

```javascript
"abc".length; // 3
```

Преобразование типов:

```javascript
String(10);
Number("3.14");
```

---
###  Методы строк

Вот некоторые (их очень много):
```javascript
"Google".charAt(3);       // "g"
"Google".indexOf("o");    // 1
"Google".lastIndexOf("o");// 2
"Google".replace("o", "oo");
"Google".split("o");
"Google".substring(1, 3);
"Google".toLowerCase();
"Google".toUpperCase();
```

---
###  Boolean
Логические значения:

```javascript
true
false
```

В условии JavaScript может использовать и другие значения.
Например, истинными в логическом контексте являются:

```javascript
if (2 < 5) { }
if (25) { }
if ("текст") { }
```

Ложными являются, например:

```javascript
if ("") { }
if (0) { }
if (null) { }
```

---
### Объект `Date`

`Date` используется для работы с датой и временем.

```javascript
let now = new Date();
let january1st1970 = new Date(0);
let firstSputnik = new Date(1957, 9, 4); // 4 октября 1957
```

> ⚠️ Нумерация месяцев в `Date` начинается с 0: январь — это 0.

Методы:

```javascript
getDate()
getMonth()
getFullYear()
getTime()
getTimezoneOffset()

setDate()
setFullYear()
```

---
### Массивы

Массив хранит набор элементов.

```javascript
let holidays = [
    "1 января",
    "8 марта",
    "23 февраля"
];
```

Доступ к элементу:

```javascript
holidays[0];
holidays[1];
```

Размер:

```javascript
holidays.length;
```

Создание массива через конструктор:

```javascript
let arr = new Array();
```

---
### Методы массивов

Добавление и удаление элементов:

```javascript
push()
pop()
shift()
unshift()
```

Объединение:

```javascript
concat()
```

Преобразование в строку:

```javascript
join()
toString()
```

Получение части массива:

```javascript
slice()
```

---
### Методы массивов
Другие методы:

```javascript
reverse()
sort()
splice()
```

Важно помнить, что обычный `sort()` сортирует элементы как строки:

```javascript
[5, 3, 40, 1, 10, 100].sort();
// [1, 10, 100, 3, 40, 5]
```

Для числовой сортировки обычно передают функцию сравнения:

```javascript
[5, 3, 40, 1, 10, 100].sort((a, b) => a - b);
```
---
### Методы массивов: forEach и map
forEach вызывает функцию для каждого элемента (ничего не возвращает):

```javascript
let numbers = [1, 2, 3];
numbers.forEach(num => console.log(num));
```

map возвращает новый массив из результатов:

```javascript
let doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6]
```
map() не изменяет сам массив и возвращает новый массив. Однако элементы исходного массива могут быть объектами, и callback может изменить эти объекты.. Колбэку передаются (элемент, индекс, массив).

---
### filter и find
filter — новый массив из «подходящих» элементов:

```javascript
let numbers = [5, 12, 8, 130, 44];
let big = numbers.filter(n => n > 10);
console.log(big); // [12, 130, 44]
```

find — первый подходящий элемент (или undefined):

```javascript
let first = numbers.find(n => n > 10);
console.log(first); // 12
```
---
### some и every
some — есть ли хотя бы один подходящий элемент:

```javascript
[1, 2, 3, 4].some(n => n > 3);  // true
[1, 2, 3, 4].some(n => n > 10); // false
```

every — подходят ли все элементы:

```javascript
[1, 2, 3, 4].every(n => n > 0); // true
[1, 2, 3, 4].every(n => n > 1); // false
```

---
### reduce
Сворачивает массив в одно значение:

```javascript
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce( (acc, current) => acc + current,    0 
                                // начальное значение аккумулятора
                        );
console.log(sum); // 10
```
Аккумулятор acc последовательно принимает значения: 0, 1, 3, 6, 10.

---
### Цепочки вызовов
map и filter возвращают новый массив — их можно соединять:

```javascript
let users = [{name: "Маша", age: 25},    
                 {name: "Вася", age: 17},    
                 {name: "Петя", age: 30}];
let adultNames = users
            .filter(user => user.age >= 18)
            .map(user => user.name);
console.log(adultNames); // ["Маша", "Петя"]
```

Такой стиль заменяет большинство «ручных» циклов по массиву.


---
### Функции
Функция объявляется так:

```javascript
function showMessage() {
    alert("Привет Мир!");
}
```

Вызов:

```javascript
showMessage();
```

Функция может принимать аргументы:

```javascript
function showMessage(from, text) {
    alert(from + ": " + text);
}

showMessage("Маша", "Привет!");
```

---
### Аргументы функции
Если аргумент не передан, его значение будет `undefined`:

```javascript
function showMessage(from, text) {
    if (text === undefined) {
        text = "текст не передан";
    }

    alert(from + ": " + text);
}

showMessage("Маша");
// Маша: текст не передан
```

Функцию можно вызвать с большим количеством аргументов:

```javascript
function go(a, b) {
    alert("a=" + a + ", b=" + b);
}

go(1);       // a=1, b=undefined
go(1, 2);    // a=1, b=2
go(1, 2, 3); // третий аргумент не используется
```

---
### Параметры по умолчанию
Вместо проверки if (text === undefined) значение задаётся прямо в объявлении:

```javascript
function showMessage(from, text = "текст не передан") {    
    alert(from + ": " + text);
}

showMessage("Маша");            // Маша: текст не передан
showMessage("Маша", "Привет!"); // Маша: Привет!
```

По умолчанию можно указать и выражение — оно вычислится при вызове, если аргумент не передан.


---
### Аргументы функции
В JavaScript нет традиционной перегрузки функций:

```javascript
function f(a) {
    // ...
}

function f(a, b, c) {
    // ...
}
```

Вторая функция переопределит первую.

---
###  `arguments`

В обычной функции можно получить все переданные аргументы через `arguments`:

```javascript
function hello() {
    for (let i = 0; i < arguments.length; i++) {
        alert("Привет, " + arguments[i]);
    }
}

hello("Маша", "Света");
```

`arguments` — не настоящий массив, поэтому методы массива непосредственно к нему не применяются.

---
### Остаточные параметры: ...
Собирает «все остальные» аргументы в настоящий массив:

```javascript
function sum(...numbers) {
        let result = 0;    
        for (let num of numbers) {
                    result += num;    
        }    
        return result;
}
sum(1, 2, 3); // 6
sum();        // 0
```

Обычные параметры объявляются перед ...:

```javascript
function greet(greeting, ...names) { /* ... */ }
```

В отличие от arguments, это полноценный массив. В стрелочных функциях arguments недоступен — используйте именно ...
---
### Spread-оператор
Оператор ... при вызове функции разворачивает массив в отдельные аргументы:

```javascript
let nums = [3, 1, 8, 5];
Math.max(...nums); // 8
```

Также используется для копирования и объединения массивов:

```javascript
let copy = [...nums];
let combined = [...nums, 100, ...copy];
```

Один и тот же "оператор" ... работает в двух ролях: собрать остаток (rest) или развернуть (spread).


---
### Возвращаемое значение
Функция может возвращать результат:

```javascript
function x2(a) {
    return a * a;
}

let test = x2(10);

alert(test); // 100
```

Если функция ничего не возвращает, результатом будет `undefined`.

---
### Стрелочные функции
Стрелочная функция — короткая форма записи функции:

```javascript
let showMessage = (message) => alert(message);

showMessage("Привет Мир!");
```

Если параметр один, скобки можно опустить:

```javascript
let square = x => x * x;
```

У стрелочных функций нет собственного `this` и `arguments`, а также они не используются как конструкторы через `new`.

---
### Область видимости
Функция может иметь локальные переменные:

```javascript
function showMessage() {
    let msg = "Привет, мир!";
    alert(msg);
}

showMessage();

alert(msg); // ошибка
```


---
### Внешние переменные
Функция может обращаться к переменным из внешней области видимости:

```javascript
let name = "Вася";

function showMessage() {
    name = "Петя";
    let message = "Привет, я " + name;

    alert(message);
}

showMessage();

alert(name); // Петя
```

---
### Внешние переменные
Функция может как читать, так и изменять внешнюю переменную.

Неявное создание глобальных переменных в современном коде использовать нельзя. В частности, строгий режим помогает обнаруживать такие ошибки:

```javascript
"use strict";

function test() {
    message = "Привет"; // ошибка
}
```

---
### Функциональная переменная
С функцией можно работать как со значением:

```javascript
function hello() {
    alert("Привет");
}

let f = hello;

f();
```

Функции можно передавать (как аргумент) в другие функции и хранить в переменных.

---
### Function Declaration и Function Expression

**Function Declaration**:

```javascript
function sum(a, b) {
    return a + b;
}
```

**Function Expression**:

```javascript
let sum = function(a, b) {
    return a + b;
};
```


---
### Function Declaration и Function Expression
Function Declaration создаётся до выполнения основного кода:

```javascript
hello("Вася");

function hello(name) {
    alert("Hi, " + name);
}
```

Function Expression создаётся во время выполнения присваивания:

```javascript
hello("Вася"); // ошибка

let hello = function(name) {
    alert("Hi, " + name);
};
```

---
<!-- .slide: class="code-sm" -->
### Именованные и анонимные функции

Анонимная функция:

```javascript
const f = function() {
    alert("Привет!");
}
```

Например, функцию можно передать как аргумент:

```javascript
function ask(question, yes, no) {
    if (confirm(question)) {
        yes();
    } else {
        no();
    }
}

ask(
    "Вы согласны?",
    function() {
        alert("Вы согласились.");
    },
    function() {
        alert("Вы НЕ согласились.");
    }
);
```

---
<!-- .slide: class="code-sm" -->
### Именованные и анонимные функции
Именованное функциональное выражение может быть полезно, например, для рекурсии:

```javascript
let f = function hello() {
    // внутри функции доступно имя hello
};

alert( hello ); 
    // снаружи имя - не видно (ошибка: undefined variable 'hello')

```

---
### Создание функции через `Function`
- Функцию можно создать динамически:

```javascript
let sum = new Function(
    "a,b",
    "return a+b;"
);

let result = sum(1, 2);
```

Такой способ встречается значительно реже обычных объявлений функций.

- Получение кода функции

```javascript
function hello() {alert( "Привет" );}
    alert( hello ); 
    
```
будет выведен код функции
---

## Интеграция с HTML. События


---
### События
Событие — сигнал о том, что в браузере что-то произошло.

Примеры:
- нажатие кнопки мыши;
- движение мыши;
- нажатие клавиши;
- получение фокуса;
- изменение значения поля;
- загрузка документа;
- отправка формы.
- ...

JavaScript в браузере использует событийную модель.
---
### Обработчики событий

- Событие может быть переадресовано обработчику событий
- Для этого обработчик должен быть специальным образом назначен
- Существует несколько способов назначить обработчик для события



---
### Обработчики событий. HTML-атрибут

```html
<input
    type="button"
    value="Нажми меня"
    onclick="alert('Привет!')">
```

Можно сначала определить отдельную функцию:

```html
<script>
function hello() {
    alert("Привет!");
}
</script>

<input
    type="button"
    onclick="hello()"
    value="Привет!">
```

Для сложных приложений этот способ неудобен.

---
### Обработчики событий.Свойство элемента

```html
<input type="button" id="buttonScript" 
            value="Кнопка" />
```

```javascript
<script>
  buttonScript.onclick = function() {
    alert( 'Привет!' );
  };
</script>
```

Недостаток: через одно свойство `onclick` можно назначить только один обработчик.

---
<!-- .slide: class="code-sm" -->

###  Обработчики событий. addEventListener()
Предпочтительный универсальный способ:
- element.addEventListener(event, handler[, useCapture]);
    - Event -имя события, например click
    - Handler - ссылка на функцию, которую надо поставить обработчиком.
    - useCapture - необязательный аргумент (по умолчанию false), «фаза», на которой обработчик должен сработать. Этот аргумент редко нужен, мы его рассмотрим позже.


---
###  Обработчики событий. addEventListener()

```javascript
element.addEventListener("click", handler);
```

Например:

```javascript
function handler() {
    alert("Привет!");
}

button.addEventListener("click", handler);
```

Удалить обработчик можно:

```javascript
button.removeEventListener("click", handler);
```

---
###  Обработчики событий. addEventListener()
Важно: для удаления должна использоваться **та же функция**, которая была передана при добавлении.

Нельзя:

```javascript
element.addEventListener("click", function() {
    alert("Привет!");
});

element.removeEventListener("click", function() {
    alert("Привет!");
});
```

Это две разные функции.

---
###  Обработчики событий. addEventListener()
Можно:

```javascript
<input id="elem" type="button" value="Нажми меня"/>
<script>
  function handler1() {alert('Спасибо!');};
  function handler2() {alert('Спасибо ещё раз!');}
  elem.onclick = function() { alert("Привет"); };
  elem.addEventListener("click", handler1); 
// Спасибо!
  elem.addEventListener("click", handler2); 
// Спасибо ещё раз!
</script>

```

`addEventListener()` позволяет назначить несколько обработчиков одного события.

---
###  `this` в обработчике
В обработчике события `this` обычно ссылается на элемент, для которого обработчик вызван:

```html
<button onclick="alert(this.innerHTML)">
    Нажми меня
</button>
```

---

### Объект события

<div style="flex: 1; text-align: center; font-size: 80%;">

Обработчик получает объект `event`:

```javascript
element.onclick = function(event) {
    // ...
};
```

Полезные свойства:

```javascript
event.type
event.target
event.currentTarget
event.clientX
event.clientY
```

- event.type -тип события (в данном случае click)
- event.currentTarget -элемент, на котором сработал обработчик. Значение такое же, как и у this, но бывают ситуации, когда обработчик является методом объекта и его this при помощи bind привязан к этому объекту, тогда используется event.currentTarget.
- event.clientX / event.clientY -координаты курсора в момент клика (относительно окна)

</div>

---
### Всплытие и захват событий

<div style="display: flex; gap: 20px; align-items: flex-start;">

<!-- Левая колонка: Код -->
<div style="flex: 1; text-align: left;">

Событие в DOM проходит несколько фаз:

1. **capture** — распространение сверху вниз;
2. **target** — достижение целевого элемента;
3. **bubble** — распространение обратно вверх.

</div>
<div style="flex: 1; text-align: center;">

![Фазы распространения DOM-события](https://www.w3.org/TR/2003/NOTE-DOM-Level-3-Events-20031107/images/eventflow.png)


</div>

---
### Всплытие и захват событий
По умолчанию `addEventListener()` регистрирует обработчики в фазе bubbling.

Для capture можно использовать:

```javascript
element.addEventListener("click", handler, true);
```

или современную запись:

```javascript
element.addEventListener("click", handler, { capture: true });
```

---

### Остановка распространения

- Распространение события можно остановить с помощью вызова stopPropagation():

```javascript
<body onclick="alert('сюда обработка не дойдёт')">
  <button onclick="event.stopPropagation()">
    Кликни меня
</button> </body>
```

- Если у элемента несколько обработчиков, `stopPropagation()` не отменяет выполнение остальных обработчиков этого же элемента.

- Для немедленной остановки обработки используется stopImmediatePropagation() - прекращает дальнейшее
распространение события и предотвращает вызов остальных обработчиков этого события на текущем объекте..


---
### Порядок обработки событий

- JavaScript выполняет синхронный код последовательно.
- Длительная синхронная операция блокирует основной поток:
пока она выполняется, интерфейс не может нормально
обрабатывать другие задачи и обновляться.
- Асинхронные API позволяют запланировать продолжение
работы после завершения операции.
- Этим, в частности, управляет event loop.
> Web Workers позволяют выполнять JavaScript в отдельных worker-контекстах, не блокируя основной поток страницы.


---
### Порядок обработки событий
<div style="display: flex; gap: 20px; align-items: flex-start;">

<!-- Левая колонка: Код -->
<div style="flex: 1; text-align: left;">

![JavaScript Event Loop](https://upload.wikimedia.org/wikipedia/commons/8/83/JavaScript_Event_Loop.png)

</div>
<div style="flex: 1; text-align: center; font-size: 80%;">

- Когда происходит событие, оно попадает в очередь.
- Цикл обработчика событий очереди для каждого события запускает его обработчик (обработчики). Обычно события очереди обрабатываются в порядке поступления
- Если событие инициируется кодом JavaScript оно, как правило, обрабатывается синхронно, то есть прямо сейчас
- Это связано с понятием **event loop** — цикла обработки событий.

</div>


---
### Синхронные события
Если JavaScript непосредственно вызывает действие, оно может выполниться сразу.
Например:

```javascript
button.onclick = function() {
    text.value += "в onclick ";

    text.focus();

    text.value += "из onclick ";
};
```

Если `focus()` вызывает другое событие, оно может быть обработано непосредственно во время текущего вызова.

Порядок: в onclick , !focus!, из onclick 
---
### Функция `setTimeout()`

`setTimeout()` позволяет запланировать функцию:

```javascript
<input type="button" id="button" value="Нажми меня">
<input type="text" id="text" size="60">
<script>
  button.onclick = function() {
    text.value += ' onclick ';
    setTimeout(function() {text.focus();}, 0);
    text.value += 'из onclick ';
  };
  text.onfocus = function(){text.value+='!focus! ';};
</script>

```

Даже `setTimeout(..., 0)` не означает «выполнить прямо сейчас». Функция будет поставлена в очередь и выполнится после завершения текущего кода.

Порядок: в onclick ,из onclick, !focus!
---
### Всплытие событий

При наступлении события обработчики сначала срабатывают на самом вложенном элементе, затем на его родителе, и так далее, вверх по цепочке вложенности.

```html
<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
```

При нажатии на текст последовательно будут вызваны обработчики P, DIV и FORM


---
### События мыши
Основные события:

```text
mousedown
mouseup
mouseover
mouseout
mousemove
click
contextmenu
dblclick
```

Например, обычный клик связан с последовательностью нажатия и отпускания кнопки мыши.

Дополнительные признаки события:

```javascript
event.shiftKey
event.altKey
event.ctrlKey
event.metaKey
```

---
### События мыши
Координаты мыши:

```javascript
event.clientX
event.clientY

event.pageX
event.pageY
```

Также существуют:

```text
mouseenter
mouseleave
```

---
### События клавиатуры
Основные события:

```text
keydown
keyup
```

Современный код обычно работает со свойствами `event.key` и `event.code`.
Например:

```javascript
document.addEventListener("keydown", event => {
    console.log(event.key);
});
```

Пользовательский ввод можно отменить:

```javascript
input.addEventListener("keydown", event => {
    event.preventDefault();
});
```

---
### События документа

`DOMContentLoaded` возникает, когда HTML разобран и DOM построен:

```javascript
document.addEventListener(
    "DOMContentLoaded",
    ready
);
```

`load` означает, что документ и связанные ресурсы загружены:

```javascript
window.addEventListener("load", ready);
```

Также существуют события, связанные с уходом со страницы:

```text
beforeunload
unload
```

---
### События формы
Часто используются:

```text
focus
blur
change
input
cut
copy
paste
submit
```

`input` обычно возникает при изменении значения поля.

`change` возникает после фиксации изменения значения элемента формы.

`submit` связан с отправкой формы.

---
### DOM — Document Object Model
DOM — объектное представление HTML-документа.

<div style="display: flex; gap: 20px; align-items: flex-start;">

<!-- Левая колонка: Код -->
<div style="flex: 1; text-align: left;">


Например, HTML:

```html
<!DOCTYPE html>
<html>
<head>
    <title>A Simple Web Page</title>
</head>
<body>
    <h1>My Web Page</h1>
    <p>Это текст</p>
</body>
</html>
```





</div>

<div style="flex: 1; text-align: center; font-size: 80%;">

представляется браузером как дерево узлов.

![Пример дерева DOM](https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/DOM_tree.svg/960px-DOM_tree.svg.png)


</div>


---
### DOM — Document Object Model

DOM позволяет JavaScript:
- находить элементы;
- читать и изменять их содержимое;
- изменять атрибуты;
- добавлять и удалять узлы;
- изменять CSS;
- назначать обработчики событий.


---
### Узлы DOM

Основные виды узлов:

- `Document`;
- `Element`;
- `Text`;
- `Comment`;
- `DocumentType`.

Например, HTML-элемент является узлом типа `Element`, а текст внутри него — текстовым узлом.

---
### Основные свойства DOM-узлов 
nodeType: Тип узла.
Наиболее часто:

```text
1 — Element
3 — Text
```

`nodeName` и `tagName` : Имя узла или HTML-тега.

innerHTML: Внутреннее HTML-содержимое:

```javascript
element.innerHTML;
```

Можно изменять:

```javascript
element.innerHTML = "<b>Привет!</b>";
```

outerHTML: HTML всего элемента вместе с самим элементом.

---
### Основные свойства DOM-узлов 
textContent: Только текстовое содержимое без HTML-тегов:

```javascript
element.textContent;
```
hidden: Позволяет скрыть элемент:

```javascript
element.hidden = true;
```

---

<!-- .slide: class="code-sm" -->

### Навигация по DOM

<div style="display: flex; gap: 20px; align-items: flex-start;">

<!-- Левая колонка: Код -->
<div style="flex: 1; text-align: left;">


Для перемещения по дереву используются свойства:

- Дети

```javascript
childNodes
firstChild
lastChild
```

- Соседи

```javascript
previousSibling
nextSibling
```

- Родители

```javascript
parentNode
parentElement
```

</div>

<div style="flex: 1; text-align: center; font-size: 80%;">

![Навигация по дереву DOM](https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/960px-DOM-model.svg.png)

</div>

---
### childNodes и children
В childNodes попадают все узлы — включая текстовые (пробелы, переносы строк!):

```html
<div id="elem">
  Текст <b>Жирный</b>
</div>
```

```javascript
let elem = document.getElementById("elem");
elem.childNodes.length; // 3 — переносы строк тоже узлы!
elem.children.length;   // 1 — только элементы (теги)
elem.firstChild;        // текстовый узел (перенос строки)
elem.firstElementChild; // <b>Жирный</b>
```

> ⚠️ Работая с тегами, используйте «элементные» варианты: children, firstElementChild, previousElementSibling, nextElementSibling, parentElement.


---
### Поиск элементов

По `id`:

```javascript
document.getElementById("main");
```

По тегу:

```javascript
element.getElementsByTagName("p");
```

По имени:

```javascript
document.getElementsByName("username");
```

По классу:

```javascript
element.getElementsByClassName("important");
```

Современный и очень удобный способ — CSS-селекторы:

```javascript
document.querySelector("#main");
document.querySelector(".important");
document.querySelectorAll("p");
```

`querySelector()` возвращает первый найденный элемент, а `querySelectorAll()` — все подходящие элементы.
---
### Создание и добавление элементов
```javascript
let div = document.createElement("div"); // элемент ещё НЕ на странице
div.className = "message";
div.textContent = "Привет!";
document.body.append(div); // теперь добавлен на страницу
```

- Основные методы:
    - node.append(...)  — вставить в конец
    - node.prepend(...) — вставить в начало
    - node.before(...)  — перед узлом
    - node.after(...)   — после узла
    - node.remove()     — удалить узел

---
### Пример: список из массива
```javascript
let items = ["Хлеб", "Молоко", "Сыр"];
let list = document.createElement("ul");
for (let item of items) {
     let li = document.createElement("li");    
     li.textContent = item;    
     list.append(li);
     }
document.body.append(list);
```

---
### Атрибуты элементов

```javascript
elem.getAttribute("href");      // прочитать
elem.setAttribute("href", url); // установить
elem.hasAttribute("href");      // проверить наличие
elem.removeAttribute("href");   // удалить
```

У стандартных атрибутов есть одноимённые свойства:

```javascript
link.href = "https://ya.ru";
input.value = "текст";
input.disabled = true;
```

*Пользовательские атрибуты data-\* доступны через elem.dataset.*

---
### Классы и стили
Классами управляют через classList — это предпочтительный способ:

```javascript
elem.classList.add("highlight");
elem.classList.remove("highlight");
elem.classList.toggle("active");   // добавить / убрать
elem.classList.contains("active"); // true / false
```

Точечные стили задаются через style (имена — в camelCase):

```javascript
elem.style.color = "red";
elem.style.backgroundColor = "#eee";
```

> ⚠️ «Разбрасывать» стили по коду неудобно — лучше менять класс, а оформление описывать в CSS.

---
### innerHTML: осторожно с пользовательскими данными!
innerHTML разбирает строку как HTML:

```javascript
let name = '<img src=x onerror="alert(1)">';
elem.innerHTML = "Привет, " + name;  // HTML выполнится!
elem.textContent = "Привет, " + name; // просто текст — безопасно
```

> ⚠️ Небезопасная вставка непроверенных пользовательских данных через innerHTML может привести к XSS. Если нужно вставить именно текст, используйте textContent.

---
### BOM — Browser Object Model
BOM (Browser Object Model) — традиционное, неформальное название набора браузерных API, связанных с окном и окружением страницы.
В браузерном окружении глобальный объект доступен через globalThis; в обычном контексте окна globalThis связан с объектом window.

```javascript
window
```

В него входят, в частности:

```text
document
navigator
screen
location
history
```

Также с браузером связаны:

```text
localStorage
sessionStorage
XMLHttpRequest
alert()
confirm()
prompt()
```

---
### Глобальный объект `window`
В браузере глобальным объектом является `window`.
Некоторые глобальные значения доступны как его свойства:

```javascript
var a = 5;

alert(window.a); // 5
```

При этом для `let` и `const` поведение отличается:

```javascript
let b = 10;

window.b; // undefined — let/const не создают свойств window
```
---
### localStorage и sessionStorage

localStorage хранит пары «ключ — значение» между перезагрузками страницы:

```javascript
localStorage.setItem("name", "Маша");
let name = localStorage.getItem("name"); // "Маша"
localStorage.removeItem("name");
localStorage.clear(); // очистить всё хранилище
```

Значения всегда сохраняются как строки:

```javascript
localStorage.setItem("age", 25);
localStorage.getItem("age"); // "25"
```

Объекты сохраняют через JSON:

```javascript
let user = {name: "Маша", age: 25};
localStorage.setItem("user", JSON.stringify(user));
let saved = JSON.parse(localStorage.getItem("user"));
```

sessionStorage — то же самое, но данные живут только в рамках текущей вкладки.

---
### Асинхронные операции
Некоторые операции нельзя или не следует выполнять как длительную синхронную работу.
Например:

- загрузка сетевых данных;
- загрузка скрипта;
- таймер;
- ожидание результата внешней операции.

Задача JavaScript — дождаться результата, не блокируя основной поток.

---
### Callback
Один из способов работы с асинхронностью — передать функцию обратного вызова.
Например, загрузка скрипта:

```javascript
function loadScript(src, callback) {
    let script = document.createElement("script");

    script.src = src;

    script.onload = () => callback(script);

    document.head.append(script);
}

loadScript("script.js", function() {
    testFunction();
});
```

Функция `callback` будет вызвана после завершения загрузки.

---
### Promise

`Promise` — объект, представляющий результат асинхронной операции.

Состояния Promise:

```text
pending   — ожидание
fulfilled — успешно выполнено
rejected  — завершилось ошибкой
```

Создание:

```javascript
let promise = new Promise(function(resolve, reject) {
    // асинхронная операция

    // resolve(result);
    // reject(error);
});
```

`resolve()` сообщает об успешном завершении.

`reject()` сообщает об ошибке.

---
### `then()`

Успешный результат обрабатывается через `then()`:

```javascript
promise.then(
    function(result) {
        // успешное выполнение
    },
    function(error) {
        // ошибка
    }
);
```

Первый обработчик получает результат.

Второй — ошибку.

---
### `catch()` и `finally()`

`catch()` используется для обработки ошибки:

```javascript
promise.catch(function(error) {
    console.log(error);
});
```

`finally()` выполняется независимо от результата:

```javascript
promise.finally(function() {
    console.log("Операция завершена");
});
```

Это удобно для действий, которые должны выполняться и после успеха, и после ошибки: например, скрыть индикатор загрузки.

---
### Промисификация: callback → Promise

Перепишем `loadScript` так, чтобы он возвращал Promise:

```javascript
function loadScript(src) {
    return new Promise(function(resolve, reject) {
        let script = document.createElement("script");

        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(
            new Error("Ошибка загрузки " + src)
        );

        document.head.append(script);
    });
}

loadScript("script.js").then(script => {
    testFunction();
});
```

Такой приём называют **промисификацией**: обёртка callback-операции в Promise.


---
### `async/await`

`async/await` делает код работы с Promise похожим на последовательный код.

`async` перед функцией означает, что функция возвращает Promise:

```javascript
async function test() {
    // ...
}
```

`await` ожидает завершения Promise:

```javascript
async function testAsync() {
    let script = await loadScript("script.js");

    testFunction();
}

testAsync();
```

`await` можно использовать внутри `async`-функции.
---
### Ошибки в async-функциях: try...catch

`await` пробрасывает ошибку rejected-Promise — её ловит обычный `try...catch`:

```javascript
async function testAsync() {
    try {
        await loadScript("script.js");

        testFunction();
    } catch (err) {
        alert(err.message);
    }
}

testAsync();
```

Сравните с цепочкой `.then(...).catch(...)` — код стал линейным.



---
### Объекты JavaScript

Объект можно рассматривать как структуру данных «ключ — значение»:

```javascript
let user = {
    name: "Маша",
    age: 25
};
```

Доступ через точку:

```javascript
user.name;
```

или через квадратные скобки:

```javascript
user["name"];
```

---
### Объекты JavaScript
Добавление свойства:

```javascript
user.city = "Нижний Новгород";
```

Удаление:

```javascript
delete user.city;
```

Проверка наличия:

```javascript
"name" in user;
```

### Перебор свойств

Для перебора используется `for...in`:

```javascript
for (let key in user) {
    console.log(key, user[key]);
}
```

---
###  Ссылки на объекты

При присваивании объекта другой переменной копируется ссылка на тот же объект:

```javascript
let user = {
    name: "Вася"
};

let admin = user;

admin.name = "Петя";

alert(user.name); // Петя
```

Поэтому изменение через `admin` видно через `user`.

---
### Методы объектов

Свойство объекта может содержать функцию:

```javascript
let user = {
    name: "Вася",

    sayHi: function() {
        alert("Привет!");
    }
};

user.sayHi();
```

Такую функцию называют **методом объекта**.

Метод можно добавить позднее:

```javascript
user.sayHi = function() {
    alert("Привет!");
};
```

---
###  `this`
Для доступа к текущему объекту внутри метода используется `this`:

```javascript
let user = {
    name: "Вася",

    sayHi: function() {
        alert("Привет, " + this.name);
    }
};

user.sayHi();
```

---
###  `this`
Важно: значение `this` определяется способом вызова функции.

```javascript
let user = {
    firstName: "Вася"
};

let admin = {
    firstName: "Админ"
};

function func() {
    alert(this.firstName);
}

user.f = func;
admin.g = func;

user.f();   // Вася
admin.g();  // Админ
```

---

<!-- .slide: class="code-sm" -->

### Преобразование объектов
При строковых и числовых операциях объект в некоторых случаях преобразуется в примитив.
В логическом контексте объекты всегда являются truthy, включая пустые объекты и массивы.

```javascript
if ({}) {
    alert("Объект — true");
}
```

Даже пустые массивы и объекты считаются `true`.
---
### Преобразование объектов
- `toString()` и `valueOf()`

По умолчанию объект при строковом преобразовании может давать:

```text
[object Object]
```

Можно определить собственный `toString()`:

```javascript
let user = {
    firstName: "Василий",

    toString: function() {
        return "Пользователь " + this.firstName;
    }
};

alert(user);
```

Для числового преобразования сначала вызывается `valueOf()`; если он не вернул примитив — вызывается `toString()`.

---

### Конструкторы и `new`

Функция может использоваться как конструктор:

```javascript
function Animal(name) {
    this.name = name;
    this.canWalk = true;
}

let animal = new Animal("кот");
```

При вызове с `new` создаётся новый объект, а `this` внутри конструктора указывает на него.

По соглашению имена функций-конструкторов начинают с заглавной буквы.

---
### Методы в конструкторах

Можно создать метод непосредственно в конструкторе:

```javascript
function User(name) {
    this.name = name;

    this.sayHi = function() {
        alert("Моё имя: " + this.name);
    };
}

let ivan = new User("Иван");

ivan.sayHi();
```

Для большого количества объектов такой подход может создавать отдельную функцию для каждого объекта. Поэтому методы часто размещают в прототипе.

---
### Локальные переменные конструктора

В конструкторе могут существовать вспомогательные локальные переменные и функции:

```javascript
function User(firstName, lastName) {
    let phrase = "Привет";

    function getFullName() {
        return firstName + " " + lastName;
    }

    this.sayHi = function() {
        alert(phrase + ", " + getFullName());
    };
}
```

Здесь `sayHi()` сохраняет доступ к локальным значениям конструктора.

---
### Дескрипторы свойств
Для тонкой настройки свойств используется:

```javascript
Object.defineProperty(
    object,
    property,
    descriptor
);
```

Например:

```javascript
let user = {};

Object.defineProperty(user, "name", {
    value: "Вася",
    writable: true,
    configurable: true,
    enumerable: true
});
```

---
### Дескрипторы свойств
- Основные поля дескриптора:
    - `value` — значение;
    - `writable` — можно ли изменять значение;
    - `configurable` — можно ли изменять конфигурацию и удалять свойство;
    - `enumerable` — участвует ли свойство в перечислении;
    - `get` — функция-геттер;
    - `set` — функция-сеттер.

---
### Геттеры и сеттеры
Геттер вычисляет значение свойства:

```javascript
let user = {
    firstName: "Вася",
    surname: "Петров",

    get fullName() {
        return this.firstName + " " + this.surname;
    }
};

alert(user.fullName);
```

---
### Геттеры и сеттеры
Сеттер позволяет обработать присваивание:

```javascript
let user = {
    firstName: "Вася",
    surname: "Петров",

    get fullName() {
        return this.firstName + " " + this.surname;
    },

    set fullName(value) {
        let parts = value.split(" ");

        this.firstName = parts[0];
        this.surname = parts[1];
    }
};

user.fullName = "Петя Иванов";
```

---
### Работа со свойствами объекта

Полезные методы:

```javascript
Object.defineProperties()
Object.keys()
Object.getOwnPropertyNames()
Object.getOwnPropertyDescriptor()
```

Например:

```javascript
Object.keys(user);
```

возвращает массив перечисляемых собственных свойств.

---
### Статические свойства и методы

Свойства и методы, записанные непосредственно в функцию-конструктор, являются статическими:

```javascript
function Article() {
    Article.count++;
}

Article.count = 0;
Article.DEFAULT_FORMAT = "html";
```

Статический метод:

```javascript
Article.showCount = function() {
    alert(this.count);
};
```

Использование:

```javascript
new Article();
new Article();

Article.showCount(); // 2
```

---
### `call()`

Метод `call()` позволяет явно указать значение `this`:

```javascript
func.call(context, arg1, arg2);
```

Пример:

```javascript
function showFullName(firstPart, lastPart) {
    alert(this[firstPart] + " " + this[lastPart]);
}

let user = {
    firstName: "Василий",
    surname: "Петров"
};

showFullName.call(
    user,
    "firstName",
    "surname"
);
```

---

### `apply()`

`apply()` работает аналогично `call()`, но принимает аргументы массивом:

```javascript
func.call(context, arg1, arg2);

func.apply(context, [arg1, arg2]);
```

`apply()` удобен, когда набор аргументов формируется динамически.

---

<!-- .slide: class="code-sm" -->

### Прототипы
В JavaScript объект может иметь прототип — другой объект, из которого он может получать свойства и методы.

Если свойство не найдено непосредственно в объекте, JavaScript ищет его в прототипе, затем в прототипе прототипа и так далее.

```javascript
const animal = {
    eats: true,
    
    walk() {
        console.log("Животное идёт");
    }
};

const rabbit = {
    jumps: true
};

Object.setPrototypeOf(rabbit, animal);
console.log(rabbit.jumps); // true — собственное свойство
console.log(rabbit.eats);  // true — найдено в прототипе
rabbit.walk();             // Животное идёт
```
Таким образом, rabbit использует свойства и методы объекта animal, не копируя их в себя.

---
### Прототипы
Цепочка прототипов

![Цепочка прототипов JavaScript](https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/JS_Prototype_Chain.svg/960px-JS_Prototype_Chain.svg.png)<!-- .element: class="img-fit-m" -->
Например, при обращении: 

rabbit.toString();

метод toString() не находится непосредственно в rabbit.

JavaScript продолжает поиск по цепочке прототипов и находит его в Object.prototype.

---
### Собственные свойства и свойства прототипа
Свойство может принадлежать самому объекту или быть получено через прототип.


```javascript
const animal = {
    eats: true
};

const rabbit = {
    jumps: true
};

Object.setPrototypeOf(rabbit, animal);

console.log(rabbit.jumps); // true
console.log(rabbit.eats);  // true
```

При этом:

```javascript
Object.hasOwn(rabbit, "jumps"); // true
Object.hasOwn(rabbit, "eats");  // false
```

Object.hasOwn() проверяет только собственные свойства объекта.
---
### Изменение свойства
Если изменить свойство через объект:
```javascript
rabbit.eats = false;
```
новое значение записывается непосредственно в rabbit.
```javascript
console.log(rabbit.eats); // false
console.log(animal.eats); // true
```
Прототип при этом не изменяется:
```javascript
console.log(rabbit.eats); // false
console.log(animal.eats); // true
```
Если собственного свойства нет, значение снова будет найдено в прототипе:
```javascript
delete rabbit.eats;

console.log(rabbit.eats); // true
```
---
### `for...in` и собственные свойства

for...in перечисляет перечисляемые свойства, включая свойства, полученные через цепочку прототипов.

```javascript
const animal = {
    eats: true
};

const rabbit = {
    jumps: true
};

Object.setPrototypeOf(rabbit, animal);

for (const key in rabbit) {
    console.log(key);
}
```
Результат может включать:
```javascript
jumps
eats
```

---
### `for...in` и собственные свойства
Если нужно работать только с собственными свойствами, можно использовать:

```javascript
for (const key in rabbit) {
    if (Object.hasOwn(rabbit, key)) {
        console.log(key);
    }
}
```
Для перебора элементов массивов при этом обычно используют for...of или методы массивов.
---
### Свойство prototype у конструктора

У функций, которые используются как конструкторы, есть специальное свойство prototype.

```javascript
function User(name) {
    this.name = name;
}

User.prototype.sayHi = function() {
    console.log("Привет, " + this.name);
};

const ivan = new User("Иван");
const petr = new User("Пётр");

ivan.sayHi(); // Привет, Иван
petr.sayHi(); // Привет, Пётр
```

- Метод sayHi не создаётся заново для каждого объекта.
Оба объекта используют один метод из: User.prototype
- Это позволяет эффективно хранить общие методы объектов.
---
### Наследование методов

Методы удобно размещать в прототипе:

```javascript
function Animal(name) {
    this.name = name;
    this.speed = 0;
}

Animal.prototype.stop = function() {
    this.speed = 0;
};

Animal.prototype.run = function(speed) {
    this.speed += speed;
};
```

Другой конструктор может наследовать прототип:

```javascript
function Rabbit(name) {
    this.name = name;
    this.speed = 0;
}

Rabbit.prototype = Object.create(
    Animal.prototype
);

Rabbit.prototype.constructor = Rabbit;
```

После этого Rabbit получает доступ к методам `Animal`.

---
### Переопределение методов
Метод родителя можно переопределить:

```javascript
Rabbit.prototype.run = function(speed) {
    this.speed++;
    this.jump();
};
```

При необходимости можно вызвать реализацию родителя:

```javascript
Rabbit.prototype.run = function() {
    Animal.prototype.run.apply(this, arguments);
    this.jump();
};
```
---
### Классы: class
В современном JavaScript для создания объектов с общими методами обычно используют class

```javascript
class User {    
    constructor(name) { this.name = name;}    
    sayHi() { alert("Привет, " + this.name);}
}
let ivan = new User("Иван");
ivan.sayHi(); // Привет, Иван
```

Методы класса при этом всё равно связаны с прототипом:

```javascript
User.prototype.sayHi
```

То есть class не отменяет прототипы — он предоставляет более удобный синтаксис для работы с ними.

---
### Наследование с extends

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }

    run() {
        console.log(this.name + " бежит");
    }
}

class Rabbit extends Animal {
    jump() {
        console.log(this.name + " прыгает");
    }
}

const rabbit = new Rabbit("Кролик");

rabbit.run();  // Кролик бежит
rabbit.jump(); // Кролик прыгает
```
Rabbit наследует методы класса Animal и может добавлять собственные.

---
### Вызов конструктора родителя: super
Если в классе-наследнике есть собственный конструктор, для инициализации родительской части объекта используется super().

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log(this.name + " бежит");
    }
}

class Rabbit extends Animal {
    constructor(name, earLength) {
        super(name);
        this.earLength = earLength;
    }
    jump() {
        console.log(this.name + " прыгает");
    }
}

const rabbit = new Rabbit("Кролик", 10);
console.log(rabbit.name);      // Кролик
console.log(rabbit.earLength); // 10
```

---
### Вызов конструктора родителя: super
В конструкторе производного класса нельзя использовать this до вызова super():


```javascript
class Rabbit extends Animal {
    constructor(name) {
        super(name);

        this.type = "rabbit";
    }
}
```
---
### Вызов метода родителя: super
super используется не только для конструктора.

С его помощью можно вызвать метод родительского класса.
```javascript
class Animal {
    run() {
        console.log("Животное бежит");
    }
}
class Rabbit extends Animal {
    run() {
        super.run();
        console.log("Кролик прыгает на ходу");
    }
}
const rabbit = new Rabbit();
rabbit.run();
```
Результат:
```javascript
Животное бежит
Кролик прыгает на ходу
```
Таким образом, наследник может переопределить метод родителя и при необходимости использовать его реализацию.


---
### Проверка типа: instanceof
Оператор instanceof позволяет проверить, находится ли прототип конструктора в цепочке прототипов объекта.

```javascript
class Animal {}

class Rabbit extends Animal {}

const rabbit = new Rabbit();

console.log(rabbit instanceof Rabbit); // true
console.log(rabbit instanceof Animal); // true
console.log(rabbit instanceof Object); // true

```
Поскольку Rabbit наследуется от Animal, объект rabbit является экземпляром обоих классов.

---
### Порядок инициализации программы
Упрощённо выполнение JavaScript можно разделить на подготовку окружения и непосредственное выполнение кода.
При подготовке учитываются объявления функций и переменных.
Например:

```javascript
alert("a" in window); // true
alert(a);             // undefined
alert(f);             // функция

var a = 5;

function f() {
    // ...
}

var g = function() {
    // ...
};
```

Для `var` само объявление существует раньше присваивания значения.
Function Declaration также доступна до строки, на которой она написана.

---
### Замыкания
Замыкание возникает, когда функция сохраняет доступ к переменным внешней области видимости даже после завершения внешней функции.
Пример:

```javascript
function makeCounter() {
    let currentCount = 1;

    return function() {
        return currentCount++;
    };
}

let counter = makeCounter();

alert(counter()); // 1
alert(counter()); // 2
alert(counter()); // 3
```

Переменная `currentCount` продолжает существовать, потому что внутренняя функция сохраняет ссылку на неё.

---
### Замыкания
Можно создать независимый счётчик:

```javascript
let counter2 = makeCounter();

alert(counter2()); // 1
```

`counter` и `counter2` имеют разные замыкания.

---
### Лексическое окружение
Для каждой выполняющейся функции существует внутреннее лексическое окружение.
При поиске переменной JavaScript:
1. сначала ищет её в текущем окружении;
2. если не находит — переходит во внешнее окружение;
3. продолжает поиск по цепочке внешних окружений.

Именно этот механизм лежит в основе замыканий.

---

### Собственные свойства функции
Функция является объектом и может иметь собственные свойства:

```javascript
function makeCounter() {
    function counter() {
        return counter.currentCount++;
    }

    counter.currentCount = 1;

    return counter;
}

let counter = makeCounter();

counter(); // 1
counter(); // 2

counter.currentCount = 5;

counter(); // 5
```

То есть функция может одновременно:

- выполняться как функция;
- хранить собственные свойства.

---
### Модули и изоляция
Один из старых способов скрыть переменные от глобальной области — немедленно вызываемая функция:

```javascript
(function() {
    let message = "Привет";

    function showMessage() {
        alert(message);
    }

    showMessage();
})();
```

Скобки превращают объявление в функциональное выражение, а локальные переменные не попадают в глобальную область.
Исторически таким способом создавали простейшие модули.
Современный JavaScript использует встроенные **ES-модули** (`import` / `export`).

---
### ES-модули: export
Модуль — отдельный файл со своим пространством имён.

Файл user.js:

```javascript
export let name = "Маша";
export function sayHi() {
    console.log("Привет!");
}
```

Экспорт «по умолчанию» (не более одного на файл):
```javascript
export default class User { /* ... */ }
```
---
### ES-модули: import
Файл main.js:

```javascript
import User from "./user.js";            // default-экспорт
import { name, sayHi } from "./user.js"; // именованные экспорты
```

На страницу модуль подключается так:
```html
<script type="module" src="main.js"></script>
```
---
### Что даёт type="module"
- скрипт выполняется после разбора HTML (как defer);
- каждый модуль — изолированное пространство имён, глобальная область не «засоряется»;
- всегда включён строгий режим;
- наружу виден только явно экспортированный код.



---
### Canvas

`<canvas>` — HTML-элемент, позволяющий рисовать средствами JavaScript.

Пример:

```html
<canvas width="480" height="320" id="example">
    Обновите браузер
</canvas>
```

Получение контекста:

```javascript
let example = document.getElementById("example");
let ctx = example.getContext("2d");
ctx.fillRect(0, 0, example.width, example.height);
```

---

<!-- .slide: class="code-sm" -->

### Рисование в Canvas
Прямоугольники:

```javascript
strokeRect(x, y, width, height)
fillRect(x, y, width, height)
clearRect(x, y, width, height)
```
Линии:

```javascript
moveTo(x, y)
lineTo(x, y)
```

Дуги:

```javascript
arc(
    x,
    y,
    radius,
    startAngle,
    endAngle,
    anticlockwise
)
```

Для сложных кривых используются:

```javascript
quadraticCurveTo(...)
bezierCurveTo(...)
```

---
### JSON

**JSON (JavaScript Object Notation)** — текстовый формат обмена данными.

Пример:

```json
{
    "name": "Вася",
    "age": 25,
    "roles": {
        "isAdmin": false,
        "isEditor": true
    }
}
```

JSON может содержать:

- объекты `{ ... }`;
- массивы `[ ... ]`;
- строки;
- числа;
- `true` / `false`;
- `null`.

---
### `JSON.parse()`
Преобразует JSON-строку в JavaScript-значение:

```javascript
let text = '{"name":"Вася","age":25}';

let user = JSON.parse(text);

console.log(user.name);
```

###  `JSON.stringify()`
Преобразует JavaScript-объект в JSON-строку:

```javascript
let user = {
    name: "Вася",
    age: 25
};

let text = JSON.stringify(user);
```

---
### Запросы: `fetch()`

`fetch()` — API для выполнения HTTP-запросов.
Он встроен в современные браузеры и доступен в современных версиях Node.js.:

```javascript
fetch("/api/city")
    .then(response => {
        if (!response.ok) { throw new Error(`HTTP error: ${response.status}`); }
        return response.json();
    })
    .then(cities => console.log(cities))
    .catch(error => console.error(error));
```

- Возвращает Promise, который разрешается в объект `Response`;
- `.json()` читает тело ответа как JSON (тоже возвращает Promise);
- на HTTP-ошибке (404, 500) Promise **не** отклоняется — проверяйте `response.ok`.

---
### Запросы: `fetch()`
Или по другому:
```javascript
async function loadCities() {
    const response = await fetch("/api/city");

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }

    return await response.json();
}
```
Запрос с телом:

```javascript
fetch("/api/city", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({name: "Кстово"})
});
```

---
### `fetch()` и Promise.all()
Дожидаемся выполнения сразу нескольких запросов асинхронно

```javascript
const [users, cities] = await Promise.all([
    fetch("/api/users").then(r => r.json()),
    fetch("/api/cities").then(r => r.json())
]);
```


---
### Материалы

- [learn.javascript.ru](https://learn.javascript.ru) — подробный учебник по JavaScript
- [MDN — JavaScript](https://developer.mozilla.org/ru/docs/Web/JavaScript) — документация и справочник
- [ECMAScript Language Specification](https://tc39.es/ecma262/) — официальная спецификация JavaScript
- [Can I use](https://caniuse.com/) — проверка поддержки возможностей JavaScript в браузерах


