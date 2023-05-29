const {Router} = require('express')
const todoController = require('../controllers/todoController')

const router = Router();

router.get('/', todoController.getTodos);

router.post('/add', todoController.addTodo)

router.delete('/remove/:id', todoController.removeTodo)

router.put('/update/:id', todoController.updateTodo)

module.exports = router;