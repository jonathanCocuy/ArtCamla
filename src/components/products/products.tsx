import React from "react";
import t from "../../translation/textSpanish.json";
import NavBarLayout from "../../layout/NavBarLayout";

const Products = () => {
  return (
    <NavBarLayout>
      {t.products.map((item, index) => (
        <div key={index}>
          <h1 style={{paddingTop: "100px"}}>{item.title}</h1>
        </div>
      ))}
    </NavBarLayout>
  );
};

export default Products;
