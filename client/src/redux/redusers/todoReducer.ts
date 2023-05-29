import {ITodo} from "../../interfaceTodo";
import moment from "moment/moment";
import {ITodoReducerPayload} from "../../../interfaces/payloadReducer.interface";

const initialStore: ITodo[] = [];

export default function todoReducer(state = initialStore, action: ITodoReducerPayload) {
    switch (action.type) {
        case 'SET_TODOS':
            return [...state, ...(action.payload.todos || [])]
        case 'ADD_TODO':
            return [...state, action.payload.todo]
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.payload.id)
        case 'UPDATE_TODO_TITLE':
            return state.map(todo => {
                if (todo.id === action.payload.id)
                    todo.title = action.payload.title || ''
                return todo
            })
        case 'COMPLETE_HANDLER':
            return state.map(todo => {
                if (todo.id === action.payload.id)
                    todo.isCompleted = !todo.isCompleted
                if (todo.isCompleted)
                    todo.dateDelete = moment(Date.now()).format('YYYY-MM-DD HH:mm')

                return todo
            })
        default:
            return state;
    }
}