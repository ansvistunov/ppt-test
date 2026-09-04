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

JavaScript применяется не только в браузере:

- в клиентской части Web-приложений;
- в серверных приложениях;
- для прикладного ПО;
- в офисных приложениях;
- в других средах выполнения.

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
Самый простой вариант — разместить JavaScript непосредственно внутри HTML:

```html
<script>
    alert('Hello, World!');
</script>
```

На странице может быть несколько элементов `<script>`.
Атрибут `type` для обычного JavaScript сегодня не требуется:

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

Это позволяет хранить HTML и JavaScript отдельно и повторно использовать один скрипт на разных страницах.

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
- отложенные скрипты выполняются после разбора документа;
- порядок выполнения нескольких `defer`-скриптов сохраняется.

---
### Переменные
Современный JavaScript использует `let` и `const`:

```javascript
let cnt = 25;
const msg = 'Привет Мир!!!';

let value;
```

JavaScript является динамически типизированным языком: значение переменной может иметь один тип, а затем другой.

```javascript
let cnt = 25;

cnt = 'hello world!!!';
```

---
### Условия
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

---
### Циклы. while

```javascript
let i = 0;

while (i < 3) {
    alert(i);
    i++;
}
```

---
### `do...while`

Тело выполняется хотя бы один раз:

```javascript
let i = 0;

do {
    alert(i);
    i++;
} while (i < 3);
```

---
### `for`

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
###  `break` и `continue`
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
### Метки
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
### `switch`
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
### `typeof`
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
###  Объявление через `var`

В старом коде часто встречается `var`:

```javascript
var cnt = 10;
```

Главное отличие от `let` — область видимости.
`var` имеет **функциональную область видимости**, а `let` — **блочную**.

```javascript
if (true) {
    var test = 'Привет';
}

alert(test); // Привет
```
---
###  Объявление через `let`

А с `let`:

```javascript
if (true) {
    let test = 'Привет';
}

alert(test); // ошибка
```
Поэтому в новом коде обычно используют `let` и `const`, а `var` необходимо знать прежде всего для понимания старого JavaScript и особенностей области видимости.

---
### Поднятие объявлений

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

### Встроенные типы

К основным типам JavaScript относятся:

- `Number` — числа;
- `String` — строки;
- `Boolean` — логические значения;
- `Null`;
- `Undefined`;
- `Object`.

Также существуют встроенные объекты, например:

- `Date`;
- `Array`;
- `Function`.

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
isNaN(3.14 / 0); // false
isNaN(0 / 0);    // true
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
### Операторы

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
### Операторы
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

`alert()`

Показывает сообщение:

```javascript
alert("Привет!");
```

`confirm()`

Показывает вопрос с кнопками OK/Cancel и возвращает `true` или `false`:

```javascript
let result = confirm("Вы согласны?");

if (result) {
    alert("Вы согласились");
}
```

---
### Простое взаимодействие с пользователем
`prompt()`

Запрашивает ввод пользователя:

```javascript
let name = prompt("Как вас зовут?");

alert("Привет, " + name);
```

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
### Область видимости
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
### Функция как объект
С функцией можно работать как со значением:

```javascript
function hello() {
    alert("Привет");
}

let f = hello;

f();
```

