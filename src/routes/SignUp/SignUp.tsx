import data from "../../translation/textSpanish.json";
import NavBarLayout from "../../layout/NavBarLayout";
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
        console.log("El usuario se creo correctamente");
      } else {
        console.error("Algo ocurrio");
        const json = (await response.json()) as AuthResponseError;
        setErrorResponse(json.body.error);
      }
    } catch (error) {
      console.log(error);
    }

    if(password !== confirmPassword) {
      return 
    }
  }

  return (
    <NavBarLayout>
      <div>
        {data.signup.map((text: any) => (
          <form onSubmit={handleSubmit}> 
            <h1>{text.signup}</h1>
            {!!errorResponse && (
              <div className="errorMessage">{errorResponse}</div>
            )}
            <input
              type="text"
              placeholder={text.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder={text.username}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder={text.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder={text.password}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder={text.cmpassword}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {!!errorResponse && (
              <div className="errorMessage">{errorResponse}</div>
            )}
            <button type="submit">{text.button}</button>
          </form>
        ))}
      </div>
    </NavBarLayout>
  );
}
