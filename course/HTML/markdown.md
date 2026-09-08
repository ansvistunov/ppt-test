# HTML: язык гипертекстовой разметки
---
### Что такое HTML?

**HTML (HyperText Markup Language)** — язык разметки, используемый для описания структуры и содержания веб-страниц.

- HTML — **не язык программирования**.
- HTML описывает **структуру и смысл** содержимого, а не его визуальное оформление.
- Документ HTML имеет иерархическую структуру: элементы могут быть вложены друг в друга.
- Браузер разбирает HTML-документ и строит из него **DOM (Document Object Model)** — дерево элементов документа.
- В HTML используются **элементы**, которые обычно обозначаются тегами, и **атрибуты**, задающие дополнительные свойства элементов.
---
### Что такое HTML?

<div style="display: flex; gap: 20px; align-items: flex-start;">

<!-- Левая колонка: Код -->
<div style="flex: 1; text-align: left;">
Например, коду:

```html
<html>
  <head>
    <title>
      My first page
    </title>
  </head>
  <body>
    <p>
      Hello, World!
    </p>
  </body>
</html>
```

</div>

<!-- Правая колонка: SVG-диаграмма -->
<div style="flex: 1; text-align: center;">

соответствует примерно такая структура:

<svg width="350" height="255" viewBox="0 0 700 450">
  <ellipse cx="350" cy="50" rx="65" ry="30" fill="var(--r-link-color)" stroke="white" stroke-width="2"/>
  <text x="350" y="59" text-anchor="middle" font-family="monospace" font-size="24" fill="white">html</text>
  <ellipse cx="160" cy="150" rx="60" ry="30" fill="var(--r-link-color)" stroke="white"    stroke-width="2"/>
  <text x="160" y="159" text-anchor="middle" font-family="monospace" font-size="24" fill="white">head</text>
  <ellipse cx="540" cy="150" rx="60" ry="30" fill="var(--r-link-color)" stroke="white" stroke-width="2"/>
  <text x="540" y="159" text-anchor="middle" font-family="monospace" font-size="24" fill="white">body</text>
  <!-- title -->
  <ellipse cx="160" cy="250" rx="60" ry="30"
           fill="var(--r-link-color)"
           stroke="white"
           stroke-width="2"/>
  <text x="160" y="259"
        text-anchor="middle"
        font-family="monospace"
        font-size="24"
        fill="white">title</text>
  <!-- p -->
  <ellipse cx="540" cy="250" rx="60" ry="30"
           fill="var(--r-link-color)"
           stroke="white"
           stroke-width="2"/>
  <text x="540" y="259"
        text-anchor="middle"
        font-family="monospace"
        font-size="24"
        fill="white">p</text>
  <!-- arrows -->
  <line x1="300" y1="70" x2="205" y2="130"
        stroke="var(--r-main-color)" stroke-width="2"/>
  <polygon points="205,130 215,124 213,136"
           fill="white"/>
  <line x1="400" y1="70" x2="495" y2="130"
        stroke="var(--r-main-color)" stroke-width="2"/>
  <polygon points="495,130 487,124 487,136"
           fill="white"/>
  <line x1="160" y1="180" x2="160" y2="220"
        stroke="var(--r-main-color)" stroke-width="2"/>
  <polygon points="160,220 154,210 166,210"
           fill="white"/>
  <line x1="540" y1="180" x2="540" y2="220"
        stroke="var(--r-main-color)" stroke-width="2"/>
  <polygon points="540,220 534,210 546,210"
           fill="white"/>
  <!-- text boxes -->
  <rect x="40" y="330"
        width="240" height="55"
        fill="none"
        stroke="var(--r-main-color)"
        stroke-width="2"/>
  <text x="160" y="365"
        text-anchor="middle"
        font-family="monospace"
        font-size="22"
        fill="var(--r-main-color)">My first page</text>
  <rect x="420" y="330"
        width="240" height="55"
        fill="none"
        stroke="var(--r-main-color)"
        stroke-width="2"/>
  <text x="540" y="365"
        text-anchor="middle"
        font-family="monospace"
        font-size="22"
        fill="var(--r-main-color)">Hello, World!</text>
  <line x1="160" y1="280" x2="160" y2="330"
        stroke="var(--r-main-color)" stroke-width="2"/>
  <polygon points="160,330 154,320 166,320"
           fill="white"/>
  <line x1="540" y1="280" x2="540" y2="330"
        stroke="var(--r-main-color)" stroke-width="2"/>
  <polygon points="540,330 534,320 546,320"
           fill="white"/>
</svg>

</div>
</div>

> 💡 **Важно:** HTML задаёт структуру документа, CSS — его оформление, а JavaScript — поведение и интерактивность.
---
### Пример. Простейшая HTML-страница

<iframe data-src="../examples/HTML/01Simple.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>

---
### Как HTML используется в Web
Браузер получает HTML по HTTP/HTTPS и отображает его пользователю.
Упрощённая последовательность:
- Пользователь открывает URL.
- Браузер отправляет HTTP-запрос серверу.
- Сервер возвращает HTML-документ.
- Браузер разбирает HTML и строит DOM.
- Встречая ссылки на CSS, JavaScript, изображения и другие ресурсы, браузер при необходимости запрашивает их отдельно.
- Браузер формирует итоговое отображение страницы.




