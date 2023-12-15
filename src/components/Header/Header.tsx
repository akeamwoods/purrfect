import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";

type HeaderProps = {
  onLogoClick: () => void;
};

export const Header: React.FC<HeaderProps> = ({ onLogoClick }: HeaderProps) => {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleLogoClick = () => {
    setIsSpinning(true);
    onLogoClick();
    setTimeout(() => setIsSpinning(false), 660);
  };

  return (
    <header className={styles.container}>
      <div className={styles.logoContainer} onClick={handleLogoClick}>
        <img
          src="/cat_logo.svg"
          className={`${styles.logo} ${isSpinning ? styles.spin : ""}`}
        />
        <h1>
          Purrfect<span>Pixels</span>
        </h1>
      </div>
      <div className={styles.linksContainer}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.activeLink : "")}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/upload"
          className={({ isActive }) => (isActive ? styles.activeLink : "")}
        >
          Upload
        </NavLink>
      </div>
    </header>
  );
};
