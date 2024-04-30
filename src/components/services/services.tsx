import React from "react";
import t from "../../translation/textSpanish.json";
import NavBarLayout from "../../layout/NavBarLayout";

const Services = () => {
  return (
    <NavBarLayout>
      {t.services.map((item) => (
        <h1>{item.title}</h1>
      ))}
    </NavBarLayout>
  );
};

export default Services;
