// React
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

//Translation Service
import data from "../translation/textSpanish.json";

//Styles
import "./NavBarLayout.scss";

interface NavBarLayoutProps {
  children: React.ReactNode;
}

export default function NavBarLayout({ children }: NavBarLayoutProps) {
  // State for button active in navigation bar
  const location = useLocation();
  const [activeButtton, setActiveButton] = useState(location.pathname);

  useEffect(() => {
    setActiveButton(location.pathname);
  }, [location]);

  return (
    <>
      <header className="navegation_bar">
        <ul className="items">
          {data.header.map((text: any, index: number) => (
            <li className="items" key={index}>
              <Link
                to={
                  text.content === "Inicio"
                    ? "/"
                    : text.content === "Servicios"
                    ? "/services"
                    : text.content === "Productos"
                    ? "/products"
                    : text.content === "Contacto"
                    ? "/contact"
                    : text.content === "Iniciar Sesión"
                    ? "/login"
                    : text.content === "Registrarse"
                    ? "/signup"
                    : "/"
                }
                className={`items_options ${
                  activeButtton ===
                  (text.content === "Inicio"
                    ? "/"
                    : text.content === "Servicios"
                    ? "/services"
                    : text.content === "Productos"
                    ? "/products"
                    : text.content === "Contacto"
                    ? "/contact"
                    : text.content === "Iniciar Sesión"
                    ? "/login"
                    : text.content === "Registrarse"
                    ? "/signup"
                    : "/")
                    ? "active"
                    : ""
                }`}
              >
                {text.content}
              </Link>
            </li>
          ))}
        </ul>
      </header>
      <main>{children}</main>
    </>
  );
}