Функции можно передавать в другие функции и хранить в переменных.

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
function() {
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
```

---
### Создание функции через `Function`
Функцию можно создать динамически:

```javascript
let sum = new Function(
    "a,b",
    "return a+b;"
);

let result = sum(1, 2);
```

Такой способ встречается значительно реже обычных объявлений функций.


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

JavaScript в браузере использует событийную модель.

---
### Обработчики событий. HTML-атрибут

```html
<input
    type="button"
    value="Нажми меня"
    onclick="alert('Привет!')">
```

Можно вызвать отдельную функцию:

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

```javascript
button.onclick = function() {
    alert("Привет!");
};
```

Недостаток: через одно свойство `onclick` можно хранить только один обработчик.

---
<!-- .slide: class="code-sm" -->

###  Обработчики событий. addEventListener()
Предпочтительный универсальный способ:

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
function handler() {
    alert("Привет!");
}

element.addEventListener("click", handler);
element.removeEventListener("click", handler);
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

`event.target` — элемент, на котором произошло исходное событие.

`event.currentTarget` — элемент, чей обработчик сейчас выполняется.

---
### Всплытие и захват событий

Событие в DOM проходит несколько фаз:

1. **capture** — распространение сверху вниз;
2. **target** — достижение целевого элемента;
3. **bubble** — распространение обратно вверх.

![Фазы распространения DOM-события](https://www.w3.org/TR/2003/NOTE-DOM-Level-3-Events-20031107/images/eventflow.png)<!-- .element: class="img-fit-m" -->

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

Распространение события можно остановить:

```javascript
event.stopPropagation();
```

Если у элемента несколько обработчиков, `stopPropagation()` не отменяет выполнение остальных обработчиков этого же элемента.

Для немедленной остановки обработки используется:

```javascript
event.stopImmediatePropagation();
```

---
### Порядок обработки событий

JavaScript в браузере выполняет обычный код последовательно.
Если обработка события занимает много времени, интерфейс может перестать реагировать.
Упрощённо можно представить работу браузера так:
- выполняется текущий JavaScript;
- события и другие асинхронные операции ожидают своей очереди;
- когда основной поток освобождается, браузер выполняет ожидающий обработчик.

---
### Порядок обработки событий
![JavaScript Event Loop](https://upload.wikimedia.org/wikipedia/commons/8/83/JavaScript_Event_Loop.png)<!-- .element: class="img-fit-m" -->

Это связано с понятием **event loop** — цикла обработки событий.

---
### Синхронные и отложенные действия
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

`setTimeout()` позволяет запланировать функцию:

```javascript
setTimeout(function() {
    text.focus();
}, 0);
```

Даже `setTimeout(..., 0)` не означает «выполнить прямо сейчас». Функция будет поставлена в очередь и выполнится после завершения текущего кода.

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

<!-- .slide: class="code-sm cols" -->

### DOM — Document Object Model

DOM — объектное представление HTML-документа.
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

представляется браузером как дерево узлов.

![Пример дерева DOM](https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/DOM_tree.svg/960px-DOM_tree.svg.png)<!-- .element: class="img-fit-m" -->

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

![Навигация по дереву DOM](https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/960px-DOM-model.svg.png)<!-- .element: class="img-fit-s" -->

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
### BOM — Browser Object Model
BOM предоставляет JavaScript доступ к возможностям браузера.
Главный объект:

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
    await loadScript("script.js");

    testFunction();
}
```

`await` можно использовать внутри `async`-функции.

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

---
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
В некоторых операциях объект преобразуется в примитив.
Это может происходить при:
- строковом преобразовании;
- числовых операциях;
- логических операциях.

В логическом контексте объекты являются истинными:

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

Для числового преобразования используется `valueOf()`, а при его отсутствии применяются дальнейшие правила преобразования, включая `toString()`.

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
Объекты JavaScript могут образовывать цепочки прототипов.
Если свойство не найдено непосредственно в объекте, JavaScript ищет его в прототипе.

```javascript
let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal;

alert(rabbit.jumps); // true
alert(rabbit.eats);  // true
```

---
### Прототипы
> ⚠️ `__proto__` — легаси-нетандарт; в новом коде используйте `Object.setPrototypeOf(rabbit, animal)`.

![Цепочка прототипов JavaScript](https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/JS_Prototype_Chain.svg/960px-JS_Prototype_Chain.svg.png)<!-- .element: class="img-fit-m" -->

---
### Прототипы
`rabbit` имеет собственное свойство `jumps`, а `eats` получает через прототип.

Запись свойства происходит непосредственно в объект:

```javascript
rabbit.eats = false;
```

Теперь:

```javascript
rabbit.eats; // false
```

---
### `for...in` и собственные свойства

При использовании `for...in` могут учитываться свойства, полученные через цепочку прототипов.

Проверить, принадлежит ли свойство самому объекту, можно через:

```javascript
obj.hasOwnProperty("name");
```

---
### Прототип конструктора

Для функции-конструктора используется свойство `prototype`:

```javascript
function Rabbit(name) {
    this.name = name;
}

let animal = {
    eats: true
};

Rabbit.prototype = animal;

let rabbit = new Rabbit("Кролик");

rabbit.eats; // true
```

Все экземпляры конструктора могут использовать методы, размещённые в его прототипе.

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

`fetch()` — встроенный в браузер способ выполнить HTTP-запрос (именно он используется в колоде Node):

```javascript
fetch("/api/city")
    .then(response => response.json())
    .then(cities => console.log(cities));
```

- Возвращает Promise, который разрешается в объект `Response`;
- `.json()` читает тело ответа как JSON (тоже возвращает Promise);
- на HTTP-ошибке (404, 500) Promise **не** отклоняется — проверяйте `response.ok`.

Запрос с телом:

```javascript
fetch("/api/city", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({name: "Кстово"})
});
```

---
### Что важно запомнить
JavaScript в браузере связывает три основных мира:

```text
HTML
  ↓
DOM ← JavaScript → BOM
```



### Материалы

- [learn.javascript.ru](https://learn.javascript.ru)
- [Coursera — HTML, CSS, JavaScript](https://www.coursera.org/learn/html-css-javascript/home/welcome)
- [MDN — JavaScript](https://developer.mozilla.org/ru/docs/Web/JavaScript)
- [JavaScript.com](https://www.javascript.com)
