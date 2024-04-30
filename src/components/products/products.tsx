import React from "react";
import t from "../../translation/textSpanish.json";
import NavBarLayout from "../../layout/NavBarLayout";

const Products = () => {
  return (
    <NavBarLayout>
      {t.products.map((item) => (
        <h1>{item.title}</h1>
      ))}
    </NavBarLayout>
  );
};

export default Products;
