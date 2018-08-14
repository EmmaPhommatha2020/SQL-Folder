/*
-- DAY 2

-- Create an affectedAreas table
CREATE TABLE affectedAreas
(
  id INTEGER PRIMARY KEY,
  name VARCHAR(40)
);

INSERT INTO affectedAreas (id, name) VALUES (1, 'Groin');
INSERT INTO affectedAreas (id, name) VALUES (2, 'Neck');
INSERT INTO affectedAreas (id, name) VALUES (3, 'Leg');
INSERT INTO affectedAreas (id, name) VALUES (4, 'Foot');
INSERT INTO affectedAreas (id, name) VALUES (5, 'Head');
INSERT INTO affectedAreas (id, name) VALUES (6, 'Hand');
INSERT INTO affectedAreas (id, name) VALUES (7, 'Wrist');
INSERT INTO affectedAreas (id, name) VALUES (8, 'Ankle');
INSERT INTO affectedAreas (id, name) VALUES (9, 'Elbow');

-- Recreate our data from yesterday
CREATE TABLE injuries
(
  id INTEGER PRIMARY KEY,
  name VARCHAR(40),
  description TEXT,
  tth INTEGER
);

INSERT INTO injuries (id, name, description, tth) VALUES (1, 'Pulled Groin', 'Results from putting too much stress on muscles in your groin and thigh.', 2);
INSERT INTO injuries (id, name, description, tth) VALUES (2, 'Cervical Radiculopathy', 'Pinched nerve.', 6);
INSERT INTO injuries (id, name, description, tth) VALUES (3, 'Herniated Disc', 'Soft substance on the inside of the disc (nucleus pulposi) is pushed out', 12);
INSERT INTO injuries (id, name, description, tth) VALUES (4, 'Femur Fracture', 'Bone fracture.', 8);
INSERT INTO injuries (id, name, description, tth) VALUES (5, 'Shattered Toenail', '20 percent of the US population suffers from onychorrhexis.', 3);
INSERT INTO injuries (id, name, description, tth) VALUES (6, 'Nintendo Thumb', 'Painful affliction of opposable digits.', 1);
INSERT INTO injuries (id, name, description, tth) VALUES (7, 'Amnesia', null, 1);
INSERT INTO injuries (id, name, description, tth) VALUES (8, 'Pulled Muscle', 'Results from putting too much stress on any muscles.', 2);

-- Pick up in SQL.key

-- Add a foreign key to injuries
ALTER TABLE injuries ADD COLUMN affectedAreaId INTEGER REFERENCES affectedAreas(id);

-- Update the existing injuries
UPDATE injuries SET affectedAreaId = 1 WHERE id = 1;
UPDATE injuries SET affectedAreaId = 2 WHERE id = 2;
UPDATE injuries SET affectedAreaId = 2 WHERE id = 3;
UPDATE injuries SET affectedAreaId = 3 WHERE id = 4;
UPDATE injuries SET affectedAreaId = 4 WHERE id = 5;
UPDATE injuries SET affectedAreaId = 6 WHERE id = 6;
UPDATE injuries SET affectedAreaId = 6 WHERE id = 7;
UPDATE injuries SET affectedAreaId = 1 WHERE id = 8;

-- Combine the two tables into one query (e.g. Tell us everything about body parts and injuries!)
SELECT *
FROM affectedAreas
JOIN injuries ON affectedAreas.id = injuries.affectedAreaId;

-- Describe all neck injuries:
SELECT *
FROM affectedAreas
JOIN injuries ON affectedAreas.id = injuries.affectedAreaId
WHERE affectedAreas.name = 'Neck';

-- How can we limit the amount of information we query?
SELECT injuries.id, injuries.name
FROM affectedAreas
JOIN injuries ON affectedAreas.id = injuries.affectedAreaId
WHERE affectedAreas.name = 'Neck';

-- How about counting them?
SELECT count(*)
FROM affectedAreas
JOIN injuries ON affectedAreas.id = injuries.affectedAreaId
WHERE affectedAreas.name = 'Neck';

-- What if there are no injuries related to a body part?
SELECT injuries.id, injuries.name
FROM affectedAreas
JOIN injuries ON affectedAreas.id = injuries.affectedAreaId
WHERE affectedAreas.name = 'Wrist';
-- No results

-- Another way to describe all neck injuries: The Subquery
SELECT *
FROM injuries
WHERE affectedAreaId in (SELECT id FROM affectedAreas WHERE name = 'Neck');

-- Count the number of possible injuries for each body part
SELECT affectedAreas.name, count(*)
FROM affectedAreas
JOIN injuries ON affectedAreas.id = injuries.affectedAreaId
GROUP BY affectedAreas.name;

-- Another way to count: The Subquery
SELECT name, (SELECT count(*) FROM injuries WHERE injuries.affectedAreaId = affectedAreas.id)
FROM affectedAreas;

-- What was the difference?

-- Delete rows
DELETE FROM injuries;
*/



