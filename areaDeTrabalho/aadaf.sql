CREATE TABLE
    usuario (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        cpf VARCHAR(14) NOT NULL UNIQUE
    );

CREATE TABLE
    professor (
        id SERIAL PRIMARY KEY,
        id_usuario INT NOT NULL,
        FOREIGN KEY (id_usuario) REFERENCES usuario (id)
    );

CREATE TABLE
    turma (id SERIAL PRIMARY KEY, nome VARCHAR(255) NOT NULL);

CREATE TABLE
    aluno (
        id SERIAL PRIMARY KEY,
        id_usuario INT NOT NULL,
        id_turma INT NOT NULL,
        FOREIGN KEY (id_usuario) REFERENCES usuario (id),
        FOREIGN KEY (id_turma) REFERENCES turma (id)
    );

CREATE TABLE
    disciplina (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        id_professor INT NOT NULL,
        FOREIGN KEY (id_professor) REFERENCES professor (id)
    );

CREATE TABLE
    rel_disciplina_turma (
        id_turma INT NOT NULL,
        id_disciplina INT NOT NULL,
        PRIMARY KEY (id_turma, id_disciplina),
        FOREIGN KEY (id_turma) REFERENCES turma (id),
        FOREIGN KEY (id_disciplina) REFERENCES disciplina (id)
    );

INSERT INTO
    public.usuario (id, nome, cpf)
VALUES
    (1, 'Aluno 1', '123.456.789-08'),
    (2, 'Aluno 2', '123.456.789-09'),
    (3, 'Aluno 3', '123.456.789-10'),
    (4, 'Aluno 4', '123.456.789-11'),
    (5, 'Aluno 5', '123.456.789-12'),
    (6, 'Aluno 6', '123.456.789-13'),
    (7, 'Aluno 7', '123.456.789-14'),
    (8, 'Aluno 8', '123.456.789-15'),
    (9, 'Aluno 9', '123.456.789-16'),
    (10, 'Aluno 10', '123.456.789-17'),
    (11, 'Aluno 11', '123.456.789-18'),
    (12, 'Aluno 12', '123.456.789-19'),
    (13, 'Aluno 13', '123.456.789-20'),
    (14, 'Aluno 14', '123.456.789-21'),
    (15, 'Aluno 15', '123.456.789-22'),
    (16, 'Aluno 16', '123.456.789-23'),
    (17, 'Aluno 17', '123.456.789-24'),
    (18, 'Aluno 18', '123.456.789-25'),
    (19, 'Aluno 19', '123.456.789-26'),
    (20, 'Aluno 20', '123.456.789-27'),
    (21, 'Aluno 21', '123.456.789-28'),
    (22, 'Aluno 22', '123.456.789-29'),
    (23, 'Aluno 23', '123.456.789-30'),
    (24, 'Aluno 24', '123.456.789-31'),
    (25, 'Aluno 25', '123.456.789-32'),
    (26, 'Aluno 26', '123.456.789-33'),
    (27, 'Aluno 27', '123.456.789-34'),
    (28, 'Aluno 28', '123.456.789-35'),
    (29, 'Aluno 29', '123.456.789-36'),
    (30, 'Aluno 30', '123.456.789-37'),
    (31, 'Aluno 31', '123.456.789-38'),
    (32, 'Aluno 32', '123.456.789-39'),
    (33, 'Aluno 33', '123.456.789-40'),
    (34, 'Aluno 34', '123.456.789-41'),
    (35, 'Aluno 35', '123.456.789-42'),
    (36, 'Aluno 36', '123.456.789-43'),
    (37, 'Aluno 37', '123.456.789-44'),
    (38, 'Aluno 38', '123.456.789-45'),
    (39, 'Aluno 39', '123.456.789-46'),
    (40, 'Aluno 40', '123.456.789-47'),
    (41, 'Aluno 41', '123.456.789-48'),
    (42, 'Aluno 42', '123.456.789-49'),
    (43, 'Aluno 43', '123.456.789-50'),
    (44, 'Aluno 44', '123.456.789-51'),
    (45, 'Aluno 45', '123.456.789-52'),
    (46, 'Aluno 46', '123.456.789-53'),
    (47, 'Aluno 47', '123.456.789-54'),
    (48, 'Aluno 48', '123.456.789-55'),
    (49, 'Aluno 49', '123.456.789-56'),
    (50, 'Aluno 50', '123.456.789-57'),
    (51, 'Aluno 51', '123.456.789-58'),
    (52, 'Aluno 52', '123.456.789-59'),
    (53, 'Aluno 53', '123.456.789-60'),
    (54, 'Aluno 54', '123.456.789-61'),
    (55, 'Aluno 55', '123.456.789-62'),
    (56, 'Aluno 56', '123.456.789-63'),
    (57, 'Aluno 57', '123.456.789-64'),
    (58, 'Aluno 58', '123.456.789-65'),
    (59, 'Aluno 59', '123.456.789-66'),
    (60, 'Aluno 60', '123.456.789-67'),
    (61, 'Aluno 61', '123.456.789-68'),
    (62, 'Aluno 62', '123.456.789-69'),
    (63, 'Aluno 63', '123.456.789-70'),
    (64, 'Aluno 64', '123.456.789-71'),
    (65, 'Aluno 65', '123.456.789-72'),
    (66, 'Aluno 66', '123.456.789-73'),
    (67, 'Aluno 67', '123.456.789-74'),
    (68, 'João Silva', '123.456.789-00'),
    (69, 'Maria Souza', '234.567.890-01'),
    (70, 'Carlos Lima', '345.678.901-02'),
    (71, 'Ana Pereira', '456.789.012-03');

