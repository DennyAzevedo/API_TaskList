import { Router } from 'express'
//import User from './app/models/User'
import authMiddleware from './app/middlewares/auth'
import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'

const routes = new Router()

routes.post('/users', UserController.add)
//routes.put('/users', authMiddleware, UserController.update)
routes.post('/sessions', SessionController.add)

routes.use(authMiddleware)

routes.put('/users', UserController.update)

/*
routes.get('/teste', (req, res) => res.json({ ok: true }))
routes.get('/testedb', async (req, res) => {
	const user = await User.create({
		name: 'Denny Azevedo',
		email: 'dennyazevedo@gmail.com',
		password_hash: '123456',
	})

	return res.json(user)
})
*/

export default routes
