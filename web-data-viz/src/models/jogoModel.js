var database = require("../database/config");


function cadastrar(adversario, pontosNosso, pontosAdversario) {
    var instrucaoSql = `
        INSERT INTO jogo (adversario, pontos_nosso, pontos_adversario)
        VALUES ('${adversario}', ${pontosNosso}, ${pontosAdversario});
    `;
    return database.executar(instrucaoSql);
}


function contarJogos() {
    var instrucaoSql = `
        SELECT COUNT(id_jogo) AS totalJogos FROM jogo;
    `;
    return database.executar(instrucaoSql);
}


function contarVitorias() {
    var instrucaoSql = `
        SELECT COUNT(id_jogo) AS totalVitorias FROM jogo WHERE pontos_nosso > pontos_adversario;
    `;
    return database.executar(instrucaoSql);
}


function contarDerrotas() {
    var instrucaoSql = `
        SELECT COUNT(id_jogo) AS totalDerrotas FROM jogo WHERE pontos_nosso < pontos_adversario;
    `;
    return database.executar(instrucaoSql);
}


module.exports = {cadastrar, contarJogos, contarVitorias, contarDerrotas};



