// importing functions from libraries
import { Route, Routes } from "react-router-dom";

// importing style files to the component
import "./styles/App.style.sass";

// Importing other components
import Header from "../Header/Header.component";
import NavBar from "../NavBar/NavBar.component";
import Widget from "../Widget/Widget.component";

// importing media files

// Declare the component
const App = () => {
  return (
    <section className="app">
      <div className="container">
        <Header />
        <NavBar />
        <div className="menu-field">
          <Routes>
            <Route path="/" element={<Widget />} />
          </Routes>
        </div>
      </div>
    </section>
  );
};

export default App;
