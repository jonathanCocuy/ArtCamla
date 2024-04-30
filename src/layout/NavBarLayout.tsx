// React
import { Link } from "react-router-dom";

//Translation Service
import data from "../translation/textSpanish.json";

//Styles
import "./NavBarLayout.scss";

interface NavBarLayoutProps {
  children: React.ReactNode;
}

export default function NavBarLayout({ children }: NavBarLayoutProps) {
  return (
    <>
      <header className="navegation_bar">
        <ul className="items">
          {data.header.map((text: any) => (
            <li className="items">
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
                className="items_options"
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
