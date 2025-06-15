import { Router } from 'express'
import livroController from '../controllers/livroController'
const router = Router()

router.get('/listar', livroController.getAllBooks)
router.get('/listar/:id', livroController.getBookById)
router.post('/criar', livroController.postBook)
router.put('/editar/:id', livroController.putBookById)
router.delete('/apagar/:id', livroController.deleteBookById)

export default router;