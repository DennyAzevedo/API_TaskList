import { Router } from 'express'
//import User from './app/models/User'
import authMiddleware from './app/middlewares/auth'
import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
import TaskController from './app/controllers/TaskController'

const routes = new Router()

routes.post('/users', UserController.add)
//routes.put('/users', authMiddleware, UserController.update)
routes.post('/sessions', SessionController.add)

routes.use(authMiddleware)

routes.put('/users', UserController.update)
routes.post('/tasks', TaskController.add)
routes.get('/tasks', TaskController.index)
routes.put('/tasks/:id', TaskController.update)
routes.put('/tasks/:id/done', TaskController.done)
routes.put('/tasks/:id/undone', TaskController.undone)
routes.delete('/tasks/:id', TaskController.delete)

export default routes
