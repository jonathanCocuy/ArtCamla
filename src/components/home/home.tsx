import React from "react";
import t from "../../translation/textSpanish.json";

const Home = () => {
  return (
    <div>
      {t.home.map((item) => (
        <div>
          <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Home;
