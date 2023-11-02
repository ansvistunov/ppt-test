// JavaScript source code

"use strict"

var file;
var socket;
function handleFiles(list)
{
    file = list[0];
}
var btn = document.getElementById('btn1');

btn.onclick = function()
{
    if(!!file)
    {
        var txt = document.getElementById('adr');
        socket = new WebSocket(txt.value);
        socket.onerror = function(error) {
            console.log("Ошибка " + error.message);
        }

        socket.onopen = function() {
            console.log("Соединение установлено.");
            //console.log("Начата пересылка файла:"+file);
            socket.send(file);
        };
    }
}