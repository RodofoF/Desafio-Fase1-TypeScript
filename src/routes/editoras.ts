import {Router} from 'express'
import editoraController from '../controllers/editoraController'

const router = Router()

router.get('/listar', editoraController.getAllPublishers)
router.get('/listar/:id', editoraController.getPublisherById)
router.post('/criar', editoraController.postPublisher)
router.put('/editar/:id', editoraController.putPublisherById)
router.delete('/apagar/:id', editoraController.deletePublisherById)

export default router