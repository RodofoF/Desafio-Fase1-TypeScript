import { Router } from 'express'
import livroController from '../controllers/livroController'
const router = Router()

router.get('/listar', livroController.listarLivros)
router.post('/criar', livroController.criarLivro)

export default router;