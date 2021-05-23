const express = require('express');
const bodyParser = require('body-parser').json()
const login = require('./rotas/login')
require('dotenv').config()

const app = express();

app.use(bodyParser);
app.use(login)


const PORT = process.env.PORT || 3306;


app.listen(PORT, () => console.log(`ouvindo na porta ${PORT}`))