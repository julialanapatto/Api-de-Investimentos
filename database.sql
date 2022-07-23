DROP DATABASE IF EXISTS investimentos;

CREATE DATABASE investimentos;

USE investimentos;

CREATE TABLE clientes (
    cod_cliente INT PRIMARY KEY NOT NULL auto_increment,
    nome_cliente VARCHAR(30) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(100) NOT NULL

) ENGINE=INNODB;

CREATE TABLE acoes (
    cod_ativo INT PRIMARY KEY NOT NULL auto_increment,
    trade_name VARCHAR(30) NOT NULL,
    ticker VARCHAR(6) NOT NULL,
    valor_acao INT NOT NULL,
    qtde_ativo INT NOT NULL
) ENGINE=INNODB;

CREATE TABLE conta (
    conta_cliente INT PRIMARY KEY NOT NULL auto_increment,
    cod_cliente INT NOT NULL,
    saldo_conta DECIMAL(12,2) NOT NULL,

    FOREIGN KEY (cod_cliente) REFERENCES clientes (cod_cliente)
) ENGINE=INNODB;

CREATE TABLE vendas (
    id_venda INT PRIMARY KEY NOT NULL auto_increment,
    cod_cliente INT NOT NULL,
    cod_ativo INT NOT NULL,
    qtde_ativo_vendido INT NOT NULL,

    FOREIGN KEY (cod_cliente) REFERENCES clientes (cod_cliente),
    FOREIGN KEY (cod_ativo) REFERENCES acoes (cod_ativo)
) ENGINE=INNODB;

CREATE TABLE compras (
    id_compra INT PRIMARY KEY NOT NULL auto_increment,
    cod_cliente INT NOT NULL,
    cod_ativo INT NOT NULL,
    qtde_ativo_comprado INT NOT NULL,

    FOREIGN KEY(cod_cliente) REFERENCES clientes (cod_cliente),
    FOREIGN KEY(cod_ativo) REFERENCES acoes (cod_ativo)
) ENGINE=INNODB;


INSERT INTO investimentos.clientes (nome_cliente, email, senha) VALUES
    ("Julia", "juliaemail@gmail.com", "$3b111$D4bHgG3ATHy8e53pPqY48a91Yo.day/HP47qpPAASq0JpHPp8P0Al."),
    ("Lana", "lanaemail@yahoo.com", "$2a$10$C3aGfh2ZRVf7d64jJgS36e90Gz.xxg/GkB8WwNFFSd0WeHhSX9Zb"),
    ("João", "joaoemail@outlook.com", "$1y$53$C4bPqp1PW851q87JgS54890Gz.aat/IK90jJMqmahhaSX9Zb"),
    ("Pedro", "pedroemail@gmail.com", "62a$10$C3aGfh2ZRVf7d64jJgS36e90Gz.ppg/GkB8WwNFFSd0WeHhSX9Zb"),
    ("Ana", "anaemail@gmail.com", "$2a$10$b111$D4bHgG3AVf7d64j6e90Gz/GkFSd08554hSX9Zb"); 

INSERT INTO investimentos.conta (cod_cliente, saldo_conta) VALUES
    (1, 44084.51),
    (2, 17894.11),
    (3, 5581.58),
    (4, 4528.70),
    (5, 6228.50);

    INSERT INTO investimentos.acoes (trade_name, ticker, valor_acao, qtde_ativo) VALUES
    ("BRASKEM PNA", "BRKM5", 34.78, 10000),
    ("ELETROBRAS ON", "ELET3", 44.05, 20000),
    ("PETROBRAS PN", "PETR4", 27.96, 70000),
    ("VALE ON", "VALE3", 68.37, 1000),
    ("USIMINAS PNA", "USIM5", 8.38, 50000);

    INSERT INTO investimentos.vendas (cod_cliente, cod_ativo, qtde_ativo_vendido)  VALUES
    (1, 1, 1),
    (1, 2, 3),
    (1, 3, 7),
    (1, 4, 3),
	(1, 5, 1),
	(2, 1, 1),
    (2, 2, 6),
    (2, 3, 6),
    (2, 4, 1),
	(2, 5, 3),
	(3, 1, 8),
    (3, 2, 1),
    (3, 3, 3),
    (3, 4, 4),
	(3, 5, 1),
	(4, 1, 3),
    (4, 2, 2),
    (4, 3, 3),
    (4, 4, 1),
	(4, 5, 1),
	(5, 1, 1),
    (5, 2, 2),
    (5, 3, 3),
    (5, 4, 1),
	(5, 5, 2);

INSERT INTO investimentos.compras (cod_cliente, cod_ativo, qtde_ativo_comprado)  VALUES
	(1, 1, 20),
    (1, 2, 13),
    (1, 3, 37),
    (1, 4, 9),
	(1, 5, 2),
	(2, 1, 15),
    (2, 2, 10),
    (2, 3, 10),
    (2, 4, 11),
	(2, 5, 13),
	(3, 1, 10),
    (3, 2, 12),
    (3, 3, 9),
    (3, 4, 7),
	(3, 5, 8),
	(4, 1, 10),
    (4, 2, 12),
    (4, 3, 9),
    (4, 4, 7),
	(4, 5, 8),
	(5, 1, 10),
    (5, 2, 12),
    (5, 3, 9),
    (5, 4, 7),
	(5, 5, 8);