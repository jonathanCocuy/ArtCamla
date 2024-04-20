import React from "react";
import t from "../../translation/textSpanish.json";

const Contact = () => {
  return (
    <div>
      {t.contacto.map((item) => (
        <h1>{item.title}</h1>
      ))}
    </div>
  );
};

export default Contact;
