const Todos = require("../models/todos");
exports.getTodos = async (req, res) => {
    try {
        const todos = await Todos.findAll()
        res.status(200).json(todos);
    } catch (e) {
        res.status(500).json('Server error');
    }
}

exports.addTodo = async (req, res) => {
    try {
        const data = req.body;
        const todos = await Todos.create(data)
        res.status(200).json(todos);
    } catch (e) {
        res.status(500).json('Server error');
    }
}

exports.removeTodo = async (req,res) => {
    try {
        const id = req.params.id;
        const todo = await Todos.findByPk(id)
        await todo.destroy();
        res.status(204).json({});
    } catch (e) {
        res.status(500).json('Server error');
    }
}

exports.updateTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const {title, isCompleted} = req.body;
        const todo = await Todos.findByPk(id)
        todo.title = title;
        todo.isCompleted = isCompleted;
        await todo.save();
        res.status(201).json({todo});
    } catch (e) {
        res.status(500).json('Server error');
    }
}