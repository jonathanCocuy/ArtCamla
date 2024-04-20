import React from "react";
import t from "../../translation/textSpanish.json";

const Services = () => {
  return (
    <div>
      {t.services.map((item) => (
        <h1>{item.title}</h1>
      ))}
    </div>
  );
};

export default Services;
