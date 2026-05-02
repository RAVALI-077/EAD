 import { useState } from "react";

function PasswordChecker() {
  const [p, setP] = useState("");
  const [strength, setStrength] = useState("");

  const check = (v) => {
    let c = 0;
    if (v.length >= 8) c++;
    if (/[A-Z]/.test(v)) c++;
    if (/[0-9]/.test(v)) c++;
    if (/[!@#$%^&*]/.test(v)) c++;

    if (c <= 2) setStrength("Weak");
    else if (c === 3) setStrength("Medium");
    else setStrength("Strong");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => {
          setP(e.target.value);
          check(e.target.value);
        }}
      />

      <h3>{strength}</h3>
    </div>
  );
}

export default PasswordChecker;
