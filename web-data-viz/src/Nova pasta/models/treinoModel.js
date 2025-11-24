var database = require("../database/config");

function listar() {
    var instrucaoSql = `
     SELECT COUNT(id_treino) AS totalTreinos FROM treino; 
    `;
    return database.executar(instrucaoSql);
}

function cadastrar(data, descricao) {
    var instrucaoSql = `
        INSERT INTO treino (data_treino, descricao)
        VALUES ('${data}', '${descricao}');
    `;
    return database.executar(instrucaoSql);
}

module.exports = {listar,cadastrar};
