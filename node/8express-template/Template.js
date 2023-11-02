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