---
### Как HTML используется в Web
<div style="text-align: center; margin: 20px 0;">
  <svg width="100%" height="auto" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" style="max-width: 800px;">
    <defs>
      <!-- Стрелка для сплошных линий -->
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L10,5 L0,10 Z" fill="var(--r-main-color)" />
      </marker>
      <!-- Стрелка для пунктирных линий -->
      <marker id="arrow-dash" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L10,5 L0,10 Z" fill="var(--r-main-color)" />
      </marker>
    </defs>
    <!-- ЛЕВАЯ КОЛОНКА: КЛИЕНТ -->
    <rect x="40" y="80" width="200" height="180" rx="15" ry="15" fill="var(--r-link-color)" stroke="none" />
    <!-- Иконка браузера -->
    <rect x="80" y="110" width="120" height="80" rx="5" fill="none" stroke="white" stroke-width="3"/>
    <line x1="80" y1="128" x2="200" y2="128" stroke="white" stroke-width="3"/>
    <circle cx="90" cy="119" r="3" fill="white"/>
    <circle cx="100" cy="119" r="3" fill="white"/>
    <circle cx="110" cy="119" r="3" fill="white"/>
    <!-- Текстовые полосы внутри иконки -->
    <rect x="92" y="140" width="60" height="6" rx="2" fill="white" opacity="0.8"/>
    <rect x="92" y="152" width="100" height="6" rx="2" fill="white" opacity="0.8"/>
    <rect x="92" y="164" width="80" height="6" rx="2" fill="white" opacity="0.8"/>
    <!-- Подпись -->
    <text x="140" y="225" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="bold" fill="white">Клиент (браузер)</text>
    <!-- ПРАВАЯ КОЛОНКА: СЕРВЕР -->
    <rect x="560" y="80" width="200" height="180" rx="15" ry="15" fill="var(--r-link-color)" stroke="none" />
    <!-- Иконка сервера -->
    <rect x="610" y="110" width="100" height="25" rx="4" fill="none" stroke="white" stroke-width="3"/>
    <circle cx="620" cy="122.5" r="3" fill="white"/>
    <rect x="610" y="145" width="100" height="25" rx="4" fill="none" stroke="white" stroke-width="3"/>
    <circle cx="620" cy="157.5" r="3" fill="white"/>
    <rect x="610" y="180" width="100" height="25" rx="4" fill="none" stroke="white" stroke-width="3"/>
    <circle cx="620" cy="192.5" r="3" fill="white"/>
    <!-- Подпись -->
    <text x="660" y="225" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="bold" fill="white">Сервер</text>
    <!-- СТРЕЛКА 1: ЗАПРОС (Слева направо) -->
    <line x1="245" y1="140" x2="555" y2="140" stroke="var(--r-main-color)" stroke-width="3" marker-end="url(#arrow)" />
    <text x="400" y="115" text-anchor="middle" font-family="sans-serif" font-size="16" fill="var(--r-main-color)">Клиент посылает серверу запрос</text>
    <text x="400" y="135" text-anchor="middle" font-family="sans-serif" font-size="16" fill="var(--r-main-color)">(HTTP - request) для получения страницы</text>
    <!-- СТРЕЛКА 2: ОТВЕТ (Справа налево) -->
    <line x1="555" y1="210" x2="245" y2="210" stroke="var(--r-main-color)" stroke-width="3" marker-end="url(#arrow)" />
    <text x="400" y="245" text-anchor="middle" font-family="sans-serif" font-size="16" fill="var(--r-main-color)">Сервер в ответ посылает страницу</text>
    <text x="400" y="265" text-anchor="middle" font-family="sans-serif" font-size="16" fill="var(--r-main-color)">клиенту (HTTP - response)</text>
    <!-- НИЖНИЙ БЛОК: ОТРИСОВКА -->
    <path d="M 140 265 Q 140 320 300 350" fill="none" stroke="var(--r-main-color)" stroke-width="2" stroke-dasharray="6,6" marker-end="url(#arrow-dash)" />
    <rect x="250" y="330" width="300" height="90" rx="10" ry="10" fill="none" stroke="var(--r-main-color)" stroke-width="2" stroke-dasharray="6,6" />
    <text x="400" y="365" text-anchor="middle" font-family="sans-serif" font-size="18" fill="var(--r-main-color)">Клиент (браузер)</text>
    <text x="400" y="390" text-anchor="middle" font-family="sans-serif" font-size="18" fill="var(--r-main-color)">отображает страницу</text>
  </svg>
</div>

---
### Стандартизация HTML

- HTML разрабатывался World Wide Web Consortium (W3C) (до версии 5.2)
- В настоящее время разрабатывается WHATWG (Web Hypertext Application Technology Working Group) 
- В  мае 2019 года было достигнуто соглашение: 
  - W3C признает "Живой стандарт" WHATWG единственной официальной версией HTML.
  - WHATWG будет отвечать за разработку стандарта.
  - W3C будет заниматься его формализацией, созданием "моментальных снимков" 
- Живой стандарт HTML (WHATWG): https://html.spec.whatwg.org/multipage/ (~ 140 элементов)
- Рекомендация HTML5.2 (W3C): https://www.w3.org/TR/html52/


---
### Основы HTML: элементы

Основные «команды» HTML называются **элементами**.

Большинство элементов имеет:
- открывающий тег;
- содержимое;
- закрывающий тег.

Например:

```html
<p>Это абзац текста.</p>
```

Здесь `<p>` — открывающий тег, `</p>` — закрывающий тег, а текст между ними — содержимое элемента.

Элементы могут быть вложенными:

```html
<p>
  Это <strong>важный</strong> текст.
</p>
```

---
### Пустые элементы

Некоторые HTML-элементы не имеют содержимого и закрывающего тега. Они называются **void elements** (пустые элементы).

Примеры:

```html
<meta charset="utf-8">
<img src="photo.jpg" alt="Фотография">
<input type="text">
<br>
<hr>
```

---
### Структура HTML-страницы

Минимальная структура современного HTML-документа:

```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <title>Моя страница</title>
</head>
<body>
  Содержимое страницы
</body>
</html>
```

- `<!DOCTYPE html>` сообщает браузеру, что документ использует современный HTML.
- `<html>` — корневой элемент документа.
- `<head>` — метаданные документа.
- `<body>` — содержимое, отображаемое на странице.

---
### Секция `<head>`

`<head>` содержит информацию **о документе**, а не основное видимое содержимое страницы.

Например:

```html
<head>
  <meta charset="utf-8">
  <meta name="author" content="Ivan Ivanov">
  <meta name="description" content="Пример HTML-страницы">
  <title>A Simple Web Page</title>
  <!-- <link> подключает внешний файл стилей (например, основную тему сайта) -->
  <link rel="stylesheet" href="styles/main.css">
</head>
```

Наиболее важные элементы:

- `<title>` — заголовок страницы, отображаемый, например, во вкладке браузера.
- `<meta>` — метаданные.
- `<link>` — подключение внешних ресурсов, например CSS.


---
### Секция `<head>`
```html
<head>
  <meta charset="utf-8">
  <meta name="author" content="Ivan Ivanov">
  <meta name="description" content="Пример HTML-страницы">
  <title>A Simple Web Page</title>
  <!-- <base> задает базовый URL для всех относительных ссылок на странице -->
  <base href="https://example.com">
  <style>
        body {
            font-family: Arial, sans-serif; margin: 40px;
            background-color: #f4f4f9; color: #333;
        }
  </style>
  <script>
    document.addEventListener('DOMContentLoaded', 
    () => document.getElementById('greetBtn').onclick = () => alert('Привет!'));
  </script>
</head>
```
- `<style>` — встроенные CSS-правила.
- `<script>` — подключение или размещение JavaScript.
- `<base>` — базовый URL для относительных ссылок.

---
### Атрибуты элементов

Атрибуты задают дополнительные свойства элементов.

Например:

```html
<meta name="author" content="Ivan Ivanov">
```

Здесь:
- `name` — имя атрибута;
- `content` — его значение.

Атрибуты записываются внутри открывающего тега:

```html
<input type="text" name="username" required>
```

Большинство строковых значений атрибутов рекомендуется заключать в двойные кавычки (но могут использоваться и одинарные).

---
### Просмотр исходного кода страницы
Любую HTML-страницу можно посмотреть как исходный документ.
В большинстве браузеров Windows:
 - **Ctrl + U** — просмотр исходного HTML.
 - Также доступны инструменты разработчика (**F12**), где можно посмотреть уже построенное браузером DOM-дерево, применённые CSS-правила и состояние элементов.

> 💡 **Исходный HTML и DOM — не совсем одно и то же.** Браузер может изменить структуру DOM при разборе HTML и добавить в неё элементы.

---
### Комментарии

Комментарии не отображаются пользователю:

```html
<!-- Это комментарий -->
```

Комментарий может занимать несколько строк:

```html
<!--
  Этот фрагмент
  не отображается
  на странице.
-->
```

---
### Заголовки: `<h1>` – `<h6>`

