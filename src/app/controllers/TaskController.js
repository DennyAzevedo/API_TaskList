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
	async done(req, res) {
		const task = await Task.findByPk(req.params.id)
		if (!task) {
			return res.status(400).json({ error: 'Task not found.' })
		}
		await task.update({ check: true })
		return res.json(task)
	}
	async undone(req, res) {
		const task = await Task.findByPk(req.params.id)
		if (!task) {
			return res.status(400).json({ error: 'Task not found.' })
		}
		await task.update({ check: false })
		return res.json(task)
	}
	async delete(req, res) {
		const task = await Task.findByPk(req.params.id)
		if (!task) {
			return res.status(400).json({ error: 'Task not found.' })
		}
		if (task.user_id !== req.userId) {
			return res.status(401).json({ error: 'You can only delete your tasks.' })
		}
		await task.destroy()
		return res.json({ message: 'Task deleted.' })
	}
}

export default new TaskController()