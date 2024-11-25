
const db = require('../DbConfig/db');

const User = {
    //esta linha define uma função chamada que recebe um unico argumento,
    getAllUsers: (callback) => {
        //esta linha declara uma cadeia de caracteres de consulta
        //SQL que seleciona todas as colunas () da tabela
        const sql = 'SELECT * FROM users';
        //esta linha executa a consulta SQL usando uma função
        db.query(sql, (err, results) => {
            //se oocorrer um erro durante a execução da consulta, o objeto sera gerado,
            // o que provavelmente interrompera o aplicativo ou dispara um manipulador de erros.
            if (err) throw err;
            //se a consulta for bem-sucedida, o objeto sera passado para a função
            callback(results);
        });
    },
    
    getUserById: (id, callback) => {
        const sql = 'SELECT * FROM users WHERE id = ?';
        db.query(sql, [id], (err, result) => {
            if (err) throw err;
            callback(result[0]);
        });
    },

    updateUser: (id, data, callback) => {
        const sql = 'UPDATE users SET ? WHERE id = ?';
        db.query(sql, [data, id], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },

    addUser: (data, callback) => {
        const sql = 'INSERT INTO users SET ?';
        db.query(sql, data, (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }
};

module.exports = User;