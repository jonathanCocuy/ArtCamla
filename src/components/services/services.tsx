import React from "react";
import t from "../../translation/textSpanish.json";
import NavBarLayout from "../../layout/NavBarLayout";

const Services = () => {
  return (
    <NavBarLayout>
      {t.services.map((item, index) => (
        <div key={index}>
          <h1 style={{paddingTop: "100px"}}>{item.title}</h1>
        </div>
      ))}
    </NavBarLayout>
  );
};

export default Services;
