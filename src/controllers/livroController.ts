import { Request, Response } from "express";
import { ILivroInput } from "../interfaces/ILivroInput";
import Book from "../models/Book";
import Publisher from "../models/Publisher";

async function getAllBooks(req:Request, res: Response) {
    try {
        const books = await Book.findAll({
            include:[{model: Publisher, as: 'publisher'}]
        })
        res.status(200).json(books);
    } catch (error) {
        console.error('Error to get all books', error)
        res.status(500).json({error: 'Error to get all books'})
    }
}
async function getBookById(req:Request, res: Response) {
    try {
        const book = await Book.findByPk(req.params.id,{include:[{model: Publisher, as: 'publisher'}]})
        res.status(200).json(book)
    } catch (error) {
        console.error("There was a error to get the book by ID", error)
        res.status(500).json({message: "There was an error go get the book by ID"})
    }
}

async function postBook(req: Request, res: Response){
    try {
        const {title, author, year, ISBN, publisherId }: ILivroInput = req.body;
        const publisher = await Publisher.findByPk(publisherId)
            if(!publisher) {
                return res.status(400).json(({ error: "Publisher not found."}))
            }
        const novoLivro = await Book.create({ title, author, year, ISBN, publisherId });
        res.status(201).json(novoLivro)
    } catch (error) {
        console.error('There was a error to post the book', error)
        res.status(500).json({error: 'There was a error to post the book'})
    }
}
    async function deleteBookById(req: Request, res: Response){
        try {
            const book = await Book.findByPk(req.params.id)
            if(!book){
                return res.status(404).json({message: "Book not found."})
            }
            await book.destroy()
            res.status(200).json({message: "The book has been deleted!"})
        } catch (error) {
            console.error('There was an error when trying to delete the book', error);
            res.status(500).json({message: "Internal server error"})
        }
    }
    async function putBookById(req: Request, res: Response){
        try {
            const { title, author, year, ISBN, publisherId}: Partial<ILivroInput> = req.body
            const book = await Book.findByPk(req.params.id)
            if(!book){
                return res.status(404).json({message: "Book not found."})
            }
            await book.update({title, author, year, ISBN, publisherId})
            res.status(200).json(book)
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
    putBookById
}