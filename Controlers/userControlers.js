const User = require('../Models/userModel');
/*esta linha exporta a função para que ela
possa ser usada em outras partes do aplicativos*/
exports.getAllUsers = (req, res) => {
    //esta linha chama função
    User.getAllUsers((users) =>{
        /*depois que os dados do usuarios sao recuperados,
        o metodo é usado para renderizar a exibição. */
        res.render('index', {users}); 
    });
};

//chama uma função que recebe um parâmetro(req).
//carrega o userModel e executa o Script SQL.
//Na sequencia renderiza a tela EDIT
exports.getUserById = (req, res) => {
    const userId = req.params.id;
    User.getUserById(userId, (user) => {
        res.render('edit', { user });
    });
};
//Passa os dados para as constantes e no arquivo UserModel
//e executa o Script SQL passando os valores(ID<NOME<EMAIL)
exports.updateUser = (req, res) => {
    const userId = req.params.id;
    const updateUser = {
        name: req.body.name,
        email: req.body,email
    };
    User.updateUser(userId, updateUser, () => {
        res.redirect('/');
    });
};

exports.addUser = (req, res) => {
    const newUser = {
        name: req.body.name,
        email: req.body.email
    };
    User.addUser(newUser, () => {
        res.redirect('/');
    });
};