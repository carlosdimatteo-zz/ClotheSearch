-- PostgreSQL 9.6
-- database name : ClotheSearch
-- schema : public 
CREATE SEQUENCE brand_id_seq
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 9223372036854775807
  START 1
  CACHE 1;

  
CREATE SEQUENCE type_id_seq
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 9223372036854775807
  START 1
  CACHE 1;

CREATE TABLE brand
(
  id integer NOT NULL DEFAULT nextval('brand_id_seq'::regclass),
  name text,
  CONSTRAINT brand_id_pk PRIMARY KEY (id)
);



CREATE TABLE type
(
  id integer NOT NULL DEFAULT nextval('type_id_seq'::regclass),
  name text,
  CONSTRAINT type_id_pk PRIMARY KEY (id)
);

-- insert statements to fill tables
INSERT INTO brand (name) VALUES('GAP');
INSERT INTO brand (name) VALUES('Banana Republic');
INSERT INTO brand (name) VALUES('Boss');
INSERT INTO brand (name) VALUES('Hugo Boss');
INSERT INTO brand (name) VALUES('Taylor');
INSERT INTO brand (name) VALUES('Rebbeca Taylor');
INSERT INTO type (name) VALUES('Denim');
INSERT INTO type (name) VALUES ('Pants');
INSERT INTO type (name) VALUES ('Sweaters');
INSERT INTO type (name) VALUES ('Skirts');
INSERT INTO type (name) VALUES ('Dresses');