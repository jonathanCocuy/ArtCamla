import React from "react";
import t from "../../translation/textSpanish.json";
import NavBarLayout from "../../layout/NavBarLayout";

const Home = () => {
  return (
    <NavBarLayout>
      {t.home.map((item) => (
        <div>
          <h1>{item.title}</h1>
        </div>
      ))}
    </NavBarLayout>
  );
};

export default Home;
