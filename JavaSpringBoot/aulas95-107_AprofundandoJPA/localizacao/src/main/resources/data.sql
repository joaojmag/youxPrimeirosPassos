create table tb_cidade(
    id_cidade bigint not null primary key,
    nome varchar(50) not null,
    qtd_habitantes bigint
);

insert into tb_cidade
    (id_cidade, nome, qtd_habitantes)
values
    (1, 'São Paulosi', 12396372),
    (2, 'Fortaleza', 12354486),
    (3, 'Salvador', 9854266),
    (4, 'Porto Alegre', 4526687),
    (5, 'BH', 248741),
    (6, 'Plmas', 3698574),
    (7, 'Recife', 965325),
    (8, 'Natal', 74589),
    (9, 'Rio de Janeiro', 369852),
    (10, 'Brasilia', 78452),
    (11, 'Porto Velho', 102598);

--select * from tb_cidade where nome like '%as%'