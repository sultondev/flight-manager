// Connecting style files to the component
import "./styles/Header.style.sass";

// Declare the component
const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Flight Manager</h1>
    </header>
  );
};

export default Header;
