import express from 'express'
import hbs from 'hbs'
import 'dotenv/config'

import * as url from 'node:url'
import path from 'node:path'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const app = express()

const port = process.env.PORT

app.set('view engine', 'hbs')

hbs.registerPartials(path.join(__dirname, '/views/partials'))

app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
  res.render('home', {
    name: 'Cristhian',
    title: 'Vacaciones en Shangai',
  })
})

app.get('/generic', (req, res) => {
  res.render('generic')
})

app.get('/elements', (req, res) => {
  res.render('elements')
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html')
})

app.listen(port)
