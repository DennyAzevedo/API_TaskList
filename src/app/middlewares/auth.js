import jwt from 'jsonwebtoken'
import { promisify } from 'util'
import authConfig from '../../config/auth'

export default async (req, res, next) => {
	const { authorization } = req.headers
	if (!authorization) {
		return res.status(401).json({ error: 'Token not provided' })
	}

	const token = authorization.replace('Bearer', '').trim()
	// const [bearer, token] = authorization.split(' ')
	// const [, token] = authorization.split(' ')

	try {
		//const data = jwt.verify(token, authConfig.secret)
		const data = await promisify(jwt.verify)(token, authConfig.secret)
		//console.log(data)
		//{ id: 1, iat: 1709941786, exp: 1710546586 } - resultado do console.log(data)
		//exp é uma informação em timestamp que indica a data de expiração do token
		//const { id } = data
		//req.userId = id
		req.userId = data.id
		return next()
	} catch (error) {
		return res.status(401).json({ error: 'Token invalid' })
	}
}