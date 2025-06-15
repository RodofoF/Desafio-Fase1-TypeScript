# 📚 Sistema de Gerenciamento de Biblioteca

Este projeto é uma atividade da PÓS-TECH em FULLSTACK da primeira fase atividade de TypeScript. Tem como objetivo desenvolver uma API utilizando TypeScript, com foco em operações CRUD para gerenciar livros e editoras. A API se conecta a um banco de dados relacional (MySQL), utilizando Sequelize como ORM.

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

## Pré-requisitos

1. Ter o **XAMPP instalado** e o **MySQL iniciado**.
2. Criar o banco de dados manualmente:

   ### 💾 Criando o banco `biblioteca` via phpMyAdmin:

   - Acesse `http://localhost/phpmyadmin`
   - Clique em "Novo" e crie um banco com o nome:
     ```sql
     CREATE DATABASE biblioteca;
     ```

   > O Sequelize criará automaticamente as tabelas `books` e `publishers`.

---

## Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/RodofoF/Desafio-Fase1-TypeScript.git
   cd Desafio-Fase1-TypeScript

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
- GET /livros/listar/:id → Lista um livro por ID
- POST /livros/criar → Cadastra um novo livro
- PUT /livros/editar/:id → Atualiza um livro existente por ID
- DELETE /livros/apagar/:id → Deleta um livro por ID

### Editoras
- GET /editoras/listar → Lista todas as editoras
- GET /editoras/listar/:id → Lista uma editora por ID
- POST /editoras/criar → Cadastra uma nova editora
- PUT /editoras/editar/:id → Atualiza uma editorapor ID
- DELETE /editoras/apagar/:id → Deleta uma editora por ID

---

## Roadmap
- Listar todos os livros que contém em uma editora
- Coloar o código inteiro em inglês, como mudar nomes de variáveis e endpoints
- Desenvolver frontend
