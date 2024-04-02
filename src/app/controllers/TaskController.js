import Task from '../models/Task'
import * as Yup from 'yup'

class TaskController {
	async index(req, res) {
		const tasks = await Task.findAll({
			where: { user_id: req.userId }
		})
		return res.json(tasks)
	}
	async add(req, res) {
		const schema = Yup.object().shape({
			task: Yup.string().required()
		})
		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'Validation fails.' })
		}
		const { task } = req.body
		const newTask = await Task.create({
			task,
			user_id: req.userId
		})
		return res.json(newTask)
	}
	async update(req, res) {
		const schema = Yup.object().shape({
			task: Yup.string().required()
		})
		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'Validation fails.' })
		}
		const { task } = req.body
		const taskExists = await Task.findByPk(req.params.id)
		if (!taskExists) {
			return res.status(400).json({ error: 'Task not found.' })
		}
		await taskExists.update({ task })
		return res.json(taskExists)
	}
}

export default new TaskController()