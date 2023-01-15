import React, { memo } from "react";
function Todos({ todos, addTodos }) {
  console.log("child render");
  return (
    <>
      <h4>Add todos</h4>
      {todos.map((item, index) => (
        <p key={index}>item</p>
      ))}
      <button onClick={() => addTodos()}>Add todos Button</button>
    </>
  );
}
export default memo(Todos);
