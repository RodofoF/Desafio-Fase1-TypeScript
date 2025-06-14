import { Router } from 'express'
import livroController from '../controllers/livroController'
const router = Router()

router.get('/listar', livroController.getAllBooks)
router.post('/criar', livroController.postBook)
router.put('/editar/:id', livroController.updateBookById)
router.delete('/apagar/:id', livroController.deleteBookById)

export default router;