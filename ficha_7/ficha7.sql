ALTER USER 'root'@'127.0.0.1' IDENTIFIED WITH mysql_native_password BY 'Tiagom11$';
FLUSH PRIVILEGES;
create schema ficha7;

CREATE TABLE ficha7.People (
    Id INT AUTO_INCREMENT,
    Firstname VARCHAR(255),
    Lastname VARCHAR(255),
    Profession VARCHAR(255),
    Age INT,
    PRIMARY KEY (Id)
);

INSERT INTO ficha7.People(Firstname, Lastname, Profession, Age) VALUES('Joao', 'Paulo', 'Agricultor', 34);
INSERT INTO ficha7.People(Firstname, Lastname, Profession, Age) VALUES('Ana', 'Malhoua', 'cantora', 44);
INSERT INTO ficha7.People(Firstname, Lastname, Profession, Age) VALUES('Tiago', 'Pedra', 'Estudante', 24);
INSERT INTO ficha7.People(Firstname, Lastname, Profession, Age) VALUES('Joao', 'Rodrigo', 'Advogado', 54);