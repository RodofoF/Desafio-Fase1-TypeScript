Instale as dependencias

npm install typescript ts-node @types/node @types/express --save-dev
tsc --init

comando curl
curl -X POST http://192.168.0.80:3000/livros/criar \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Código Limpo","autor":"Robert C. Martin","ano":2008,"editoraId":1}'

curl -X PUT http://192.168.0.80:3000/api/livros/3 \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Novo Título do Livro","ano":2024}'

curl -X DELETE http://192.168.0.80:3000/api/livros/apagar/3


TODO
Criar crud da editora
ajustar todos os nomes para o ingles no backend
criar frontend
Criar um getBookById e getEditoraByID
Criar arquivo .env para remover informações de senha do mysql por exemplo
tentar subir a aplicação em uma plataforma
preparar o readme
verificar se é possivel adicionar mais elementos do TS
Verificar quais dependencias são realmente necessárias
Verificar com o professor se poderia ter utilizado o Express + TS, ou era para ser um projeto inteiro TS