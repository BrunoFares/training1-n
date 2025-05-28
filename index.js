import express from 'express'
const cors = require('cors');

const app = express()
app.use(cors({
  origin: 'null'
}));

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/data', (req, res) => {
    let data = {
        name: 'bruno',
        number: '76 315 109',
        address: 'mansourieh'
    }
    res.send(data)
})

app.listen(3000)