HTML предоставляет шесть уровней заголовков:

```html
<h1>Введение в HTML</h1>
<h2>Глава 1. Элементы</h2>
<h3>Заголовки</h3>
```

`<h1>` — заголовок самого высокого уровня, `<h6>` — самого низкого.

Заголовки важны не только визуально, но и **семантически**: они помогают пользователю, поисковым системам и вспомогательным технологиям понять структуру документа.


---
### Пример. Заголовки

<iframe data-src="../examples/HTML/02Heading.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>
---
### Абзацы: `<p>`

Элемент `<p>` задаёт абзац:

```html
<p>Это первый абзац.</p>
<p>А это уже второй абзац.</p>
```

Обычные пробелы и переводы строк в HTML-коде обычно не сохраняются как отдельные пробелы на странице:

```html
<p>
  Это      один
  абзац.
</p>
```

Браузер отобразит текст примерно как:

> Это один абзац.

Если нужен принудительный перенос строки внутри абзаца, используется `<br>`.

---
### Группировка: `<section>`

`<section>` используется для создания раздела (секции) документа:

```html
<section>
  <h2>Элементы HTML</h2>
  <p>Описание элементов...</p>
</section>
```

- Это **семантический** элемент: он сообщает о структуре документа, а не просто создаёт визуальный блок.
- Используется для группировки элементов. Зачем это нужно, обсудим позднее


---
### Пример. Секция section

<iframe data-src="../examples/HTML/03Section.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>
---
### Списки

**Ненумерованный список** задаётся `<ul>`, а отдельные элементы — `<li>`:

```html
<ul>
  <li>Первый элемент</li>
  <li>Второй элемент</li>
  <li>Третий элемент</li>
</ul>
```

**Нумерованный список** задаётся `<ol>`:

```html
<ol>
  <li>Первый шаг</li>
  <li>Второй шаг</li>
  <li>Третий шаг</li>
</ol>
```


---
### Пример. Ненумерованный список

<iframe data-src="../examples/HTML/04UnList.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>

---
### Пример. Нумерованный список

<iframe data-src="../examples/HTML/05OrList.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>
---
### Списки
Для `<ol>` можно задавать начальное значение и направление нумерации:

```html
<ol start="15" reversed>
  <li>Элемент</li>
  <li>Элемент</li>
  <li>Элемент</li>
</ol>
```

- Тип нумерации задаётся не атрибутом, а CSS-свойством `list-style-type` (`list-style-type: upper-alpha`) — атрибут `type` у `<ol>` в современном HTML считается устаревшим.


---
### Пример. ol с атрибутом start

<iframe data-src="../examples/HTML/06OrList.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>

---
### Пример. ol start reversed

<iframe data-src="../examples/HTML/07OrList.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>

---
### Пример. ol с устаревшим атрибутом type

<iframe data-src="../examples/HTML/08OrList.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>
---
### Форматирование текста

HTML содержит элементы для смыслового и визуального выделения текста.

- `<em>` — смысловое ударение.
- `<strong>` — важность/значимость.
- `<i>` — текст, выделенный курсивом без обязательного смыслового акцента.
- `<b>` — визуальное выделение без обязательного смыслового акцента.
- `<mark>` — выделение как маркером.
- `<u>` — подчёркнутый текст в соответствующих семантических случаях.

---
### Форматирование текста
Пример:

```html
<p>
  Это <strong>важный</strong> фрагмент,
  а это <em>смысловое ударение</em>.
</p>
```

> 💡 Для современного HTML предпочтительно использовать семантические элементы там, где они подходят, а чисто визуальное оформление выполнять с помощью CSS.


---
### Пример. i и em

<iframe data-src="../examples/HTML/09i-em.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>

---
### Пример. b и strong

<iframe data-src="../examples/HTML/10b-strong.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>

---
### Пример. u

<iframe data-src="../examples/HTML/11u.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>

---
### Пример. mark

<iframe data-src="../examples/HTML/12mark.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>
---
### Верхние и нижние индексы

- `<sub>` — нижний индекс.
- `<sup>` — верхний индекс.

```html
H<sub>2</sub>O
```

```html
x<sup>2</sup>
```

Результат:

H₂O и x².

---
### Пример. sub и sup

<iframe data-src="../examples/HTML/13SubSup.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>
---
### Вставленный и удалённый текст

- `<ins>` — добавленный/вставленный текст.
- `<del>` — удалённый текст.

```html
<p>
  Я преподаю <del>на факультете ВМК</del>
  <ins>в институте ИТММ</ins>.
</p>
```

Эти элементы несут смысловую информацию, а не только меняют внешний вид.


---
### Пример. ins и del

<iframe data-src="../examples/HTML/14InsDel.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>
---
### Гиперссылки

Элемент `<a>` создаёт гиперссылку:

```html
<a href="https://example.com">Перейти на сайт</a>
```

Атрибут `href` содержит адрес назначения.

Ссылка может вести:
- на другой сайт;
- на другую страницу;
- на файл;
- на место внутри текущей страницы.


---
### Пример. ссылка на другой сайт

<iframe data-src="../examples/HTML/15a.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>
---
### Навигация внутри страницы

Для перехода к определённому элементу используется атрибут `id`:

```html
<p id="start">Начало страницы</p>

<a href="#end">В конец</a>

<!-- много содержимого -->

<p id="end">Конец страницы</p>
<a href="#start">В начало</a>
```

`id` должен быть уникальным в пределах документа.


---
### Пример. переход к id внутри страницы

<iframe data-src="../examples/HTML/16a.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>
---
### Ссылка на фрагмент другой страницы

Можно сразу перейти к определённому элементу другой страницы:

```html
<a href="chapter2.html#examples">
  Перейти к примерам
</a>
```

Браузер откроет `chapter2.html` и попытается прокрутить страницу к элементу с `id="examples"`.


---
### Пример. ссылка на фрагмент другой страницы

<iframe data-src="../examples/HTML/17a.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>
---
### Разделители: `<br>`, `<wbr>`, `<hr>`

- `<br>` — принудительный перенос строки.
- `<wbr>` — возможное место переноса длинного слова.
- `<hr>` — тематический разделитель.

Например:

```html
<p>
  Первая строка<br>
  Вторая строка
</p>
```

> 💡 `<hr>` — это не просто «горизонтальная линия». Семантически он обозначает **тематический переход** между частями документа.

---
### Разделители. Примеры

```html
<p>Тетрагидропиранилциклопентилтетрагидропиридопиридиновые — слово из 55 букв, описывающее химическое вещество. Является самым длинным русским словом.</p>

<p>Тетрагидропиранилциклопентилтетрагидропиридопиридиновые — слово из 55 букв, описывающее химическое вещество.<br> Является самым длинным русским словом.</p>

<p>Тетрагидропиранилциклопентилтетрагидро<wbr>пиридопиридиновые — слово из 55 букв, описывающее химическое вещество. Является самым длинным русским словом.</p>

<p>Тетрагидропиранилциклопентилтетрагидропиридопиридиновые — слово из 55 букв, описывающее химическое вещество.<hr> Является самым длинным русским словом.</p>
```


---
### Пример. br, wbr, hr