INSERT INTO
    public.professor (id, id_usuario)
VALUES
    (1, 68),
    (2, 69),
    (3, 70),
    (4, 71);

INSERT INTO
    public.turma (id, nome)
VALUES
    (1, 'Turma A'),
    (2, 'Turma B'),
    (3, 'Turma C');

INSERT INTO
    public.disciplina (id, nome, id_professor)
VALUES
    (1, 'Matemática', 1),
    (2, 'Português', 2),
    (3, 'História', 3),
    (4, 'Geografia', 4),
    (5, 'Ciências', 1);

INSERT INTO
    public.rel_disciplina_turma (id_turma, id_disciplina)
VALUES
    (1, 1), -- Turma A - Matemática
    (1, 2), -- Turma A - Português
    (1, 4), -- Turma A - Geografia
    (1, 5), -- Turma A - Ciências
    (2, 1), -- Turma B - Matemática
    (2, 2), -- Turma B - Português
    (2, 3), -- Turma B - História
    (2, 4), -- Turma B - Geografia
    (3, 1), -- Turma C - Matemática
    (3, 2), -- Turma C - Português
    (3, 3), -- Turma C - História
    (3, 5);

-- Turma C - Ciências
INSERT INTO
    public.aluno (id, id_usuario, id_turma)
VALUES
    (1, 5, 1),
    (2, 6, 1),
    (3, 7, 1),
    (4, 8, 1),
    (5, 9, 1),
    (6, 10, 1),
    (7, 11, 1),
    (8, 12, 1),
    (9, 13, 1),
    (10, 14, 1),
    (11, 15, 1),
    (12, 16, 1),
    (13, 17, 1),
    (14, 18, 1),
    (15, 19, 1),
    (16, 20, 1),
    (17, 21, 1),
    (18, 22, 1),
    (19, 23, 1),
    (20, 24, 1),
    (21, 25, 1),
    (22, 26, 1),
    (23, 27, 2),
    (24, 28, 2),
    (25, 29, 2),
    (26, 30, 2),
    (27, 31, 2),
    (28, 32, 2),
    (29, 33, 2),
    (30, 34, 2),
    (31, 35, 2),
    (32, 36, 2),
    (33, 37, 2),
    (34, 38, 2),
    (35, 39, 2),
    (36, 40, 2),
    (37, 41, 2),
    (38, 42, 2),
    (39, 43, 2),
    (40, 44, 2),
    (41, 45, 2),
    (42, 46, 2),
    (43, 47, 2),
    (44, 48, 2),
    (45, 49, 3),
    (46, 50, 3),
    (47, 51, 3),
    (48, 52, 3),
    (49, 53, 3),
    (50, 54, 3),
    (51, 55, 3),
    (52, 56, 3),
    (53, 57, 3),
    (54, 58, 3),
    (55, 59, 3),
    (56, 60, 3),
    (57, 61, 3),
    (58, 62, 3),
    (59, 63, 3),
    (60, 64, 3),
    (61, 65, 3),
    (62, 66, 3),
    (63, 67, 3),
    (64, 68, 3),
    (65, 69, 3),
    (66, 70, 3),
    (67, 71, 3);

select
    *
from
    aluno a
    join rel_disciplina_turma r on a.id_turma = r.id_turma
    join disciplina d on d.id = r.id_disciplina
where
    a.id = 54
    
select
    *
from
    disciplina
where
    id in (
        select
            id_disciplina
        from
            rel_disciplina_turma
        where
            id_turma = (
                select
                    id_turma
                from
                    aluno
                where
                    id = 52
            )
    )