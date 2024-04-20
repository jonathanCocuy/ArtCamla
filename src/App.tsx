import React, { useState } from "react";
import "./App.scss";
import t from "../src/translation/textSpanish.json";
import Home from "./components/home/home";
import Services from "./components/services/services";
import Products from "./components/products/products";
import Contact from "./components/contact/contact";

const componentMap: Record<string, React.FC> = {
  Inicio: Home,
  Servicios: Services,
  Productos: Products,
  Contacto: Contact
};

const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string>("");

  const handleClick = (content: string) => {
    setSelectedItem(content);
  };

  const SelectedComponent = componentMap[selectedItem];

  return (
    <div>
      <header className="navegation_bar">
        {t.header.map((item, index) => (
          <li className="items" key={index}>
            <button
              className={`items_options ${selectedItem === item.content ? "selected" : ""}`}
              onClick={() => handleClick(item.content)}
            >
              {item.content}
            </button>
          </li>
        ))}
      </header>
      <div>
        {SelectedComponent && <SelectedComponent />}
      </div>
    </div>
  );
};

export default App;