<iframe data-src="../examples/HTML/18br.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>
---
### Изображения

Для вставки изображения используется `<img>`:

```html
<img src="images/photo.jpg" alt="Описание фотографии">
```

Основные атрибуты:

- `src` — URL или путь к изображению.
- `alt` — альтернативное текстовое описание.
- `width`, `height` — размеры изображения.

Например:

```html
<img
  src="images/photo.jpg"
  alt="Море на закате"
  width="500"
>
```

> ⚠️ `alt` особенно важен для доступности: его используют, в частности, программы чтения с экрана.


---
### Пример. img

<iframe data-src="../examples/HTML/19img.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>
---
### Размер изображения

Можно задать один размер, и браузер сохранит пропорции:

```html
<img src="photo.jpg" width="500" alt="Фото">
```

Также можно использовать относительный размер:

```html
<img src="photo.jpg" width="50%" alt="Фото">
```

В современном адаптивном дизайне размеры изображений обычно дополнительно контролируются CSS.


---
### Пример. размеры img

<iframe data-src="../examples/HTML/20imgWidth.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>
---
### Указание размера. Некоторые способы
Абсолютные единицы: Не зависят от окружения. Менее гибкие.
- px (пиксели) — самая распространенная. В некоторых элементах (img) используются по умолчанию
- cm, mm, in (сантиметры, миллиметры, дюймы) — для печати.

Относительные единицы: Очень гибкие, основа для адаптивного дизайна.
- % — процент от размера родительского элемента.
- vw (viewport width) — процент от ширины окна браузера. 50vw = 50% ширины окна.
- vh (viewport height) — процент от высоты окна браузера

---
### Аудио

Для воспроизведения аудио используется `<audio>`:

```html
<audio src="music/music.mp3" controls></audio>
```

`controls` показывает элементы управления.

Можно указать:

```html
<audio src="music/music.mp3" controls loop></audio>
```

> 💡 Автоматическое воспроизведение (`autoplay`) браузеры часто ограничивают, особенно если звук включён.


---
### Пример. audio без элементов управления

<iframe data-src="../examples/HTML/21audio.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>

---
### Пример. audio с controls

<iframe data-src="../examples/HTML/22audio_controls.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>

---
### Пример. audio с autoplay

<iframe data-src="../examples/HTML/22audio_autoplay.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>
---
### Видео

Для видео используется `<video>`:

```html
<video src="video/video.mp4" controls></video>
```

Можно задавать размеры и включать повтор:

```html
<video
  src="video/video.mp4"
  width="640"
  controls
  loop
></video>
```

Для видео вместо `alt` используются другие механизмы доступности, например субтитры через `<track>`.


---
### Пример. video без элементов управления

<iframe data-src="../examples/HTML/23video.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>

---
### Пример. video с controls

<iframe data-src="../examples/HTML/25video_controls.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>

---
### Пример. video с autoplay

<iframe data-src="../examples/HTML/24video_autoplay.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>

---
### Пример. у video нет атрибута alt

<iframe data-src="../examples/HTML/26video_alt.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>
---
### Таблицы

Основные элементы таблиц:

- `<table>` — таблица.
- `<thead>` — заголовочная часть.
- `<tbody>` — основное содержимое.
- `<tr>` — строка.
- `<th>` — заголовочная ячейка.
- `<td>` — обычная ячейка.
---
Пример:

```html
<table>
  <thead>
    <tr>
      <th>Навык</th>
      <th>Сложность</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>HTML</td>
      <td>Легко</td>
    </tr>
    <tr>
      <td>CSS</td>
      <td>Средне</td>
    </tr>
  </tbody>
</table>
```

> 💡 Таблицы следует использовать для **табличных данных**, а не для построения макета страницы.


---
### Пример. таблица

<iframe data-src="../examples/HTML/27table.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>
---
### Формы

HTML-форма позволяет пользователю ввести данные и отправить их серверу.

Основные элементы:

- `<form>` — форма.
- `<input>` — различные виды полей ввода.
- `<textarea>` — многострочный текст.
- `<select>` — выпадающий список.
- `<option>` — вариант списка.
- `<button>` — кнопка.
- `<label>` — подпись поля.
- `<fieldset>` и `<legend>` — группировка элементов.


---
### Пример. textarea

<iframe data-src="../examples/HTML/28form.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>

---
### Пример. textarea с отправкой на сервер

<iframe data-src="../examples/HTML/29form.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>
---
### Структура формы

```html
<form action="/login" method="post">
  . . . Здесь находятся элементы формы. . .
  

  <button type="submit">Войти</button>
</form>
```

- `action` определяет адрес, куда отправляются данные.
  - Например:
  ```html 
  <form action="http://www.server.ru/sub/prg.php">
  ```
  
  - Если программа обработки формы на том же сервере, что и html-файл:
  ```html
  <form action="sub/prg.php">
  ```
  
- `method` определяет HTTP-метод отправки.
  - Основные варианты — `GET` и `POST` (по умолчанию GET).

---
### GET и POST в формах

При использовании `GET` параметры формы становятся частью URL:

```url
https://example.com/search?text=HTML
```

Преимущества:
- URL можно сохранить или передать другому пользователю;
- удобно для поиска и других запросов, не изменяющих состояние.

---
### GET и POST в формах
При использовании `POST` данные передаются в теле HTTP-запроса:

```http
POST /login HTTP/1.1
Content-Type: application/x-www-form-urlencoded

login=student&password=12345
```

> ⚠️ **Важно:** POST не шифрует данные. Пароль, переданный через POST по обычному HTTP, всё равно можно перехватить. Для защиты данных используется **HTTPS**.

---
### Элементы формы: текст и пароль

```html
<input type="text" name="username">
<input type="password" name="password">
```

Поле `password` скрывает ввод на экране, но само по себе **не обеспечивает шифрование**.

Для обязательного поля:

```html
<input type="text" name="username" required>
```

---
### Пример. поле password

<iframe data-src="../examples/HTML/31form.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>
---
### Форма. Пример
```html
<form> Введите Ваше имя <br>
<input type="text" name="feedback"> <br> <br>
Ваши домашние животные <br>
<input type="checkbox" name="items" value="cat">Кошка <br>
<input type="checkbox" name="items" value="dog"> Собака <br>
<input type="checkbox" name="items" value="fish"> Аквариумные рыбки <br> <br>
Насколько хорошо вы знаете  HTML<br>
<input type="radio" name="iq" value="high"> Отлично <br>
<input type="radio" name="iq" value="medium" checked> Средне <br>
<input type="radio" name="iq" value="low"> Посредственно <br> <br>
</form>
```


---
### Пример. checkbox и radio

<iframe data-src="../examples/HTML/30form.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>
---
### Checkbox и Radio

**Checkbox** позволяет выбрать несколько независимых вариантов:

```html
<input type="checkbox" name="items" value="cat"> Кошка
<input type="checkbox" name="items" value="dog"> Собака
<input type="checkbox" name="items" value="fish"> Рыбки
```
При передаче:
```url
File:///30form.html?feedback=&items=cat&items=dog&items=fish
```

**Radio** используется для выбора одного варианта из группы:

