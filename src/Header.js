import React from "react";
import TodoTextInput from "./TodoTextInput";

const Header = ({ addTodo }) => {
  const handleSave = (text) => {
    if (text.length !== 0) {
      addTodo(text);
    }
  };

  return (
    <header className="header">
      <h1>Task Master</h1>
      <TodoTextInput
        newTodo
        onSave={handleSave}
        placeholder="What needs to be done?"
      />
    </header>
  );
};

export default Header;
