Instale as dependencias

npm install typescript ts-node @types/node @types/express --save-dev
tsc --init

comando curl
curl -X POST http://192.168.0.80:3000/livros/criar \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Código Limpo","autor":"Robert C. Martin","ano":2008,"editoraId":1}'
