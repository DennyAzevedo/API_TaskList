import { Router } from 'express'
//import User from './app/models/User'
import UserController from './app/controllers/UserController'


const routes = new Router()

routes.post('/users', UserController.add)

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