```html
<input type="radio" name="level" value="high"> Высокий
<input type="radio" name="level" value="medium"> Средний
<input type="radio" name="level" value="low"> Низкий
```

Именно одинаковый `name` объединяет radio-кнопки в одну группу.

---
### Выпадающий список

```html
<select name="city">
  <option value="msk">Москва</option>
  <option value="nn">Нижний Новгород</option>
  <option value="spb">Санкт-Петербург</option>
</select>
```

Пользователь видит текст варианта, а сервер получает значение его атрибута `value`.


---
### Пример. выпадающий список

<iframe data-src="../examples/HTML/32form.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>
---
### Атрибуты элементов формы

Часто используются:

- `value` — начальное значение.
- `placeholder` — подсказка внутри поля.
- `autofocus` — автоматическая установка фокуса.
- `required` — поле обязательно для заполнения.
- `disabled` — элемент отключён.
- `readonly` — значение нельзя редактировать.

Пример:

```html
<form>
  <p>Пожалуйста, заполните следующую информацию о себе</p>
  <label for="firstname">Имя</label>
  <input type="text" name="firstname" id="firstname" value="Иван" autofocus> <br>
  <label for="lastname">Фамилия</label>
  <input type="text" name="lastname" id="lastname" 
          placeholder="Напишите здесь Вашу фамилию"><br>
  <label for="age">Возраст:</label>
  <input type="text" name="age" id="age" required> <br>
  <input type="submit" value="Submit">
</form>
```


---
### Пример. атрибуты полей формы

<iframe data-src="../examples/HTML/33form.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>
---
### Label: подпись поля

`<label>` связывает текстовую подпись с элементом формы:

```html
<label for="age">Возраст:</label>
<input type="number" id="age" name="age">
```

Значение `for` должно совпадать с `id` соответствующего элемента.

Это улучшает доступность и позволяет, например, щёлкнуть по подписи, чтобы активировать поле.

---
### Загрузка файлов

Для выбора файла используется:

```html
<input type="file" name="file">
```

При отправке формы с файлами необходимо использовать `multipart/form-data`:

```html
<form
  action="/upload"
  method="post"
  enctype="multipart/form-data"
>
  <input type="file" name="file">
  <button type="submit">Загрузить</button>
</form>
```

> 💡 `multipart/form-data` позволяет передавать в одном запросе текстовые поля и двоичные данные файлов.


---
### Пример. загрузка файла

<iframe data-src="../examples/HTML/34form_upload.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>
---
### HTML5: дополнительные типы `<input>`

HTML предоставляет специализированные поля:

```html
<input type="number">
<input type="date">
<input type="time">
<input type="color">
<input type="range">
<input type="email">
<input type="url">
```
---
### HTML5: дополнительные типы `<input>`
Например:

```html
<form action="show.php">
<label for="age">Возраст:</label>
<input type="number" min="0" max="99" step="1" value="18" name="age" id="age" 
              required><br>
<label for="birthday">День рождения:</label>
<input type="date" name="birthday" id="birthday"><br>
<label for="wakeup">Время, в которое вы просыпаетесь:</label>
<input type="time" name="wakeup" id="wakeup"><br>
<label for="color">Любимый цвет:</label>
<input type="color" name="color" id="color"> <br>
<label for="mood">Ваше настроение</label>
Ужасное <input type="range" min="0" max="100" step="5" value="50" 
        name="mood" id="mood">Отличное<br>
<input type="submit" value="Отправить!">
</form>
```

Браузер может предоставить подходящий интерфейс и выполнить базовую проверку введённых данных.


---
### Пример. поля HTML5

<iframe data-src="../examples/HTML/35form_html5.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>
---
### Группировка: `<fieldset>` и `<legend>`

`<fieldset>` объединяет связанные элементы формы, а `<legend>` задаёт название группы:

```html
<form> 
  <fieldset>
    <legend>Персональная информация</legend>
      Имя: <input type="text" name="firstName"> <br>
      Фамилия: <input type="text" name="lastName"> <br>
  </fieldset> 
<br>
  <fieldset>
    <legend>Ваши предпочтения</legend>
      Любимый фильм <input type="text" name="favFilm"> <br>
      Любимое время года<input type="text" name="favSeason"> <br>
  </fieldset> 
  <br> 
  <input type="submit" value="Отправить">
</form>

```

Эти элементы особенно полезны для доступности сложных форм.


---
### Пример. fieldset и legend в форме

<iframe data-src="../examples/HTML/36form_grouping.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>

---
### Пример. fieldset и legend без полей ввода

<iframe data-src="../examples/HTML/37fieldset.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>
---
### Стили
- Стили применяются для визуального “оформления” страницы
- При работе со стилями используют:
  - Элементы link и style
  - Атрибут id, имеющийся у любого элемента HTML
- "Язык" для определения стилей в мире Web называется CSS (Cascading Style Sheets)
- **Основная концепция состоит в отделении стиля ("оформления") от структуры страницы ("содержимого", "данных")**

---
### CSS (Cascading Style Sheets)
- CSS можно подключить из отдельного файла:

```html
<link href="style.css" rel="stylesheet">
```
- Один CSS-файл может использоваться множеством HTML-страниц.
- CSS можно определить непосредственно в `<style>`:

```html
<head>
  <style>
    h1 {
      color: purple;
    }

    p {
      color: blue;
    }
  </style>
</head>
```

Но для больших проектов предпочтительно выносить общие стили в отдельные CSS-файлы.


---
### Пример. внешний файл стилей

<iframe data-src="../examples/HTML/38css1.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>

---
### Пример. стили в head

<iframe data-src="../examples/HTML/39css2.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>
---
### Основы CSS: свойства

Общий синтаксис:

```css
селектор {
  свойство: значение;
}
```

Например:

```css
p {
  color: blue;
  background: lightgray;
  font-size: 18px;
  text-align: center;
}
```

Часто используемые свойства:

- `color` — цвет текста;
- `background` — фон;
- `font-family` — шрифт;
- `font-size` — размер текста;
- `text-align` — выравнивание текста.

---
### Атрибут `id` в CSS

`id` позволяет однозначно идентифицировать элемент:

```html
<ul id="rainbowColors">
  <li id="red">Red</li>
  <li id="blue">Blue</li>
</ul>
```

В CSS элемент с определённым `id` выбирается через `#`:

```css
#rainbowColors {
  background: gray;
}

#red {
  background: red;
}

#blue {
  background: blue;
}
```

> 💡 `id` должен быть уникальным в документе. Для группы элементов обычно лучше использовать `class`.


---
### Пример. селектор id

<iframe data-src="../examples/HTML/40css_id.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>
---
### Встроенный стиль

CSS можно задать непосредственно через атрибут `style`:

```html
<p style="text-align: right">
  Welcome.
</p>
```

Это называется **inline style**.

Такой подход удобен для небольших локальных изменений, но при большом количестве элементов ухудшает поддержку страницы.


---
### Пример. inline-стиль

<iframe data-src="../examples/HTML/43css_inline.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>
---
### Контекстные селекторы

CSS позволяет выбирать элементы в зависимости от их положения:

```css
ul li {
  color: red;
}
```

Это правило применяется к `<li>`, находящимся внутри `<ul>`.

