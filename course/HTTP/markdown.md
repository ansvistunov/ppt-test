# Основы протокола HTTP
---
### HTTP в стеке протоколов TCP/IP
Протокол HTTP работает на самом верхнем уровне — **Прикладном (Application)**.

- **Application:** BGP, DHCP, DNS, **FTP, HTTP**, IMAP, POP, SMTP, SSH, TLS/SSL...
- **Transport:** TCP, UDP, DCCP, SCTP...
- **Internet:** IP (IPv4, IPv6), ICMP, IPsec...
- **Link:** ARP, PPP, Ethernet, DSL...

![Стек протоколов TCP/IP](https://commons.wikimedia.org/wiki/Special:FilePath/TCP-IP_Model_-_en.png)
<!-- источник: тематическая замена. В PDF на слайде есть таблица стека TCP/IP, но внешнего изображения нет; найденное изображение существует на Wikimedia Commons и соответствует четырёхуровневой модели TCP/IP. -->

---
### Версии протокола HTTP
- **HTTP/0.9** – 1990-1992 гг. (Упрощенная версия, только GET, нет заголовков).
- **HTTP/1.0** – 1996 г. (Появление заголовков, поддержка методов POST, HEAD).
- **HTTP/1.1** – 1999 г. (Длительные соединения, pipelining, хостинг виртуальных серверов). *Базовая версия, лежащая в основе современного веба.*
- **HTTP/2** – 2015 г. (Бинарный формат, сжатие заголовков, мультиплексирование). *На данный момент доминирующая версия.*
- **HTTP/3** – 2022 г. (Работает поверх UDP вместо TCP для еще большей скорости).

---
### Проблема HTTP/1.1 и решение в HTTP/2
- В HTTP/1.1 браузер открывал отдельное TCP-соединение для каждого файла (лимит ~6-8 соединений). Если один файл тормозил, остальные ждали (проблема *Head-of-line blocking*).
- **HTTP/2 решил это с помощью Мультиплексирования:**
Все запросы и ответы передаются вперемешку по **одному** TCP-соединению. Браузер не ждет загрузки картинки, чтобы запросить CSS.

![Отличие HTTP/1.1 от HTTP/2](https://commons.wikimedia.org/wiki/Special:FilePath/HTTP-1.1_vs._HTTP-2_vs._HTTP-3_Protocol_Stack.svg)
<!-- источник: тематическая замена. Исходный URL из Markdown не подтверждён; найденный файл Wikimedia Commons существует и непосредственно сравнивает HTTP/1.1, HTTP/2 и HTTP/3. -->

---
### HTTPS (HTTP Secure)
Чистый HTTP передает данные открытым текстом. Любой узел на пути может прочитать пароль или подменить данные. 
Сейчас **чистый HTTP практически не используется**.

**HTTPS = HTTP + TLS (бывший SSL)**
- Трафик шифруется (прочитать нельзя).
- Сервер доказает свою личность с помощью **Сертификата** (выдается удостоверяющим центром).
- Поисковики помечают сайты без HTTPS как небезопасные.

![Установление защищенного соединения HTTPS](https://commons.wikimedia.org/wiki/Special:FilePath/Abbreviated_TLS_1.2_Handshake.svg)
<!-- источник: тематическая замена. Исходный файл из Markdown — схема SSL handshake с one-way authentication — не удалось надёжно подтвердить как актуальный файл. Использована существующая на Wikimedia Commons схема TLS 1.2 handshake с серверным сертификатом. -->

---
### Программное обеспечение (Участники процесса)
- **Исходные серверы (Origin Servers)** — хранение ресурсов, обработка запросов.
- **Клиенты** — потребители услуг (браузеры, менеджеры закачек, поисковые роботы/краулеры).
- **Прокси, Кэши** — транспортные функции, кэширование для ускорения, распределение нагрузки (балансировщики).

![Схема с Прокси-сервером](https://commons.wikimedia.org/wiki/Special:FilePath/Proxy_concept_en.svg)
<!-- источник: точное тематическое соответствие; файл Proxy concept en.svg существует на Wikimedia Commons. -->

---
### Структура сообщений протокола
Любое HTTP-сообщение состоит из трех частей:
1. **Стартовая строка (Starting line)** — определяет тип сообщения (запрос или ответ).
2. **Заголовки (Headers)** — характеризуют тело сообщения, параметры передачи, кэширование, формат данных.
3. **Тело сообщения (Message Body)** — непосредственно передаваемые данные (HTML, JSON, картинки и т.д.). *Отделяется от заголовков пустой строкой (CRLF).*

Сообщения делятся на две группы: **Запросы** и **Ответы**.

![Структура HTTP запроса и ответа](https://commons.wikimedia.org/wiki/Special:FilePath/Http_request_telnet_ubuntu.png)
<!-- источник: тематическая замена. Файл существует на Wikimedia Commons и показывает HTTP request, response headers и response body; для данного слайда это ближе по смыслу, чем неподтверждённая исходная ссылка. -->

---
### Запросы: Методы и их свойства
Формат стартовой строки: `Метод URI HTTP/Версия`

**Важные свойства методов:**
- **Safe (Безопасный)** — не меняет данные на сервере (только `GET`, `HEAD`).
- **Idempotent (Идемпотентный)** — вызов 1 раз или 10 раз даст одинаковый результат на сервере (`GET`, `PUT`, `DELETE`). `POST` создаст 10 разных записей — он **не** идемпотентен.

---
### Основные методы:
- `GET` – получить ресурс (Safe, Idempotent)
- `POST` – создать ресурс (не Safe, не Idempotent)
- `PUT` – заменить ресурс целиком (не Safe, Idempotent)
- `PATCH` – частично изменить ресурс (не Safe, не Idempotent)
- `DELETE` – удалить ресурс (не Safe, Idempotent)

![Методы HTTP и CRUD](https://miro.medium.com/v2/resize%3Afit%3A1400/1%2ALheq3cKkj5hkEXIwkIGsiw.png)
<!-- источник: тематическая замена. Найдено актуальное изображение REST API Methods с соответствием Create/Read/Update/Delete ↔ POST/GET/PUT/DELETE; исходный URL Wikimedia не подтверждён. -->

---
### Пример: Запрос GET
```http
GET /wiki/страница HTTP/1.1
Host: ru.wikipedia.org
User-Agent: Mozilla/5.0 (X11; U; Linux i686; rv:1.9b5) Gecko/2008050509 Firefox/3.0b5
Accept: text/html
Connection: close
```
*Заголовок `Host` обязателен в HTTP/1.1, так как на одном IP может находиться много сайтов.*

---
### Ответы: Стартовая строка и Статусы
Формат стартовой строки: `HTTP/Версия КодСостояния Пояснение`

Классы кодов состояния:
- **1xx (Informational)** – информируют о процессе передачи.
- **2xx (Success)** – успешный запрос (200 OK).
- **3xx (Redirection)** – нужно обратиться по другому адресу (301, 302).
- **4xx (Client Error)** – ошибка со стороны клиента (404 Not Found, 403 Forbidden).
- **5xx (Server Error)** – ошибка на сервере (500 Internal Server Error).

---
![Коды состояний HTTP](https://dcpweb.co.uk/wp-content/uploads/2025/02/http-status-codes-v1-1024x1024.jpg)
<!-- источник: тематическая замена. Найдена актуальная инфографика с пятью классами HTTP status codes; URL изображения проверен через результат поиска. -->

---
### Пример: Ответ HTTP/1.1 200 OK
```http
HTTP/1.1 200 OK
Date: Wed, 11 Feb 2009 11:20:59 GMT
Server: Apache
X-Powered-By: PHP/5.2.4-2ubuntu5wm1
Last-Modified: Wed, 11 Feb 2009 11:20:59 GMT
Content-Language: ru
Content-Type: text/html; charset=utf-8
Content-Length: 1234
Connection: close

(далее следует запрошенная страница в HTML)
```
---
### Пример: Запрос POST
```http
POST /login HTTP/1.1
Host: www.example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 49

email=test%40test.com&password=secure&login=login
```
*Обратите внимание: тело запроса отделено пустой строкой от заголовков. Длина тела указана в `Content-Length`.*

---
### Механизм HTTP Cookie
Протокол HTTP stateless (не сохраняет состояние между запросами). Для поддержания сеансов используются **Cookies**.
1. Сервер отправляет заголовок `Set-Cookie` вместе с ответом.
2. Браузер сохраняет его локально.
3. При следующих запросах к этому серверу браузер автоматически добавляет заголовок `Cookie`.

![Обмен Cookie между клиентом и сервером](https://commons.wikimedia.org/wiki/Special:FilePath/HTTP_cookie_exchange.svg)
<!-- источник: точное тематическое соответствие; файл HTTP cookie exchange.svg существует на Wikimedia Commons. -->

---
### Другие возможности: Докачка и Кэширование
**Partial GET (Range-запросы):**
Позволяет скачивать файл по частям (для паузы/возобновления).
```http
GET /conf-2009.avi HTTP/1.0
Range: bytes=64397516-80496894
```
*Ответ: `206 Partial Content`*

**Условные GET (If-Modified-Since):**
Экономит трафик. Сервер отдаст тело только если файл изменился с указанной даты.
```http
If-Modified-Since: Wed, 21 Apr 2010 12:33:42 GMT
```
*Если не изменился: `304 Not Modified`*
---
### Другие возможности: Multipart и Авторизация
**Multipart/form-data:**
Используется для загрузки файлов. Тело запроса разбивается на части специальными разделителями (`boundary`).

**HTTP Basic Authentication:**
Сервер требует логин/пароль (статус `401 Unauthorized`). Клиент шлет заголовок:
`Authorization: Basic base64(login:password)`

> ⚠️ **ВНИМАНИЕ:** Base64 — это *кодировка*, а не шифрование! Любой может легко декодировать такую строку. Basic Auth применяется **только внутри защищенного HTTPS-соединения**. В современном вебе для авторизации чаще используются токены (например, Bearer Token / JWT).

![Схема Basic Authentication](https://commons.wikimedia.org/wiki/Special:FilePath/Wiki_basicAuth.jpg)
<!-- источник: тематическая замена. Файл Wiki basicAuth.jpg существует на Wikimedia Commons и прямо описан как Basic Authentication Block Diagram. -->

---
### Безопасность в браузере: CORS
- Браузеры имеют встроенную защиту: **Same-Origin Policy**. 
Скрипт с `site.com` не может сделать AJAX-запрос к `api.other-site.com` (кросс-доменный запрос заблокирован).

- **Как это решается (CORS - Cross-Origin Resource Sharing):**
Сервер `api.other-site.com` должен явно разрешить доступ, добавив в ответ специальный заголовок:
`Access-Control-Allow-Origin: https://site.com`

*Если этого заголовка нет, браузер выдаст ошибку в консоли, хотя сервер обработал запрос успешно.*

---
### Практика: HTTP взаимодействие через Telnet
Протокол HTTP — это обычный текст. Вы можете общаться с веб-сервером вручную, без браузера!

**Алгоритм для Windows:**
1. Запустить консоль (`Win+R` -> `cmd`).
2. Подключиться: `telnet www.ya.ru 80`
3. Включить отображение вводимых символов:
   - Нажать `Ctrl + ]`
   - Ввести `set localecho`, нажать Enter.
   - Снова нажать Enter.
4. Напечатать запрос вручную: *(В конце обязательно нажмите Enter дважды, чтобы отправить пустую строку, означающую конец заголовков).*

---
```http
GET / HTTP/1.1
Host: www.Ya.ru

```


![Терминал](https://commons.wikimedia.org/wiki/Special:FilePath/Http_request_telnet_ubuntu.png)
<!-- источник: тематическая замена. Файл существует на Wikimedia Commons и показывает реальный telnet-сеанс с HTTP request/response; он лучше соответствует теме слайда, чем Windows Terminal.png. -->
