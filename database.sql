DROP DATABASE IF EXISTS investimentos;

CREATE DATABASE investimentos;

USE investimentos;

CREATE TABLE clientes (
    cod_cliente INT PRIMARY KEY NOT NULL auto_increment,
    nome_cliente VARCHAR(30) NOT NULL
    
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


INSERT INTO investimentos.clientes (nome_cliente) VALUES
    ("Julia"),
    ("Lana"),
    ("João"),
    ("Pedro"),
    ("Ana");

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
    (1, 1, 5),
    (1, 2, 2),
    (1, 3, 3),
    (1, 4, 4),
    (2, 1, 1),
    (3, 3, 5),
    (4, 1, 1),
    (4, 2, 3),
    (5, 3, 1),
    (5, 5, 8);

     INSERT INTO investimentos.compras (cod_cliente, cod_ativo, qtde_ativo_comprado)  VALUES
    (1, 1, 15),
    (1, 2, 7),
    (1, 3, 8),
    (1, 4, 10),
    (2, 1, 5),
    (3, 3, 9),
    (4, 1, 2),
    (4, 2, 7),
    (5, 3, 5),
    (5, 5, 10);