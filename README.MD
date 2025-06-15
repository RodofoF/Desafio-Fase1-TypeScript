Instale as dependencias

npm install typescript ts-node @types/node @types/express --save-dev
tsc --init

CURL para Livros

curl -X POST http://192.168.0.80:3000/api/livros/criar \
  -H "Content-Type: application/json" \
  -d '{"title":"Código Limpo","author":"Robert C. Martin","year":2008,"ISBN":"12345678910","publisherId":1}'

curl -X PUT http://192.168.0.80:3000/api/livros/3 \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Novo Título do Livro","ano":2024}'

curl -X DELETE http://192.168.0.80:3000/api/livros/apagar/3

CURL para Editoras
curl -X POST http://192.168.0.80:3000/api/editoras/criar \
  -H "Content-Type: application/json" \
  -d '{"nome":"Editora Barueri"}'

curl -X PUT http://192.168.0.80:3000/api/livros/3 \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Novo Título do Livro","ano":2024}'

curl -X DELETE http://192.168.0.80:3000/api/livros/apagar/3


TODO
criar frontend
Criar arquivo .env para remover informações de senha do mysql por exemplo
tentar subir a aplicação em uma plataforma
preparar o readme
verificar se é possivel adicionar mais elementos do TS
Verificar com o professor se poderia ter utilizado o Express + TS, ou era para ser um projeto inteiro TS