Например:

```html
<ul>
  <li>One</li>
  <li>Two</li>
</ul>

<ol>
  <li>One</li>
  <li>Two</li>
</ol>
```

Красными будут элементы `<li>` внутри `<ul>`.


---
### Пример. контекстный селектор

<iframe data-src="../examples/HTML/44css_context.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>
---
### Классы CSS

Класс задаётся атрибутом `class`:

```html
<h1 class="colored">Заголовок</h1>
<p class="centered">Текст</p>
```

В CSS класс обозначается точкой:

```css
.colored {
  color: purple;
  background: yellow;
}

.centered {
  text-align: center;
}
```

Один элемент может иметь несколько классов:

```html
<h1 class="colored centered">
  Заголовок
</h1>
```


---
### Пример. классы

<iframe data-src="../examples/HTML/41css_class.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>

---
### Пример. несколько классов у одного элемента

<iframe data-src="../examples/HTML/42css_class2.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>
---
### Псевдоклассы

Псевдоклассы позволяют задавать стиль в зависимости от состояния элемента.

Например:

```css
a:link {   background: yellow; }
a:visited {   background: pink; }
a:hover {   background: lightgreen; }
a:active {   background: purple; }
```

Часто используются:

- `:hover` — курсор находится над элементом;
- `:active` — элемент активируется;
- `:visited` — посещённая ссылка;
- `:focus` — элемент получил фокус;
- `:empty` — элемент не содержит содержимого.

---
### Псевдоклассы. Пример
```html
<html> 
  <head>
    <style> a:link {background:yellow} 
            a:visited {background:pink}
            a:hover {background:lightgreen} 
            a:active {background:purple}
            li:empty {background:brown} 
    </style>
</head>
<body>
<a href="http://www.google.com">Google</a>
<a href="http://www.twitter.com">Twitter</a>
<a href="http://www.facebook.com">Facebook</a>
<ol>
  <li>One</li> 
  <li>Two</li> 
  <li>Three</li> 
  <li></li>
</ol>
</body>
</html>
```



---
### Пример. псевдоклассы

<iframe data-src="../examples/HTML/45css_pseudo_classes.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>

---
### `<div>` и `<span>`

`<div>` и `<span>` — универсальные элементы группировки без собственной специальной семантики.

- `<div>` обычно используется для группировки **блочного** содержимого.
- `<span>` — для небольшого фрагмента **строчного** содержимого.

Например:

```html
<div>
  <h2>Заголовок</h2>
  <p>Текст раздела.</p>
</div>
```

```html
<p>
  Это обычный текст,
  <span class="important">а это важный фрагмент</span>.
</p>
```
---
### DIV
- Не имеет стиля по умолчанию (соответственно свойства отображения всех элементов не заданы)
- Может использоваться разработчиком страницы по своему усмотрению

```html
<p>Параграф перед определением div</p>
<div> DIV без применения стиля </div>
<p>Параграф после определения DIV</p>
<div style="background:lightblue">
DIV с примененным стилем
</div>
```

```html
<p>Параграф перед DIV</p>
<div style="background:yellow; font-size:16pt; 
    font-family:courier">
    DIV с желтым фоном
</div>
<p>Параграф между двумя DIV</p>
<div style="background:lightblue; font-size:18pt; 			
font-family:Arial; width:50%">
    DIV с голубым фоном
</div>
```


---
### Пример. div со стилем и без

<iframe data-src="../examples/HTML/46div.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>

---
### Пример. два div с разными стилями

<iframe data-src="../examples/HTML/47div_2.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>

---
### DIV. Позиционирование
- DIV – может быть помещен на любую позицию на странице
- Атрибут position:absolute вместе с атрибутами top:xxx and left:yyy задают абсолютную позицию левого верхнего угла DIV
- top:0 and left:0 означают, что DIV будет помещен в левый верхний угол контейнера

```html
<div style="background:yellow; font-size:16pt; font-family:courier; 
            position:absolute; top:60px; left:60px">
    This is a div with a yellow background
</div>
<div style="background:lightblue; font-size:18pt; 
            position:absolute; top:92px; left:80px">
    This is a div with a blue background
</div>
```

💡 Чтобы position: absolute срабатывал не от краев окна браузера, а от границ конкретного блока-родителя, родителю нужно задать position: relative.
---
### Пример. position: absolute

<iframe data-src="../examples/HTML/48div_position.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>

---
### Пример. position: relative

<iframe data-src="../examples/HTML/49div_position_relative.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>

---
### SPAN
- Также как и DIV не имеет свойств отображения по умолчанию
- Используется для управления отображением «нескольких слов»

```html
<p>This is not span text <span>but this is</span> and this isn't</p>

<p>This is not span text <span style="background:yellow">but this is</span> 
and this isn't</p>
```



---
### Пример. span

<iframe data-src="../examples/HTML/50span.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>


---
### Блочная модель CSS
Всё в HTML — это прямоугольники. Даже если элемент выглядит как круг (через border-radius), браузер всё равно выделяет под него прямоугольную область.
Каждый такой прямоугольник (бокс) состоит из четырёх слоёв (изнутри наружу):
- Content (Контент) — само содержимое элемента (текст, картинка). Размеры задаются через width и height.
- Padding (Внутренний отступ) — пустое пространство между контентом и рамкой.
- Border (Рамка) — линия, окружающая padding.
- Margin (Внешний отступ) — прозрачное пространство снаружи элемента, отталкивающее его от соседей.

---
### Блочная модель CSS

<svg width="100%" height="auto" viewBox="0 0 600 380" xmlns="http://www.w3.org/2000/svg" style="max-width: 600px; display: block; margin: 0 auto;">
<!-- Margin (Внешний отступ) -->
<rect x="20" y="20" width="560" height="340" fill="#ffeeba" stroke="#f8d7da" stroke-width="2" stroke-dasharray="8,4"/>
<text x="30" y="40" font-family="monospace" font-size="18" fill="#856404">Margin (внешний отступ)</text>
<!-- Border (Рамка) -->
<rect x="80" y="70" width="440" height="240" fill="#d1ecf1" stroke="#0dcaf0" stroke-width="8"/>
<text x="90" y="95" font-family="monospace" font-size="18" fill="#0c5460">Border (рамка)</text>
<!-- Padding (Внутренний отступ) -->
<rect x="110" y="100" width="380" height="180" fill="#d4edda" stroke="#198754" stroke-width="2" stroke-dasharray="6,4"/>
<text x="120" y="125" font-family="monospace" font-size="18" fill="#155724">Padding (внутренний отступ)</text>
<!-- Content (Контент) -->
<rect x="160" y="150" width="280" height="80" fill="#fff3cd" stroke="#ffc107" stroke-width="2"/>
<text x="240" y="195" text-anchor="middle" font-family="monospace" font-size="20" fill="#664d03">CONTENT</text>
<text x="380" y="195" text-anchor="middle" font-family="monospace" font-size="14" fill="#664d03">(width / height)</text>
</svg>

> 💡 Свойства margin и padding работают по часовой стрелке: top (сверху), right (справа), bottom (снизу), left (слева). Например, padding: 10px 20px задаёт 10px сверху/снизу и 20px слева/справа.


