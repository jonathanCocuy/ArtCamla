/* React */
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

/* Styles */
import "./App.scss";

/* Texts translation */
import data from "../src/translation/textSpanish.json";

/* Components */
import Home from "./components/home/home";
import Services from "./components/services/services";
import Products from "./components/products/products";
import Contact from "./components/contact/contact";

const App: React.FC = () => {
  // Estado para guardar el identificador del elemento de navegación activo
  const [activeItemNav, setItemNav] = useState("");

  // Función para manejar el clic en un elemento de navegación
  const handleItemClick = (content: string) => {
    // Actualiza el estado con el identificador del elemento clicado
    setItemNav(content);
  };

  return (
    <div>
      <p>Hola</p>
    </div>
  );
};

export default App;
