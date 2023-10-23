# Node JS
---
### Стек технологий
![Web stack](../img/webstack.png)
---
### Технологии для разработки серверной части
 - CGI
 - PHP, JSP, ASP (ASP.NET)
 - Java (Сервера приложений (JacartaEE), Spring, …) 
 - Python
 - …. (Ruby, Perl, Go, C#,…)
 - JavaScript (Node.js)
---
### 
 - Почему JavaScript?
     - Один язык разработки для клиентской и серверной части
 - Почему Node.js?
    - Удачная, зарекомендовавшая себя реализация
    - Большое сообщество
    - Разнообразные готовые модули (библиотеки)
    - Прост в установке и использовании
---
### Node JS
 - Node.js был создан Райаном Далем (2009 г)
 - Использует в качестве «движка» Google's V8 JavaScript Engine (тот же самый используется в Chrome)
 - Представляет собой _всего лишь_ средство для исполнения кода JavaScript на сервере и набор библиотек
 - При использовании базовых библиотек предоставляет механизмы для создания _событийно-управляемых приложений_
---
### Node JS
 - С точки зрения системного администратора сервер Node.JS представляет собой обычное приложение, запускаемое из командной строки
 - Свободно распространяемое (лицензия MIT)
 - Поставляется в виде исходного кода или готовых дистрибутивов
 - Доступно под актуальными ОС (Linux, Windows)
 - В комплекте поставки содержит пакеты для работы с популярными сетевыми протоколами и доступа к файловой системе
---
### Node JS
 - Отличие от JavaScript в браузере
 - НЕТ:
     - Пользовательского интерфейса (работает в командной строке)
     - и других возможностей взаимодействия с браузером (например DOM, BOM)
 - ЕСТЬ
    - Библиотеки, расширяющие «песочницу» – сетевой и файловый ввод/вывод и т.д.
---
### Node JS
 - Основное архитектурное отличие от привычных серверов приложений – отсутствие явно выделенных потоков управления
 - Программа представлена как набор функций, запускаемых как реакция на некоторое событие
 - Неблокирующие вызовы реализованы через механизм «обратных вызовов» (callback)
 - Как следствие, при грамотном проектировании – отличная производительность
---
### Node JS
|Использование потоков управления|Асинхронная обработка событий|
|--------------------------------|-----------------------------|
|Несколько потоков, параллельно обрабатывающих запросы|Только один поток, который обрабатывает события, извлекаемые из очереди сообщений|
|Модель запрос - ответ|Использование очереди сообщений и их последовательная обработка|
|Многопоточный сервер может блокировать запрос, который может включать несколько событий|Ручная запись состояния и переход к обработке следующего события|
|Используется переключение контекста (потоков)|Нет переключений контекста|
|Использование многопоточного окружения, где слушатели и обработчики событий должны осуществлять грамотную синхронизацию своих потоков|Использование асинхронного I/O (с обратными вызовами - callback)|
---
### Node JS
 - Почему используется такая модель?
    - В обычном технологическом цикле веб-сервер при обработке запроса должен будет ждать операций ввода-вывода и, таким образом, блокировать следующий запрос, который будет обработан.
    - Node.JS обрабатывает каждый запрос как событие, сервер не дожидается завершения операции ввода-вывода, и может обрабатывать другой запрос одновременно.
    - Когда операция ввода-вывода первого запроса будет завершена, будет вызвана callback- функция сервера для завершения запроса.

---
### Node JS
 - Использование событийно-управляемой модели непривычно и требует аккуратности (как впрочем и механизмы синхронизации при использовании многопоточности)
 - При грамотном использовании позволяет добиться высокой производительности
     - Тесты сравнения производительности vs Java vs PHP показывают разные результаты, в зависимости от задачи, которая используется в качестве теста
 - Основная мысль: Node хорошо работает там, где много задач ввода\вывода и плохо работает на чисто вычислительных задачах
---
### Пример 1. Демонстрация
![NodeJs](https://static.wixstatic.com/media/1af9b8_a386867fa0784bf7b3f4ac93a7366e3e~mv2.png/v1/fill/w_925,h_694,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/1af9b8_a386867fa0784bf7b3f4ac93a7366e3e~mv2.png)<!-- .element: width="70%"  -->

https://static.wixstatic.com/media/1af9b8_a386867fa0784bf7b3f4ac93a7366e3e~mv2.png/v1/fill/w_925,h_694,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/1af9b8_a386867fa0784bf7b3f4ac93a7366e3e~mv2.png<!-- .element: class="copyright-reference"  -->
---
### Очередь сообщений (Event loop)
 - Это цикл (libuv, быстрая, реализована на С)
 - Это один процесс, один поток
 - Выполняет одну задачу на один момент времени
 - Ожидает события параллельно (libeio)
 - В каждой итерации последовательно запускает функции-колбэки из трех разных очередей
     - nextTick функции
     - Таймеры (setTimeout, setInterval)
     - Сигналы ввода-вывода
- Если все очереди пусты – завершает работу
---
### Установка
 - https://nodejs.org/en/download/
 - Для Windows
     - Инсталлятор прописывает путь до исполняемых файлов в переменную PATH
     - В инсталляционной директории два «главных» файла node.exe и npm.exe
---
### node
 - Node – сам «сервер». Может работать в двух режимах
     - При запуске без аргументов позволяет ввести с консоли и выполнить любой код
     ![cmd1](../img/node-cmd1.png)
     - Или запустить любой скрипт:
     ![cmd1](../img/node-cmd2.png)
---
### npm
 - Npm – менеджер пакетов
 - База модулей – http://nmpjs.org (.com)
 - npm s <имя модуля> - поиск модуля по имени
 - npm i <имя модуля> - установить модуль
    - Установка осуществляется в директорию node_modules проекта
 - npm up <имя модуля> - обновить модуль
 - npm  r <имя модуля> - удалить (деинсталлировать) модуль
 - Можно создавать свои собственные модули и публиковать их в репозитории
---
### Модули в node.js
 - Подключение внешнего кода
     - Браузер: тег \<script\>
     - Node.js: функция require
 - В node.js каждый модуль (файл) образует собственное пространство имен. Необходимые элементы модуля должны быть явным образом экспортированы с помощью специального объекта exports
 - Объект global позволяет создавать глобальные переменные (аналог объекта window в браузере)
---
### Модули в node.js (создание модуля)
```js
function User(name){
    this.name=name;
}
User.prototype.hello = function(who){
    console.log("Hello "+who.name);
}
exports.User = User;
console.log("User module loaded");
```
---
### Модули в node.js (использование модуля) 
```js
const user = require("./User");
let v = new user.User("Вася");
let p = new user.User("Петя");

v.hello(p);
```
---
### Модули в node.js (JSON модули) 
```js
//Файл test.json
{
  "Hello":"привет",
  "test":"Тест"
}

//Файл server.js
const test = require("./test");
console.log(test.Hello);
```
---
### Часто используемые модули. util
 - Util.inspect – вывод объекта в консоль (аналог toString в Java)
 - Util.format – аналог printf (форматный вывод)
 - Util.inherits – устанавливает отношение «наследования» между объектами JavaScript
---
### Часто используемые модули. concole
 - Глобальная (!!!) переменная
 - Console.log выводит в stdout
 - Console.error выводи в stderr
 - Console.trace выводит stacktrace в поток ошибок
---
### Часто используемые модули. events
Объект EventEmitter позволяет:
 - Определять обработчики (функции) для событий
    - Для каждого события может быть определено несколько обработчиков
    - Обработчики выполняются в порядке их определения
 - Генерировать события
 - Для каждого события можно получить список его обработчиков
 - Событие error генерирует исключение (если для него не определен обработчик)
---
### Часто используемые модули. events
```js
const EE =require("events").EventEmitter;
const server = new EE();

server.on('request', function(request){
    request.approved = true;
});

server.on('request', function(request){
    console.log(request);
});

server.emit('request',{from:'client1'});
server.emit('request',{from:'client2'});
```
---
### Часто используемые модули. http
Позволяет
 - Организовать HTTP сервер
     - Связать его с нужным портом (и интерфейсом)
     - Определить обработчики для событий (например, событие request)
     - Получать в обработчиках объект - запрос клиента и объект, для формирования ответа сервера
 - Выполнить HTTP – запрос
     - И обработать ответ 
---
### Часто используемые модули. http
 ```js
const http = require("http");

const server = new http.Server();

server.listen(4848, "localhost");

server.on('request',function(req,res){
    res.end("Hello world ");
});
```
---
### Часто используемые модули. http (клиент)
 ```js
http.get('http://www.unn.ru', function(response) {
    //console.log('1');
    let body = '';
    response.on('data', function(d) {
        body += d;
        //console.log('2');
    });
    response.on('end', function() {
        //console.log('3');
        console.log(body);
    });
});
```
---
### Часто используемые модули. url
 URL позволяет
 - Сформировать URL из отдельных элементов (протокол, адрес, порт и т.д.)
 - Извлечь из строки URL отдельные элементы:
     - url.parse(<строка URL>, [сформировать объект])
     - http://localhost:4848/echo?message=Hello


     ДОПИСАТЬ!!!!!
---
### Часто используемые модули. url
```js 
const http = require("http");
const url = require("url");
const server = new http.Server();
server.listen(4848, "localhost");

server.on('request',function(req,res){
    let urlParsed = url.parse(req.url, true);
    console.log(req.method+" "+req.url);
    console.log(urlParsed);
    if (urlParsed.pathname == "/echo" &&  urlParsed.query.message){
        res.end(urlParsed.query.message);
    }else{
        res.status = 404;
        res.end("Page not found");
    };
});
```
---
### Часто используемые модули. fs
fs позволяет
 - Выполнять операции с элементами файловой системы
     - Читать данные из файлов
     - Создавать файлы
     - Записывать данные в файлы
     - Удалять файлы
    - Переименовывать файлы
 - Операции с файлами могут быть
     - Синхронными
     - Асинхронными 
---
### Часто используемые модули. fs
 ```js 
const http = require("http");
const url = require("url");
const fs = require("fs");
const server = new http.Server();
server.listen(4848, "localhost");
server.on('request',function(req,res){
    let urlParsed = url.parse(req.url, true);
    console.log(urlParsed);
    let data;
    if (req.url == "/") {
        data = fs.readFileSync("index.html");
        res.end(data);
    }else{
        try {
            data = fs.readFileSync("." + urlParsed.path);
            res.end(data);
        }catch(error){
            res.status = 404;
            res.end("Page not found");
        }
    }
});
```
---
### Часто используемые модули. fs
 ```js 
const http = require("http");
const url = require("url");
const fs = require("fs");
const server = new http.Server();
server.listen(4848, "localhost");
server.on('request',function(req,res){
    const readFile = function (err, info) {
        if (err) {
            res.status = 404;
            res.end("Page not found");
        } else
            res.end(info);
    };
    let urlParsed = url.parse(req.url, true);
    let data;
    if (req.url == "/") {
        data = fs.readFile("index.html", readFile);
    }else{
        data = fs.readFile("." + urlParsed.path, readFile);
    }
});
```
---
### Часто используемые модули. Express
 - Модуль Express не является “стандартным”
     - Требует установки (npm install express --save)
 - Обладает богатой функциональностью (всю рассматривать не будем), в частности
     - Позволяет определить обработчики для url, body (автоматическое преобразование в объекты JS)
     - Позволяет определить автоматическую обработку для статических элементов (файлы html, css, изображения, …)
     - Позволяет определить протоколы и обработчики для доступа к различным ресурсам
     - И многое, многое другое…
---
### Часто используемые модули. Express
```js 
const express = require("express");
//подключили модуль
const app = express();
//инициализировали

app.listen(3000);
//связали с портом и запустили сервер
```
---
### Часто используемые модули. Express
 - Маршрутизация
 - Для определения ресурсов и методов для доступа к ним используется следующий механизм:
 ```js 
 app.METHOD(ENDPOINT, HANDLER)
 ```
     - Где METHOD определяет протокол доступа (get, put, delete, post, all)
     - ENDPOINT определяет имя ресурса. Может быть задан в виде регулярного выражения (app.get('/ab*cd', …..);)
     - HANDLER – функция для обработки ресурса. Принимает request и response
---
### Часто используемые модули. Express
```js 
var express = require("express");
var app = express();
app.get("/",function(req,res){
    res.send("Hello world");

});
app.all("/a*a", function(req,res){
    res.send("hello from a");
})
app.listen(3000);
```
---
### Часто используемые модули. Express
 - Может быть определено несколько обработчиков. Обработчики могут передавать управление следующему в цепочке 
```js 
errorHandler = function(req,res){res.send("error");}
app.get("/error", function(req,res, next) {
    if (1) next();
}, errorHandler);
```
---
### Часто используемые модули. Express
Методы объекта response

ДОПИСАТЬ!!!! 
---
### Часто используемые модули. Express
 - Работа со статическим содержимым
```js 
app.use(express.static('public'));
```
В данном случае считается, что статическое содержимое находится в директории public, которая находится в корне проекта
---
### Часто используемые модули. Express
 - Автоматический разбор тела (body) и запроса для основных методов HTTP
```js 
const bodyParser =require('body-parser');
app.use(bodyParser.urlencoded(
                                { extended: true }
                            )
        );
app.use(bodyParser.json());
``` 
 - Обращение к параметрам, переданным в запросе: req.params.<param_name>
 - Обращение к параметрам, переданным в теле: req.body. <param_name>
---
### Пример
```js 
const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get("/city/:countrycode",function(req,res){
    console.log(req.params.countrycode);
});
app.listen(3000);
``` 
---
### Шаблонизаторы в Express
 - Задача «вставки» динамического содержимого в заранее подготовленный html-документ является типичной (вспоминаем jsp, asp,…)
 - Express поддерживает подключение внешних «движков» шаблонов, обладающих разным синтаксисом и функциональностью.
 - Часто используемые шаблонизаторы:
     - handlebars
     - pug
     - mustache
     - ejs
     - …
---
### Установка шаблонизатора в Express
 - Установка движка
```bash 
npm install --save <имя_движка_в репозитории_npm>
```
 - Регистрация в Express
    - регистрация директории, в которой будут лежать шаблоны:
```js 
app.set('views','./vievs');
``` 
     - регистрация движка
```js 
app.set('view engine','имя движка');
```  
 - Передача параметров движку
```js 
response.render('имя шаблона',<объект с параметрами>);
```  
---
### Шаблонизатор EJS
 - Для подстановки использует выражения javascript, определяемые с помощью тега <% выражение %> (ничего не напоминает?)
 - Примеры выражений:
```js  
<%=title %>
<%=user.name %>
<% for (var i = 0; i < emails.length; i++){ %>
        ....
<%}
%>
```  
---
### EJS. Пример. Сервер
```js  
const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use('/', function (request, response) {
    response.render('index', {
        title: 'Мои контакты',
        emailsVisible: true,
        emails: ['test@test.com', 'test@corp.com', 'yuiyuiyuiyuiyiyiuyui'],
        phone: '+1234567890',
    })
})
app.listen(3000)
```        
---
### EJS. Пример. Шаблон
```html  
...
<h1><%=title %> в EJS</h1>
<% if(emailsVisible) {%>
<h3>Адреса электронной почты</h3>
<table>
    <thead>
    <th>#</th> <th>email</th>
    </thead>
    <tbody>
    <% for(let i=0; i<emails.length;i++) {%>
    <tr>
        <td><%=i %></td> <td><%=emails[i] %></td>
    </tr>
    <%} %>
    </tbody>
</table>
<% }else {%>
<h3>Электронный адрес отсутствует</h3>
<%} %>
<p>Телефон: <%=phone %></p>
</body>
<html>
```  
---
### Часто используемые модули. Работа с СУБД
 - Существуют разные типы СУБД
     - Реляционные (Oracle, MSSQLServer, DB2, PostgreSQL, MySQL, …)
     - NoSQL
         - Key-value (Berkeley DB, MemcacheDB, Redis, Riak, Amazon DynamoDB, …)
         - «Документо-ориентированные» (CouchDB, MongoDB, eXist, Berkeley DB XML, …)
     - Иерархические (Caché, …)
     - «Графовые»/сетевые (Neo4j, …)
     - …..
---
### Часто используемые модули. Работа с СУБД
 - Существуют различные модели работы с СУБД (на примере реляционных)
     - Прямой доступ
 ```sql  
 Select * from person
 insert into person() values()
 delete from person where…
 update person set … where …
 ```  
     - При таком доступе работа с данными осуществляется посредством встроенного языка обработки данных СУБД (SQL для реляционных систем)
---
#### Часто используемые модули. Работа с СУБД (ORM-1)
 - Доступ черер ORM-драйвер
```js  
 let Person = db.define('person', {
    name: String,   surname: String,
    age: Number,    male: Boolean,
    data: Object 
 }
 app.use(orm.express("mysql://username:password@host/database", {
    define: function(db, models){
        models.person = Person;
    }
 }))
 );
 Person.find({surname: 'Doe'}, function (err, people){
    //SQL: select * from person where surname = 'Doe'
    console.log(`People found: ${people.length}`);
    console.log(`First person: ${people[0].name}, age ${people[0].age}`);
 });
```  
---
#### Часто используемые модули. Работа с СУБД (ORM-2)
 - Доступ через «ORM» «драйвер»
     - При этом подходе тем или иным образом определяется «модель» (класс сущности) и далее работа в приложении осуществляется с экземплярами классов сущностей, при этом работа по сохранению данных (а также чтению, изменению, удалению) ложится на ORM-систему
     - Каждый из подходов имеет как свои плюсы, так и минусы.
---
#### Работа с СУБД (MySQL, без ORM)
 - Установка модуля Node.js для работы с СУБД MySQL:
```bash  
npm install mysql –save
``` 
 - Подключение в проекте:
```js  
const db = require("mysql");
``` 
- Основные методы:
     - createConnection – определение нового подключения к СУБД
     - connection.connect – собственно, подключение
     - connection.query  - выполнение запроса
---
#### Работа с СУБД (MySQL, без ORM)
```js  
const db = require("mysql");
const connection = db.createConnection({
    host:"localhost",
    user:"alex",
    password:"Qwerty123",
    database:"world"
});

connection.connect(function(err){
    if (err) {
        console.log(err);
        return;
    }
    console.log("connection established");
})
``` 
---
#### Работа с СУБД (MySQL, без ORM)
```js  
connection.query("select * from city", function(err, rows){
    if (err){
        console.log(err);
        return;
    }
    //console.log(rows);
    console.log(JSON.stringify(rows));
});
connection.query("update city set name=?, CountryCode=? where id=?", 
    ["Кстово", "RUS", "100015"],
    function(err, rows){
        if (err){
            console.log(err);
            return;
        }
    }
);
``` 
---
#### Пример 
 - Создадим приложение, позволяющее просматривать список стран и городов для них
 - Добавим возможность редактирования параметров города
 - Постараемся выполнить наше приложение в форме Single Page Application, SPA
 - Мы будем использовать AJAX для загрузки нужных данных на клиента
---
#### SPA vs MPA
![SPAvsMPA](https://learn.microsoft.com/en-us/archive/msdn-magazine/2013/november/images/dn463786.wasson_figure2_hires(en-us,msdn.10).png)<!-- .element: width="45%"  -->

https://learn.microsoft.com/en-us/archive/msdn-magazine/2013/november/images/dn463786.wasson_figure2_hires(en-us,msdn.10).png<!-- .element: class="copyright-reference"  -->
---
#### AJAX
 - AJAX (Asynchronous Javascript and XML) — подход к построению интерактивных пользовательских интерфейсов веб-приложений, заключающийся в «фоновом» обмене данными браузера с веб-сервером. В результате, при обновлении данных веб-страница не перезагружается полностью, и веб-приложения становятся быстрее и удобнее.

https://ru.wikipedia.org/wiki/AJAX <!-- .element: class="copyright-reference"  -->
---
#### AJAX
* SPA, как  подход к построению приложения перекликается с моделью AJAX
* При использовании AJAX необходимо иметь специальные имена ресурсов на сервере, при доступе к которым возвращаются необходимые данные

![AJAX](https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Ajax-model-ru.svg/750px-Ajax-model-ru.svg.png)<!-- .element: width="50%"  -->
     

https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Ajax-model-ru.svg/750px-Ajax-model-ru.svg.png<!-- .element: class="copyright-reference"  -->
---