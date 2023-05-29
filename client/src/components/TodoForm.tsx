import React, { useRef, useEffect, useContext } from "react";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { SwitchContext } from "../context/SwitchContext";

interface TodoFormProps {
  onAdd(title: string): void;
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
  const ref = useRef<HTMLInputElement>(null);
  const { checked } = useContext(SwitchContext);

  const [placeholderInput, setPlaceholderInput] = useState("");

  useEffect(() => {
    if (!checked) {
      setPlaceholderInput("Введите название дела");
    } else {
      setPlaceholderInput("Enter the name of the case");
    }
  }, [setPlaceholderInput, checked]);

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      if (ref.current!.value.trim().length === 0) {
        return;
      }
      props.onAdd(ref.current!.value);
      ref.current!.value = "";
    }
  };

  return (
    <div className="input-field mt2">
      <input
        ref={ref}
        type="text"
        id="title"
        placeholder={placeholderInput}
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        <FormattedMessage id="enter-new-task" />
      </label>
    </div>
  );
};
