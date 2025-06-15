import { Request, Response } from "express";
import { ILivroInput } from "../interfaces/ILivroInput";
import Livro from "../models/Livro";
import Editora from "../models/Editora";

async function getAllBooks(req:Request, res: Response) {
    try {
        const livros = await Livro.findAll({
            include:[{model: Editora, as: 'editora'}]
        })
        res.status(200).json(livros);
    } catch (error) {
        console.error('Error ao listar livros', error)
        res.status(500).json({error: 'Erro ao listar livros'})
    }
}
async function getBookById(req:Request, res: Response) {
    try {
        const book = await Livro.findByPk(req.params.id)
        res.status(200).json(book)
    } catch (error) {
        console.error("There was a error to get the book by ID", error)
        res.status(500).json({message: "There was an error go get the book by ID"})
    }
}

async function postBook(req: Request, res: Response){
    try {
        const {titulo, autor, ano, editoraId}: ILivroInput = req.body;
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
    async function deleteBookById(req: Request, res: Response){
        try {
            const livro = await Livro.findByPk(req.params.id)
            if(!livro){
                return res.status(404).json({message: "Book not found."})
            }
            await livro.destroy()
            res.status(200).json({message: "The book has been deleted!"})
        } catch (error) {
            console.error('There was an error when trying to delete the book', error);
            res.status(500).json({message: "Internal server error"})
        }
    }
    async function updateBookById(req: Request, res: Response){
        try {
            const { titulo, autor, ano, editoraId}: Partial<ILivroInput> = req.body
            const livro = await Livro.findByPk(req.params.id)
            if(!livro){
                return res.status(404).json({message: "Book not found."})
            }
            await livro.update({titulo, autor, ano, editoraId})
            res.status(200).json(livro)
        } catch (error) {
            console.error('There were a error when you tryed update this book', error)
            res.status(500).json({message: "Internal server error"})
        }
    }
export default {
    getAllBooks,
    getBookById,
    postBook,
    deleteBookById,
    updateBookById
}