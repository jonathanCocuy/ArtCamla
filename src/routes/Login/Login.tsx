import data from "../../translation/textSpanish.json";
import NavBarLayout from "../../layout/NavBarLayout";
import { useState } from "react";
import { useAuth } from "../../auth/authProvider";
import { Navigate } from "react-router-dom";

import "./Login.scss";

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
      <div className="container_login">
        {data.login.map((text: any) => (
          <form className="form_login" onSubmit={handleSubmit}>
            <h1 className="title_login">{text.login}</h1>
            <div className="container_inputs">
              <input
                className="input_login"
                type="text"
                placeholder={text.username}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="input_login"
                type="password"
                placeholder={text.password}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="button_login" type="submit">{text.button}</button>
            </div>
          </form>
        ))}
      </div>
    </NavBarLayout>
  );
}
