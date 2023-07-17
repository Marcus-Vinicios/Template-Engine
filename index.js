const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const courses = [
    {
        id: 1,
        title: 'NodeJS completo do zero a maestria!',
        name: 'Matheus Battisti',
        about: 'Domine NodeJS e suas funcionalidades e torne-se um grande desenvolvedor!',
        class: 'JavaScript/NodeJS',
        price: parseFloat(45.00).toFixed(2).replace('.', ','),
    },
    {
        id: 2,
        title: 'Curso de Web-Moderno!',
        name: 'Leonardo Moura',
        about: 'Domine as grandes potências do desenvolvimento web e torne-se um grande desenvolvedor!',
        class: 'Desenvolvimento Web',
        price: parseFloat(45.00).toFixed(2).replace('.', ','),
    },
    {
        id: 3,
        title: 'Curso de PHP do zero a maestria!',
        name: 'Leonardo Moura',
        about: 'Domine PHP e suas funcinalidades e torne-se um grande desenvolvedor!',
        class: 'PHP',
        price: parseFloat(45.00).toFixed(2).replace('.', ','),
    },
]

app.get('/course/:id', (req, res) => {
    const course = courses[parseInt(req.params.id) - 1]
    res.render('course', { course })
})

app.get('/', (req, res) => {
    res.render('home', { courses })
})

app.listen(3000, () => {
    console.log('Running App')
})