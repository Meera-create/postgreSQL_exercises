CREATE TABLE rating (
	rating_id SERIAL NOT NULL PRIMARY KEY,
	rating_value INTEGER NOT NULL UNIQUE CHECK(rating_value>=0 && rating_value<=10)
	title VARCHAR (255) NOT NULL UNIQUE ,
	contents VARCHAR(255) NOT NULL
)

INSERT INTO rating (rating_value,title,contents)
VALUES
('3','Shawshank Redemption','movie'),
('5','Finding Nemo','movie'),
('2',' Tarzan','movie')

SELECT * FROM rating

CREATE TABLE reviewer(
	reviewer_id SERIAL NOT NULL PRIMARY KEY,
	reviewer_name VARCHAR(255) ,
	registered_date VARCHAR(255),
	points VARCHAR(255) CHECK(points=<10000)
)

SELECT * FROM reviewer


ALTER TABLE rating
ADD reviewer_id INTERGER

CREATE TABLE field(
	rating_id SERIAL NOT NULL PRIMARY KEY,
	rating_value INTEGER NOT NULL CHECK(rating_value>=0 AND rating_value<=10),
	title VARCHAR(100) NOT NULL UNIQUE,
	content VARCHAR(100) NOT NULL CHECK(length(content)<=10)
)

SELECT * FROM field

INSERT INTO field (rating_id,rating_value,title,content)
VALUES ('1','4','Pocahantas','movie'),
       ('2','3','Tangled','movie'),
	   ('3','5','Mulan','movie'),
	   ('4','2','Anastasia','movie')

SELECT * FROM field

SELECT title,budget,release_date FROM movie


INSERT INTO movie (homepage) VALUES (NULL)


SELECT title, homepage FROM movie
WHERE length(homepage)>1

SELECT runtime,title FROM movie
WHERE runtime>180


SELECT title,vote_average,revenue
FROM movie
WHERE revenue IS NOT NULL
ORDER BY revenue DESC
LIMIT 1



SELECT title,vote_average,revenue
FROM movie
WHERE revenue IS NOT NULL
ORDER BY revenue ASC
LIMIT 1

SELECT vote_average
FROM movie
WHERE vote_average>8

SELECT release_date,title
FROM movie
WHERE release_date BETWEEN '2015-08-01' AND '2016-01-01'

SELECT release_date,title
FROM movie
WHERE release_date BETWEEN '2016-01-01' AND '2023-08-28'


SELECT popularity
FROM movie
WHERE popularity IS NOT NULL
ORDER BY popularity DESC
LIMIT 13

SELECT title,vote_average,release_date
FROM movie
WHERE vote_average>9 AND release_date <'2020-01-01'

SELECT * FROM keyword
SELECT * FROM person
SELECT * FROM movie

UPDATE keyword
SET keyword_name='horror' WHERE keyword_name='terror'

UPDATE person
SET person_name='horror' WHERE person_name='terror'

UPDATE movie
SET overview='horror' , title='horror' ,tagline='horror'
WHERE overview='terror' OR title='terror' OR tagline='terror'


UPDATE keyword
SET keyword_name='secret keyword' WHERE keyword_name='horror'

UPDATE person
SET person_name='secret keyword' WHERE person_name='horror'

UPDATE movie
SET overview='secret keyword' , title='secret keyword' ,tagline='secret keyword'
WHERE overview='horror' OR title='horror' OR tagline='horror'


UPDATE person
SET person_name='Robert Fitzgerald Diggs' WHERE person_name='RZA'

UPDATE movie
SET homepage='http://www.avatarmovie.com/'
WHERE revenue>1000000

SELECT * FROM movie_company
WHERE movie_id=13

SELECT * FROM movie
WHERE title='Forrest Gump'
13

UPDATE production_company
SET company_name='Paramount+'
WHERE company_id=4

SELECT * FROM production_company
WHERE company_name='Paramount+' OR company_name='Paramount'


UPDATE movie
SET homepage='Paramount+ streaming service'
SELECT movie_id FROM movie_company 
WHERE company_id='4' OR company_id='6033'

SELECT movie_company.movie_id,movie_company.company_id,movie.homepage,movie.title
FROM movie
JOIN movie_company
ON movie_company.movie_id=movie.movie_id
WHERE company_id='4' OR company_id='6033'
UPDATE 
SET homepage='Paramount streaming service'

**
UPDATE movie
SET homepage='Paramount streaming service'
FROM movie_company
WHERE movie_company.company_id='4' OR movie_company.company_id='6033' 


SELECT homepage,title FROM movie
WHERE homepage='Paramount streaming service'



DELETE FROM movie_keywords
WHERE keyword_id=839

DELETE FROM keyword
WHERE keyword_id=839

SELECT*FROM movie_keywords
WHERE keyword_id=839



DELETE FROM movie_company
WHERE company_id=245

DELETE FROM production_company
WHERE company_name='Cowboy Films'

SELECT * FROM production_company
WHERE company_name='Cowboy Films'




ALTER TABLE movie DISABLE TRIGGER ALL

DELETE FROM movie
WHERE revenue=0

ALTER TABLE movie ENABLE TRIGGER ALL


SELECT * FROM person

ALTER TABLE person DISABLE TRIGGER ALL

DELETE FROM person
WHERE person_name='Lucy Liu'

ALTER TABLE person ENABLE TRIGGER ALL

ALTER TABLE movie_cast DISABLE TRIGGER ALL

DELETE FROM movie_cast
WHERE person_id=238


ALTER TABLE movie_cast ENABLE TRIGGER ALL

SELECT * FROM person
WHERE person_id=238


SELECT * FROM movie_languages

TRUNCATE TABLE movie_languages


**MOVIES PRACTICAL**

SELECT title FROM movie

SELECT COUNT(*) FROM genre

SELECT title,revenue FROM movie
WHERE title IS NOT NULL AND revenue IS NOT NULL
ORDER BY revenue DESC
LIMIT 1

SELECT title,runtime FROM movie
WHERE runtime>200

SELECT budget, title FROM movie
WHERE budget IS NOT NULL AND title IS NOT NULL
ORDER BY budget DESC
LIMIT 10

SELECT COUNT(*) FROM language

SELECT title,character_name  FROM movie
LEFT JOIN movie_cast
ON movie.movie_id=movie_cast.movie_id
WHERE movie.title='Star Wars'

SELECT character_name,person_name
FROM person
INNER JOIN movie_cast
ON movie_cast.person_id=person.person_id
WHERE person_name='Johnny Depp'

SELECT genre_name
FROM movie
INNER JOIN movie_genres
ON movie.movie_id=movie_genres.movie_id
INNER JOIN genre
ON movie_genres.genre_id=genre.genre_id
WHERE movie.title='Star Wars'

SELECT COUNT (person_id)
FROM movie
INNER JOIN movie_cast
ON movie.movie_id=movie_cast.movie_id
WHERE movie.title='Spider-Man 3' AND movie_cast.character_name='Test Site Technician'


