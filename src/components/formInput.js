import { useState } from "react";

export function FormInput() {
  const [password, setPassword] = useState("");

  function onKeyPressed(e) {
    console.log(e.target.value); // sas
    setPassword(e.target.value); //
  }

  return (
    <div>
      {password === "12345" ? 
      (
        <div>Password hop le</div>
      ) : 
      (
        <div>Password ko hop le</div>
      )}
      Enter password:
      <input type="text" value={password} onChange={onKeyPressed} />
    </div>
  );
}
