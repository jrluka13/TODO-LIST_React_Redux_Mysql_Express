export interface ITodo {
    title: string,
    id: string,
    isCompleted: boolean,
    dateCreate?: Date | string,
    dateDelete?: Date | string
}
