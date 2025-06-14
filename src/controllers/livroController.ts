import { Request, Response } from "express";
import Livro from "../models/Livro";
import Editora from "../models/Editora";

async function listarLivros(req:Request, res: Response) {
    try {
        const livros = await Livro.findAll({
            include:[{model: Editora, as: 'editora'}]
        })
        res.json(livros);
    } catch (error) {
        console.error('Error ao listar livros', error)
        res.status(500).json({error: 'Erro ao listar livros'})
    }
}

async function criarLivro(req: Request, res: Response){
    try {
        const {titulo, autor, ano, editoraId} = req.body;
        const editora = await Editora.findByPk(editoraId)
            if(!editora) {
                return res.status(400).json(({ error: "Editora não encontrada"}))
            }
        const novoLivro = await Livro.create({ titulo, autor, ano, editoraId});
        res.status(201).json(novoLivro)
    } catch (error) {
        console.error('Error ao listar livros', error)
        res.status(500).json({error: 'Erro ao listar livros'})
    }
}
export default {
    listarLivros,
    criarLivro
}