---
### Проблема размеров: content-box (по умолчанию)
Главная ловушка блочной модели: по умолчанию свойство width задает ширину только контента. Паддинги и рамки прибавляются сверху.

```css
.card {
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  /* 
    Итоговая ширина на экране:
    300 (контент) + 40 (левый+правый padding) + 10 (левая+правая рамка) = 350px! 
  */
}
```
Если вы захотите поставить два таких блока в ряд (каждый по 300px), они не влезут в контейнер шириной 600px и второй блок «упадет» вниз.

---
### box-sizing: border-box
Чтобы width означал фактическую ширину блока вместе с паддингами и рамками, используют свойство box-sizing.
```css
.card {
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  box-sizing: border-box; 
  /* 
    Теперь итоговая ширина ровно 300px. 
    Браузер сам сожмет контент до 250px (300 - 40 - 10).
  */
}
```

> ⚠️ Важно: В современных проектах это свойство применяют ко всем элементам на странице с помощью универсального селектора:

```css
*, *::before, *::after {
  box-sizing: border-box;
}
```

---
### Пример. Влияние отступов на размер

В примере ниже два блока имеют одинаковую ширину 300px и одинаковые padding и border. Но первый блок выходит за красную границу контейнера, а второй — нет.

<iframe data-src="../examples/HTML/box_model_sizing.html" width="100%" height="480px" style="border: 2px solid #ccc;"></iframe>

---
### Схлопывание маржинов (Margin Collapsing)
Особенность вертикальных внешних отступов (margin-top и margin-bottom): если они соприкасаются, не складываются, а схлопываются.

Браузер выбирает больший из двух отступов и применяет его как итоговый.
```css
.block-1 { margin-bottom: 50px; }
.block-2 { margin-top: 30px; }
/* Расстояние между ними будет 50px, а не 80px! */
```
> 💡 На заметку: Схлопывание работает только по вертикали (в обычном потоке документа). Горизонтальные margin всегда складываются. Также схлопывание не работает внутри Flexbox-контейнеров (об этом дальше).

---
#### Пример. Схлопывание маржинов
<iframe data-src="../examples/HTML/box_model_margin_collapse.html" width="100%" height="690px" style="border: 2px solid #ccc;"></iframe>

---
### Flexbox
Flexbox (Flexible Box Layout) предназначен для удобного выравнивания элементов внутри контейнера и распределения между ними свободного пространства.

Чтобы включить Flexbox, нужно задать родителю display: flex. Тогда его прямые потомки становятся flex-элементами.

```css
.container {
  display: flex;
}
```

Главное правило Flexbox — наличие двух осей:
- Главная ось (Main Axis) — направление, вдоль которого выкладываются элементы.
- Поперечная ось (Cross Axis) — перпендикулярна главной.

По умолчанию главная ось идет горизонтально (слева направо).

---
### Flexbox

<svg width="100%" height="auto" viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="max-width: 600px; display: block; margin: 0 auto;">
  <!-- Контейнер -->
  <rect x="40" y="40" width="520" height="150" fill="#e9ecef" stroke="#adb5bd" stroke-width="2" rx="8"/>
  <text x="50" y="62" font-family="sans-serif" font-size="14" fill="#6c757d">display: flex</text>
    <!-- Элементы (сдвинуты вверх) -->
  <rect x="80" y="85" width="80" height="40" fill="#6c757d" rx="4"/>
  <rect x="180" y="85" width="80" height="40" fill="#6c757d" rx="4"/>
  <rect x="280" y="85" width="80" height="40" fill="#6c757d" rx="4"/>
  <rect x="380" y="85" width="80" height="40" fill="#6c757d" rx="4"/>
    <!-- Главная ось (под элементами) -->
  <line x1="50" y1="145" x2="540" y2="145" stroke="#dc3545" stroke-width="3" stroke-dasharray="8,4"/>
  <polygon points="540,145 525,135 525,155" fill="#dc3545"/>
  <text x="430" y="135" text-anchor="start" font-family="sans-serif" font-size="16" fill="#dc3545" font-weight="bold">Главная ось</text>
    <!-- Поперечная ось (справа, текст вынесен наверх) -->
  <line x1="490" y1="70" x2="490" y2="180" stroke="#0d6efd" stroke-width="3" stroke-dasharray="8,4"/>
  <polygon points="490,70 480,85 500,85" fill="#0d6efd"/>
  <text x="490" y="30" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#0d6efd" font-weight="bold">Поперечная</text>
</svg>

> 💡 Свойство justify-content всегда работает по главной оси, а align-items — по поперечной. Запомните это, и 90% проблем с Flexbox исчезнет.

---
### Направление и выравнивание по главной оси
Свойство flex-direction меняет направление главной оси.
- row (по умолчанию) — слева направо.
- column — сверху вниз (ось меняется местами).

А свойство justify-content управляет тем, как распределяются элементы вдоль главной оси (если остается свободное место).

```css
.container {
  display: flex;
  justify-content: center; /* или space-between, flex-start и др. */
}
```

---
### Направление и выравнивание по главной оси
Частые значения justify-content:
- flex-start (по умолчанию) — элементы прижаты к началу.
- center — элементы по центру.
- flex-end — элементы прижаты к концу.
- space-between — первый в начале, последний в конце, остальные равномерно между ними.
- space-around — свободное пространство делится поровну вокруг каждого элемента.

---
### Выравнивание по поперечной оси
Свойство align-items отвечает за выравнивание элементов поперек главной оси (по умолчанию — по вертикали).
Это особенно полезно, когда flex-элементы имеют разную высоту.

```css
.container {
  display: flex;
  align-items: center; /* выровнять по центру поперечной оси */
}
```

Основные значения:
- stretch (по умолчанию) — элементы растягиваются на всю высоту контейнера.
- flex-start — прижаты к верхнему краю.
- center — выровнены строго по центру.
- flex-end — прижаты к нижнему краю.

---
### Отступы и рост элементов (gap и flex)
В современном CSS для отступов между flex-элементами не нужно задавать margin каждому ребенку. Используйте свойство gap на родителе:

```css
.container {
  display: flex;
  gap: 16px; /* отступ 16px между всеми элементами */
}
```

Если вы хотите, чтобы элемент занял всё оставшееся свободное место в ряду, ему задают свойство flex-grow (или сокращенно flex: 1):

```css
.sidebar { width: 200px; }
.content { flex: 1; } /* Займет всё оставшееся место справа */
```

---
### Пример. justify-content и align-items
В примере ниже можно увидеть, как элементы выстраиваются в ряд и как они выравниваются по центру, если задать контейнеру justify-content: center и align-items: center.

<iframe data-src="../examples/HTML/flex_alignment.html" width="100%" height="450px" style="border: 2px solid #ccc;"></iframe>

---
### Пример. flex-grow и gap
Здесь синий блок имеет фиксированную ширину, а зеленому задано свойство flex: 1. При растяжении окна браузера зеленый блок будет забирать всё свободное место. Отступы заданы через gap.

<iframe data-src="../examples/HTML/flex_grow.html" width="100%" height="400px" style="border: 2px solid #ccc;"></iframe>

