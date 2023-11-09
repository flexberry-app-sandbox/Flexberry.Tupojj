docker build --no-cache -f SQL\Dockerfile.PostgreSql -t tupojj/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t tupojj/app ../..
