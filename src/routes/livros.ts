import { Router } from 'express'
import { listarLivros, criarLivro } from '../controllers/livroController'

const router = Router()

router.get('/listar', listarLivros)
// router.post('/criar', criarLivro)

export default router;