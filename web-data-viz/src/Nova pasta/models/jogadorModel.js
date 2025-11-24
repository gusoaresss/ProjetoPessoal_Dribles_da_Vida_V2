var database = require("../database/config");

function contarJogadores() {
    var instrucaoSql = `
        SELECT COUNT(id_jogador) AS totalJogadores FROM jogador;
    `;
    return database.executar(instrucaoSql);
}

function cadastrar(nome, posicao, idade, numero) {
    var instrucaoSql = `
    INSERT INTO jogador (nome, posicao, idade, numero)
        VALUES ('${nome}', '${posicao}', ${idade}, ${numero});
    `
    return database.executar(instrucaoSql);
}



module.exports = {cadastrar, contarJogadores};


