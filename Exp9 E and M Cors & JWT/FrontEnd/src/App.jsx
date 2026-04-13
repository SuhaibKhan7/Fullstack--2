import React, { useState } from "react";
import api from "./api/axios";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");


  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", {
        username,
        password,
      });

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        setMessage("Login successful");
      } else {
        setMessage("Oh! Error" + res.data.error);
      }
    } catch (err) {
      setMessage("Server error");
    }
  };


  const callHello = async () => {
    try {
      const res = await api.get("/auth/hello");
      setMessage(res.data);
    } catch (err) {
      setMessage("Unauthorized");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login Page</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>Login</button>

      <br /><br />

      <button onClick={callHello}>Call Protected API</button>

      <h3>{message}</h3>
    </div>
  );
}

export default App;