var treinoModel = require("../models/treinoModel");

function listar(req, res) {
    treinoModel.listar()
        .then(resultado => res.status(200).json(resultado))
        .catch(erro => {
            console.log("Erro ao listar treinos:", erro);
            res.status(500).json(erro);
        });
}

function cadastrar(req, res) {
 
    var data = req.body.data;
    var descricao = req.body.descricao;

    treinoModel.cadastrar( data, descricao)
        .then(() => res.status(201).json({ mensagem: "Treino cadastrado!" }))
        .catch(erro => {
            console.log("Erro ao cadastrar treino:", erro);
            res.status(500).json(erro);
        });
}

module.exports = {
    listar,
    cadastrar
};
