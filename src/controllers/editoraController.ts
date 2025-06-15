import { Request, Response } from "express";
import { IEditoraInput } from "../interfaces/IEditoraInput";
import Editora from "../models/Publisher";

async function getAllPublishers (req: Request, res: Response) {
    try {
        const publisher = await Editora.findAll()
        res.status(200).json(publisher)
    } catch (error) {
        console.error("There was an error to get all publishers", error)
        res.status(500).json({message: "There was an error to get all publishers"})
    }
}
async function getPublisherById(req:Request, res: Response) {
    try {
        const publisher = await Editora.findByPk(req.params.id)
        res.status(200).json(publisher)
    } catch (error) {
        console.error("There was a error to get the publisher by ID", error)
        res.status(500).json({message: "There was an error go get the publisher by ID"})
    }   
} 
async function postPublisher(req:Request, res: Response) {
    try {
        const {name}: IEditoraInput = req.body;
        const newPublisher = await Editora.create({name})
        res.status(201).json(newPublisher)
    } catch (error) {
        console.error("There was a error to post a new publisher", error)
        res.status(500).json({message: "There was a error to post a new publisher"})
    }
}
async function deletePublisherById(req:Request, res: Response) {
    try {
        const publisher = await Editora.findByPk(req.params.id)
        if(!publisher){
            return res.status(404).json({message: "Publisher not found."})
        }
        await publisher.destroy()
        res.status(200).json({message: "Publisher has been deleted!"})
    } catch (error) {
        console.error('There was an error when trying to delete the publisher', error);
        res.status(500).json({message: "Internal server error"})
    }
}
async function putPublisherById(req:Request, res: Response) {
    try {
        const {name}: IEditoraInput = req.body
        const publisher = await Editora.findByPk(req.params.id)
        if (!publisher) {
            return res.status(404).json({message: "Publisher not found!"})
        }
        await publisher.update({name})
        res.status(200).json(publisher)
    } catch (error) {
            console.error('There were a error when you tryed update this publisher', error)
            res.status(500).json({message: "Internal server error"})
    }
}
export default {
    getAllPublishers,
    getPublisherById,
    postPublisher,
    deletePublisherById,
    putPublisherById
}