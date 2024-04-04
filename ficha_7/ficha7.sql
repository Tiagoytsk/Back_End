create schema ficha7;

CREATE TABLE ficha7.People (
    Id INT AUTO_INCREMENT,
    Firstname VARCHAR(255),
    Lastname VARCHAR(255),
    Profession VARCHAR(255),
    Age INT,
    PRIMARY KEY (Id)
);

insert into ficha7.People(Firstname,Lastname,Profession,Age) values(Joao,Paulo,Agricultor,34);
insert into ficha7.People(Firstname,Lastname,Profession,Age) values(Ana,Malhoua,cantora,44);
insert into ficha7.People(Firstname,Lastname,Profession,Age) values(Tiago,Pedra,Estudante,24);
insert into ficha7.People(Firstname,Lastname,Profession,Age) values(Joao,Rodrigo,Advogado,54);