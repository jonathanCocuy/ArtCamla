import data from "../../translation/textSpanish.json";
import NavBarLayout from "../../layout/NavBarLayout";
import Swal from "sweetalert2";
import "./SignUp.scss";
import { useState } from "react";
import { useAuth } from "../../auth/authProvider";
import { Navigate } from "react-router-dom";
import { API_URL } from "../../auth/constants";
import { AuthResponseError } from "../../interface/types";

export default function SignUp() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorResponse, setErrorResponse] = useState("");
  const auth = useAuth();

  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          name,
          password,
        }),
      });

      if (response.ok) {
        Swal.fire({
          title: "Usuario creado correctamente",
          text: "Puedes iniciar sesión",
          icon: "success",
        });
        console.log("Usuario creado correctamente");
      } else {
        console.error("Algo ocurrio");
        const json = (await response.json()) as AuthResponseError;
        setErrorResponse(json.body.error);
      }
    } catch (error) {
      console.log(error);
    }

    if (password !== confirmPassword) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Las contraseñas no coinciden",
      });
    }
  }

  return (
    <NavBarLayout>
      <div className="container_signup">
        {data.signup.map((text: any, index: number) => (
          <form onSubmit={handleSubmit} className="form_signup" key={index}>
            <h1 className="title_signup">{text.signup}</h1>
            {!!errorResponse && (
              <div className="errorMessage">{errorResponse}</div>
            )}
            <div className="container_inputs">
              <input
                className="input_signup"
                type="text"
                placeholder={text.name}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="input_signup"
                type="text"
                placeholder={text.username}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="input_signup"
                type="email"
                placeholder={text.email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="input_signup"
                type="password"
                placeholder={text.password}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className="input_signup"
                type="password"
                placeholder={text.cmpassword}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <div className="seepassword_signup">
                <input type="checkbox" />
                <label>{text.seepassword}</label>
              </div>
              <a href="www.google.com">{text.forgetpwd}</a>
              {!!errorResponse && (
                <div className="errorMessage">{errorResponse}</div>
              )}
              <button className="button_signup" type="submit">
                {text.button}
              </button>
            </div>
          </form>
        ))}
      </div>
    </NavBarLayout>
  );
}
