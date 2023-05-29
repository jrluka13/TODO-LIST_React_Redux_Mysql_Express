import {ITodo} from "../src/interfaceTodo";

interface IPayloadReducer {
    type: string
}

export interface ITodoPayload {
    todos?: ITodo[],
    todo?: ITodo,
    id?: string,
    title?: string
}

export interface ICheckReducerPayload extends IPayloadReducer{
    payload: string;
}

export interface ITodoReducerPayload extends IPayloadReducer{
    payload: ITodoPayload;
}