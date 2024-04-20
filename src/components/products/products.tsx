import React from "react";
import t from "../../translation/textSpanish.json";

const Products = () => {
  return (
    <div>
      {t.products.map((item) => (
        <h1>{item.title}</h1>
      ))}
    </div>
  );
};

export default Products;
