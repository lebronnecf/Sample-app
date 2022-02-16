const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/bonjour', (req, res) => {
  res.send('Bonjour le monde!')
})

app.get('/info', (req, res) => {
  res.send('Je suis juste une application de démonstration.')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
