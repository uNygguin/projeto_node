const express = require('express');
const bodyParser = require('body-parser');
const userControler = require('./Controlers/userControlers');
const app = express();

//configura o EJS como mecanismo de visualização
app.set('view engine', 'ejs');

//middleware para parsing do body
app.use(bodyParser.urlencoded({extended: false}));

//rotas
app.get('/', userControler.getAllUsers);

app.get('/edit/:id', userControler.getUserById);
app.post('/edit/:id', userControler.updateUser);
app.get('/add', (req, res) => res.render('add'));
app.post('/add', userControler.addUser);

//iniciar o servidor
app.listen(2000, () => {
    console.log('Servidor rodando na porta 2000');
});