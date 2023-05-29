const express = require('express');
const todolistRouter = require('./routes/todolist')
const bodyParser = require('body-parser');
const cors = require('cors')
const sequelize = require('./utils/mysqlConnection');

const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use('/', todolistRouter);

async function startConnecting() {
    try {
        await sequelize.sync();

        app.listen(8000, () => {
            console.log('app started')
        })
    } catch (e) {
        console.log(e)
    }
}

startConnecting();


