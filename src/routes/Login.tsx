import data from "../translation/textSpanish.json";
import NavBarLayout from "../layout/NavBarLayout";
import { useState } from "react";
import { useAuth } from "../auth/authProvider";
import { Navigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const auth = useAuth();

  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
  };

  return (
    <NavBarLayout>
      <div>
        {data.login.map((text: any) => (
          <form onSubmit={handleSubmit}>
            <h1>{text.login}</h1>
            <input
              type="text"
              placeholder={text.username}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder={text.password}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">{text.button}</button>
          </form>
        ))}
      </div>
    </NavBarLayout>
  );
}
