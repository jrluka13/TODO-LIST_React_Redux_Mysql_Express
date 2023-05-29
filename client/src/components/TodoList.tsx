import React from "react";

import { ITodo } from "../interfaceTodo";
import { TodoItem } from "./TodoItem";
import { FormattedMessage } from "react-intl";

type TodoListProps = {
  todos: ITodo[];
  onToggle(id: string): void;
  onRemove: (id: string) => void;
  onEdit: (id: string) => void;
};

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onRemove,
  onToggle,
  onEdit,
}) => {
  if (todos.length === 0) {
    return (
      <p className="center">
        <FormattedMessage id="no-task" />
      </p>
    );
  }

  const removeHandler = (e: Event, id: string) => {
    e.preventDefault();
    onRemove(id);
  };

  const editHandler = (e: Event, id: string) => {
    e.preventDefault();
    onEdit(id);
  };

  return (
    <ul>
      {todos.map((todo) => {
        const classes = ["todo"];
        if (todo.isCompleted) {
          classes.push("completed");
        }
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle.bind(null, todo.id)}
            editHandler={(e) => editHandler(e, todo.id)}
            removeHandler={(e) => removeHandler(e, todo.id)}
          />
        );
      })}
    </ul>
  );
};
