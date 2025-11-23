var jogoModel = require("../models/jogoModel");



function cadastrar(req, res) {
    var adversario = req.body.adversario;
    var pontosNosso = req.body.pontos_nosso;
    var pontosAdversario = req.body.pontos_adversario;

    jogoModel.cadastrar(adversario, pontosNosso, pontosAdversario)
        .then(() => res.status(201).json({ mensagem: "Jogo registrado!" }))
        .catch(erro => {
            console.log("Erro ao cadastrar jogo:", erro);
            res.status(500).json(erro);
        });
}
function totalJogos(res) {
    jogoModel.contarJogos()
        .then(function (resultado) {
            res.status(200).json(resultado[0]);
        })
        .catch(function (erro) {
            console.log("Erro ao contar jogos:", erro);
            res.status(500).json(erro);
        });
}


function totalVitorias(res) {
    jogoModel.contarVitorias()
        .then(function (resultado) {
            res.status(200).json(resultado[0]);
        })
        .catch(function (erro) {
            console.log("Erro ao contar vitórias:", erro);
            res.status(500).json(erro);
        });
}

function totalDerrotas(res) {
    jogoModel.contarDerrotas()
        .then(function (resultado) {
            res.status(200).json(resultado[0]);
        })
        .catch(function (erro) {
            console.log("Erro ao contar derrotas:", erro);
            res.status(500).json(erro);
        });
}

module.exports = { cadastrar, totalJogos, totalVitorias, totalDerrotas};
