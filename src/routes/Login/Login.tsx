import data from "../../translation/textSpanish.json";
import NavBarLayout from "../../layout/NavBarLayout";
import { useState } from "react";
import { useAuth } from "../../auth/authProvider";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "./Login.scss";
import Swal from "sweetalert2";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const auth = useAuth();

  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username || !password) {
      Swal.fire({
        title: "Error!",
        text: "Los campos estan vacios",
        icon: "error",
      });
    } else {
      
    }
  };

  console.log(auth);

  return (
    <NavBarLayout>
      <div className="container_login">
        {data.login.map((text: any, index: number) => (
          <form key={index} className="form_login" onSubmit={handleSubmit}>
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
              <button className="button_login" type="submit">
                {text.button}
              </button>
              <Link to="/signup">{text.signuplink}</Link>
            </div>
          </form>
        ))}
      </div>
    </NavBarLayout>
  );
}
