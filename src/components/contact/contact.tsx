import React from "react";
import t from "../../translation/textSpanish.json";
import NavBarLayout from "../../layout/NavBarLayout";

const Contact = () => {
  return (
    <NavBarLayout>
      {t.contacto.map((item) => (
        <h1>{item.title}</h1>
      ))}
    </NavBarLayout>
  );
};

export default Contact;
