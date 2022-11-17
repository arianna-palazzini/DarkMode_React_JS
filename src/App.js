import { useState, useEffect } from "react";
import data from "./data";
import Articolo from "./Articolo";

const getFromLocalStorage = () => {
  if (localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  }
};

function App() {
  const [theme, setTheme] = useState(getFromLocalStorage());

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const changeTheme = () => {
    if (theme === "light-mode") {
      setTheme("dark-mode");
    } else {
      setTheme("light-mode");
    }
  };

  return (
    <section className="section-center">
      <div className="container">
        <button className="btn" onClick={changeTheme}>
          Cambia
        </button>

        <section className="article-section">
          {data.map((el) => (
            <Articolo key={el.id} {...el} />
          ))}
        </section>
      </div>
    </section>
  );
}

export default App;
