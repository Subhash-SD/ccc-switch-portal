import { useState } from "react";
import { useAuth } from "../auth/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: 100 }}>
      <h2>CCC Switch Management</h2>

      <input placeholder="Username"
        onChange={e => setUsername(e.target.value)} /><br/><br/>

      <input type="password" placeholder="Password"
        onChange={e => setPassword(e.target.value)} /><br/><br/>

      <button onClick={() => login(username, password)}>Login</button>
      <p><b>Guest:</b> any username without admin password</p>
    </div>
  );
}
