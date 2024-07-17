CREATE TABLE user (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(80),
    email VARCHAR(80),
    PRIMARY KEY (id)
);

CREATE TABLE project (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(80),
    description TEXT,
    stack TEXT,
    img VARCHAR(250),
    link VARCHAR(250),
    PRIMARY KEY (id)
);

CREATE TABLE comment (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    text TEXT,
    user_id INT UNSIGNED NOT NULL,
    project_id INT UNSIGNED NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_user_comment
        FOREIGN KEY (user_id)
        REFERENCES user(id),
    CONSTRAINT fk_project_comment
        FOREIGN KEY (project_id)
        REFERENCES project(id)
);
