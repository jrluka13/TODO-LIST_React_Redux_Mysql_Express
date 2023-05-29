import React, {useEffect} from "react";
import {TodoForm} from "../components/TodoForm";
import {TodoList} from "../components/TodoList";
import {ITodo} from "../interfaceTodo";
import {api} from "../utils/axios";
import {v4} from "uuid";
import moment from "moment";
import {connect} from "react-redux";
import {ITodoReducerPayload} from "../../interfaces/payloadReducer.interface";
import {ADD_TODO, COMPLETE_HANDLER, REMOVE_TODO, SET_TODOS, UPDATE_TODO_TITLE} from "../redux/actions/actions";

declare var confirm: (question: string) => boolean;
declare var prompt: (text: string) => string;

const TodosPage: React.FC = (props: any) => {
    useEffect(() => {
        api.get('/').then(res => {
            const todos = res.data.map((el: ITodo) => {
                el.dateCreate = moment(el.dateCreate).format('YYYY-MM-DD HH:mm');
                el.dateDelete = moment(el.dateDelete).format('YYYY-MM-DD HH:mm');
                return el;
            })
            props.setTodos(todos);
        });
    }, [])

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            id: v4(),
            title: title,
            isCompleted: false,
            dateCreate: moment(Date.now()).format('YYYY-MM-DD HH:mm'),
            dateDelete: moment(Date.now()).format('YYYY-MM-DD HH:mm'),
        };

        api.post('/add', newTodo).then(() =>
            props.addTodo(newTodo)
        );

    };

    const toggleHandler = (id: string) => {
        props.toggleCompletelyHandler(id);
        props.todoReducer.forEach(async (todo: ITodo) => {
            if (todo.id === id) {
                await api.put(`/update/${id}`, todo);
                return;
            }
        })
    };

    const removeHandler = (id: string) => {
        const should = confirm("Вы уверены, что хотите удалить элемент?");

        if (should) {
            api.delete(`/remove/${id}`).then(() =>
                props.removeTodo(id));
        }
    };

    const editHandler = (id: string) => {
        const title = prompt("Измените текущее задание!");

        if (title) {
            props.updateTodoTitle(title, id);
            props.todoReducer.forEach(async (todo: ITodo) => {
                if (todo.id === id) {
                    await api.put(`/update/${id}`, todo);
                    return;
                }
            })
        }
    };

    return (
        <React.Fragment>
            <TodoForm onAdd={addHandler}/>

            <TodoList
                todos={props.todoState}
                onToggle={toggleHandler}
                onRemove={removeHandler}
                onEdit={editHandler}
            />
        </React.Fragment>
    );
};

function MapDispatchToProps(dispatch: (arg0: ITodoReducerPayload) => void) {
    return {
        setTodos: (value: ITodo[]) => dispatch({type: SET_TODOS, payload: {todos: value}}),
        addTodo: (value: ITodo) => dispatch({type: ADD_TODO, payload: {todo: value}}),
        removeTodo: (value: string) => dispatch({type: REMOVE_TODO, payload: {id: value}}),
        updateTodoTitle: (title: string, id: string) => dispatch({type: UPDATE_TODO_TITLE, payload: {title, id}}),
        toggleCompletelyHandler: (id: string) => dispatch({type: COMPLETE_HANDLER, payload: {id}})
    }
}

export default connect(state => state, MapDispatchToProps)(TodosPage);