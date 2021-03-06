/* CREAR USUARIO */
CREATE USER prueba PASSWORD '12345678';
ALTER ROLE prueba WITH SUPERUSER;
ALTER ROLE prueba WITH LOGIN;

/* CREAR DB POSGRESQL*/

CREATE DATABASE "gInventario"
    WITH 
    OWNER = prueba
    ENCODING = 'UTF8'
    LC_COLLATE = 'es_ES.UTF-8'
    LC_CTYPE = 'es_ES.UTF-8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

/* CREAR SESIONES */

CREATE SCHEMA IF NOT EXISTS  AUTHORIZATION postgres;
CREATE SCHEMA IF NOT EXISTS estudiante AUTHORIZATION postgres;
CREATE SCHEMA IF NOT EXISTS docente AUTHORIZATION postgres;
CREATE SCHEMA IF NOT EXISTS sistema AUTHORIZATION postgres;
CREATE SCHEMA IF NOT EXISTS auditoria AUTHORIZATION postgres;
CREATE SCHEMA IF NOT EXISTS catalogo AUTHORIZATION postgres;
CREATE SCHEMA IF NOT EXISTS generales AUTHORIZATION postgres;


SET search_path TO
pg_catalog, public, sesion, estudiante, docente, sistema, auditoria, catalogo, generales;

GRANT PRIVILEGES ON DATABASE Ignug TO prueba;