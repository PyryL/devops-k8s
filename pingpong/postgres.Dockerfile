FROM postgres:16

COPY schema.sql /docker-entrypoint-initdb.d/init.sql