---
### CSS Grid: двумерная разметка
Если Flexbox отлично подходит для выравнивания элементов в одном направлении (в ряд или в колонку), то CSS Grid создан для построения двумерных сеток (когда мы одновременно контролируем и строки, и столбцы).

Чтобы включить Grid, родителю задается display: grid.

```css
.gallery {
  display: grid;
  /* Задаем 3 колонки одинаковой ширины */
  grid-template-columns: 1fr 1fr 1fr; 
  /* 1fr — это "фракция" (доля) свободного места */
  gap: 15px;
}
```

---
### CSS Grid: двумерная разметка
Главное свойство Grid — grid-template-columns. 
Оно определяет, сколько колонок будет в макете и какой они будут ширины. Значение 1fr (fraction) работает как пропорция: три 1fr делят контейнер на три равные части.

>💡 Правило хорошего тона: Используйте Grid для каркаса всей страницы (например, шапка, сайдбар и основной контент), а внутри этих блоков используйте Flexbox для выравнивания мелких элементов (кнопок, иконок, текста).

---
### Пример. Галерея на CSS Grid
В примере ниже контейнер разделен на 3 равные колонки с помощью grid-template-columns. Обратите внимание: элементы сами выстраиваются в аккуратную сетку, переходя на новую строку, когда ряд заполняется. Отступы заданы через знакомый нам gap.

<iframe data-src="../examples/HTML/css_grid_example.html" width="100%" height="450px" style="border: 2px solid #ccc;"></iframe>

---

### Библиотеки CSS

Вместо написания всего CSS вручную можно использовать готовые библиотеки и CSS-фреймворки.

Примеры:

- **Bootstrap**
- **Foundation**
- **Bulma**

Они предоставляют готовые компоненты и стили, позволяющие быстрее создавать интерфейсы.

> 💡 Библиотека CSS не заменяет знание самого CSS — она использует его возможности и задаёт готовые соглашения и компоненты.


---
### Пример. таблица со стилями Bootstrap

<iframe data-src="../examples/HTML/45_1css_style.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>



---
### Комплексный пример: карточка

<iframe data-src="../examples/HTML/flex_example.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>

> 💡 Ориентиры — слайды «Блочная модель» и «Flexbox».

---
### HTML5: некоторые элементы

Современный HTML предоставляет элементы, описывающие смысл частей страницы:

- `<header>` — вводная часть страницы или раздела;
- `<footer>` — нижняя часть страницы или раздела;
- `<nav>` — блок навигации;
- `<main>` — основное содержимое страницы;
- `<article>` — самостоятельный материал;
- `<section>` — тематическая секция;
- `<aside>` — дополнительное содержимое;
- `<figure>` — самостоятельный иллюстративный материал с возможной подписью;
- `<details>` — раскрываемый блок.

---
### HTML5: некоторые элементы
- `<progress>` — отображение прогресса;
- `<output>` — результат вычисления или действия;
- `<datalist>` — варианты для поля ввода;
- `<canvas>` — область для рисования с помощью JavaScript.

---
### Пример. article

<iframe data-src="../examples/HTML/54article.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>

---
### Пример. aside

<iframe data-src="../examples/HTML/55aside.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>

---
### Пример. menu

<iframe data-src="../examples/HTML/56menucommand.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>

---
### Пример. datalist

<iframe data-src="../examples/HTML/57datalist.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>

---
### Пример. details

<iframe data-src="../examples/HTML/58details.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>

---
### Пример. figure и figcaption

<iframe data-src="../examples/HTML/59figure.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>

---
### Пример. footer

<iframe data-src="../examples/HTML/60footer.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>

---
### Пример. nav

<iframe data-src="../examples/HTML/61nav.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>

---
### Пример. output

<iframe data-src="../examples/HTML/62output.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>

---
### Пример. progress

<iframe data-src="../examples/HTML/63progress.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>

---
### Пример. details с summary

<iframe data-src="../examples/HTML/64summary.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>
---
### HTML5 и JavaScript

HTML предоставляет структуру страницы, но многие интерактивные возможности требуют JavaScript.

Исторически к таким возможностям относились:

- Drag and Drop;
- File API;
- Geolocation;
- Local Storage;
- работа с Canvas.

Сегодня эти возможности рассматриваются как части современной Web Platform и используются совместно с HTML, CSS и JavaScript.

---
### Drag and Drop
```html
<div id="div1"
ondrop="return dropComplete(event)"
ondragover="return allowDropStatus(event)">
  <img src="drag.png" draggable="true"
    ondragstart="return dragInitialize(event)"
    width="250" height="150" id="drag1">
</div>
<div id="div2" ondrop="return dropComplete(event)"
ondragover="return allowDropStatus(event)">
</div>
```

Для полноценной обработки событий используются JavaScript-обработчики, например `dragstart`, `dragover` и `drop`.

[HTML\51drag-and-drop.html](../../HTML/51drag-and-drop.html)


---
### Пример. drag and drop

<iframe data-src="../examples/HTML/51drag-and-drop.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>
---
### File API

**File API** позволяет JavaScript работать с выбранными пользователем файлами непосредственно в браузере.

Например:

```html
<input type="file" id="file">
```

JavaScript может получить выбранный файл и прочитать его содержимое, не отправляя его на сервер автоматически.

Это используется, например, для:
- предварительного просмотра изображений;
- проверки размера файла;
- обработки данных перед загрузкой;
- построения drag-and-drop загрузчиков.

[HTML\52fileAPI.html](../../HTML/52fileAPI.html)


---
### Пример. File API, предпросмотр изображений

<iframe data-src="../examples/HTML/52fileAPI.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>
---
### Web Storage: `localStorage` и `sessionStorage`

Браузер предоставляет два простых хранилища:

- **`sessionStorage`** — данные доступны в рамках конкретного сеанса страницы/вкладки.
- **`localStorage`** — данные сохраняются между сеансами браузера.

Пример:

```javascript
localStorage.setItem("theme", "dark");
const theme = localStorage.getItem("theme");
localStorage.removeItem("theme");
localStorage.clear();
```

---
### Web Storage: `localStorage` и `sessionStorage`
Для `sessionStorage` используются те же основные методы:

```javascript
sessionStorage.setItem("key", "value");
sessionStorage.getItem("key");
sessionStorage.removeItem("key");
sessionStorage.clear();
```

> ⚠️ Web Storage подходит для небольших объёмов данных. Не следует хранить там пароли, токены и другую чувствительную информацию без понимания связанных с этим рисков.


---
### Пример. localStorage

<iframe data-src="../examples/HTML/53HTML5%20local%20Storage.html" width="100%" height="500px" style="border: 2px solid #ccc;"></iframe>
---
### Источники

- Полезные книги:
  - Изучаем HTML, XHTML и CSS (Head First). Элизабет Робсон, Эрик Фримен
  - HTML и CSS. Разработка и дизайн веб-сайтов. Джон Дакетт
- Источники и полезные ссылки:
  - http://www.w3.org/TR/html52/
  - https://html.spec.whatwg.org/multipage/
  - https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/HTML_basics
  - https://www.w3schools.com/html/
  - http://htmlbook.ru/html
