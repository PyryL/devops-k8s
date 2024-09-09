
CREATE TABLE pingpongs (
    id SERIAL PRIMARY KEY,
    counter INT NOT NULL
);

INSERT INTO pingpongs (counter) VALUES (0);
