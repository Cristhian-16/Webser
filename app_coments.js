import express from 'express'
import hbs from 'hbs'
import 'dotenv/config'

import * as url from 'node:url'
import path from 'node:path'

/* Crea una ruta si no viente te devuelve un . */
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

/* Creo un servidor */
const app = express()

/* Puerto a escuchar */
const port = process.env.PORT

/* Configuraciones */
app.set('view engine', 'hbs')

hbs.registerPartials(path.join(__dirname, '/views/partials'))

/* Contenido Estatico */

/* Middlewares */
/* Como primer argumento la ruta / callback */
/* Si no se envia la ruta toma lo definido en el callback */
app.use(express.static(path.join(__dirname, 'public'))) // agarra la ruta /

/* Si no te viene nada te devuelve un . en este caso : ./public/*  */
app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname + '/public/index.html'))
  res.render('home', {
    name: 'Cristhian',
    title: 'Vacaciones en Shangai',
  })
})

app.get('/generic', (req, res) => {
  // res.sendFile(path.join(__dirname + '/public/template/generic.html'))
  res.render('generic')
})

/* elements */
app.get('/elements', (req, res) => {
  // res.sendFile(path.join(__dirname + '/public/template/elements.html'))
  res.render('elements')
})

/* Cualquier otro path */
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html')
})

/* El servidor escucha el puerto 3000 */
app.listen(port)
