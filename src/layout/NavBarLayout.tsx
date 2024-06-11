// React
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import IconShoppingCart from "../images/shopping-cart2-icon.png";
import IconLogin from "../images/login.png";
import BackgroundLogo from "../images/background-image-logo.png";
import Logo from "../images/logo.png";

//Translation Service
import data from "../translation/textSpanish.json";

import { useAuth } from "../auth/authProvider";

//Styles
import "./NavBarLayout.scss";

interface NavBarLayoutProps {
  children: React.ReactNode;
}

export default function NavBarLayout({ children }: NavBarLayoutProps) {
  // State for button active in navigation bar
  const location = useLocation();
  const [activeButtton, setActiveButton] = useState(location.pathname);
  const auth = useAuth();

  useEffect(() => {
    setActiveButton(location.pathname);
  }, [location]);

  return (
    <>
      <header className="navegation_bar">
        <div
          style={{
            backgroundImage: `url("${BackgroundLogo}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100px",
            height: "100px",
            zIndex: 99,
            position: "fixed",
            top: 0,
            left: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            paddingTop: "10px",
          }}
        >
          <img
            src={Logo}
            alt="shopping-cart-icon"
            className="shopping_cart_icon"
            style={{width: "50px"}}
          />
        </div>
        <ul className="items">
          <div className="menu_items">
            {data.header.map((text: any, index: number) => (
              <li className="items_list" key={index}>
                <Link
                  to={
                    text.content === "Inicio" || text.content === "Home"
                      ? "/"
                      : text.content === "Servicios" ||
                        text.content === "Services"
                      ? "/services"
                      : text.content === "Productos" ||
                        text.content === "Products"
                      ? "/products"
                      : text.content === "Contacto" ||
                        text.content === "Contact"
                      ? "/contact"
                      : "/"
                  }
                  className={`items_options ${
                    activeButtton ===
                    (text.content === "Inicio" || text.content === "Home"
                      ? "/"
                      : text.content === "Servicios" ||
                        text.content === "Services"
                      ? "/services"
                      : text.content === "Productos" ||
                        text.content === "Products"
                      ? "/products"
                      : text.content === "Contacto" ||
                        text.content === "Contact"
                      ? "/contact"
                      : "/")
                      ? "active"
                      : ""
                  }`}
                >
                  {text.content}
                </Link>
              </li>
            ))}
          </div>
          <div className="container_right">
            {data.information.map((text: any) => (
              <p className="item_number">{text.number}</p>
            ))}
            <li className="container_items_login_cart">
              {auth.isAuthenticated ? (
                <div className="item_shopping_cart">
                  <Link to="/cart">
                    <img
                      className="image_shopping_cart"
                      src={IconShoppingCart}
                      alt="Shopping Cart"
                    />
                  </Link>
                  <Link to="/login">
                    <img
                      src={IconLogin}
                      style={{ width: "20px" }}
                      alt="Login"
                    />
                  </Link>
                </div>
              ) : (
                <Link className="button_to_access" to="/login">
                  <img src={IconLogin} style={{ width: "20px" }} alt="Login" />
                  {data.information.map((text: any) => (
                    <p>{text.join}</p>
                  ))}
                </Link>
              )}
            </li>
          </div>
        </ul>
      </header>
      <main>{children}</main>
    </>
  );
}
