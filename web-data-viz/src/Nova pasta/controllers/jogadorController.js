var jogadorModel = require("../models/jogadorModel");


function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var posicao = req.body.posicaoServer;
    var idade = req.body.idadeServer;
    var numero = req.body.numeroServer;
   

    if (!nome || !posicao || !idade || !numero) {
        return res.status(400).json({ erro: "Preencha todos os campos!" });
    }

    jogadorModel.cadastrar(nome, posicao, idade, numero)
        .then(function () {
            res.status(201).json({ mensagem: "Jogador cadastrado com sucesso!" });
        })
        .catch(function (erro) {
            console.log("Erro ao cadastrar jogador:", erro);
            res.status(500).json(erro);
        });
}

function listarTreino(req, res){
    jogadorModel.listarTreino()
    .then(function (resultado){
        res.status(200).json(resultado)
    })
    .catch(function (erro){
          console.log("Erro ao listar treino dos jogadores:", erro);
            res.status(500).json(erro);
    })
}

function totalJogadores(req, res) {
    jogadorModel.contarJogadores()
        .then(function (resultado) {
            res.status(200).json(resultado[0]); 
        })
        .catch(function (erro) {
            console.log("Erro ao contar jogadores:", erro);
            res.status(500).json(erro);
        });}

module.exports = {cadastrar, listarTreino, totalJogadores};
