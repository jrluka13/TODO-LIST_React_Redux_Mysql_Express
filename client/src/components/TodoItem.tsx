import React from "react";
import { ITodo } from "../interfaceTodo";
import { FormattedMessage } from "react-intl";

type TodoItemProps = {
  todo: ITodo;
  onToggle: () => void;
  editHandler: (e: any) => void;
  removeHandler: (e: any) => void;
};

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  editHandler,
  removeHandler,
}) => {
  const classes = ["todo"];
  if (todo.isCompleted) {
    classes.push("completed");
  }
  return (
    <li className={classes.join(" ")} key={todo.id}>
      <label>
        <div>
          <input type="checkbox" checked={todo.isCompleted} onChange={onToggle} />
          <span>{todo.title}</span>
          <p>
            <FormattedMessage id="time-create" /> {todo.dateCreate}
          </p>
        </div>

        <div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <i className="material-icons yellow-text" onClick={(e) => editHandler(e)}>
              edit
            </i>
            <i className="material-icons red-text" onClick={(e) => removeHandler(e)}>
              delete
            </i>
          </div>
          {(todo.isCompleted && (
            <p>
              <FormattedMessage id="time-end" /> {todo.dateDelete}
            </p>
          )) || ''}
        </div>
      </label>
    </li>
  );
};
