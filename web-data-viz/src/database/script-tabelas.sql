CREATE TABLE usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL UNIQUE,
    senha_hash VARCHAR(255) NOT NULL,
    data_nascimento DATE
);

CREATE TABLE jogador (
    id_jogador INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(200) NOT NULL,
    posicao VARCHAR(50) NOT NULL,
    idade INT NOT NULL,
    numero INT NOT NULL,
    id_usuario INT, 
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario));


CREATE TABLE treino (
    id_treino INT AUTO_INCREMENT PRIMARY KEY,
    id_jogador INT NOT NULL,
    id_usuario INT, -- quem registrou
    data DATE NOT NULL,
    descricao TEXT NOT NULL,
    FOREIGN KEY (id_jogador) REFERENCES jogador(id_jogador),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario));

CREATE TABLE jogo (
    id_jogo INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT, -- quem registrou
    adversario VARCHAR(200) NOT NULL,
    pontos_nosso INT NOT NULL,
    pontos_adversario INT NOT NULL,
    resultado VARCHAR(45),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

-
CREATE TABLE jogador_jogo (
    id_jogador INT NOT NULL,
    id_jogo INT NOT NULL,
    PRIMARY KEY (id_jogador, id_jogo),
    FOREIGN KEY (id_jogador) REFERENCES jogador(id_jogador),
    FOREIGN KEY (id_jogo) REFERENCES jogo(id_jogo));
