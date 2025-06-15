# 📚 Sistema de Gerenciamento de Biblioteca

Este projeto tem como objetivo desenvolver uma API utilizando TypeScript, com foco em operações CRUD para gerenciar livros e editoras. A API se conecta a um banco de dados relacional (MySQL), utilizando Sequelize como ORM.

---

## Objetivo

Desenvolver um sistema de gerenciamento de biblioteca utilizando a última versão do TypeScript.  
O foco está em criar um CRUD completo (Create, Read, Update, Delete), que se conecta a um banco de dados, podendo ser NoSQL ou SQL.

---

## Requisitos Funcionais

- [x] Disponibilizar uma API para gerenciar livros e editoras.
- [x] Permitir a criação, listagem, atualização e exclusão de livros.
- [x] Cada livro deve conter: `título`, `autor(a)`, `ISBN`, `ano de publicação`, `editora`.
- [x] Adicionar o relacionamento entre `Livro` e `Editora`:
  - Um livro pertence a uma editora.
  - Uma editora pode ter vários livros.

---

## Requisitos Técnicos

- [x] Projeto desenvolvido com a versão mais recente do **TypeScript**.
- [x] Integração com banco de dados SQL utilizando **MySQL** e **Sequelize**.
- [x] Uso de variáveis de ambiente com `.env` para configuração segura.
- [x] Testes realizados com Postman.

---

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- Sequelize
- MySQL
- dotenv
- Cors

---

## Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repo.git
   cd seu-repo

2. Instale as dependências
   ```bash
   npm install

3. Crie o arquivo .env
   ```bash
   PORT=3000
   DB_NAME=biblioteca
   DB_USER=root
   DB_PASS=
   DB_HOST=localhost

4. Inicie o servidor
  ```bash
  npm start

---

## Endpoints

### Livros
- GET /livros/listar → Lista todos os livros
- POST /livros/criar → Cadastra um novo livro
- PUT /livros/:id → Atualiza um livro existente
- DELETE /livros/:id → Deleta um livro

### Editoras
- GET /editoras → Lista todas as editoras
- POST /editoras → Cadastra uma nova editora
- PUT /editoras/:id → Atualiza uma editora
- DELETE /editoras/:id → Deleta uma editora

---

## Roadmap
- Listar todos os livros que contém em uma editora
- Desenvolver frontend
