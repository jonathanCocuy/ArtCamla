import data from "../translation/textSpanish.json";
import NavBarLayout from "../layout/NavBarLayout";
import { useState } from "react";
import { useAuth } from "../auth/authProvider";
import { Navigate } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const auth = useAuth();

  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  };

  return (
    <NavBarLayout>
      <div>
        {data.signup.map((text: any) => (
          <form onSubmit={handleSubmit}>
            <h1>{text.signup}</h1>
            <input
              type="text"
              placeholder={text.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder={text.lastname}
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
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
            <button type="submit">{text.button}</button>
          </form>
        ))}
      </div>
    </NavBarLayout>
  );
}
