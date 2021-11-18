import Icon from "./Icon";
import TypeWriter from "./TypeWriter";

const ThemeToggleButton = ({
  isDarkMode,
  toggleTheme,
}: {
  isDarkMode: boolean;
  toggleTheme: () => void;
}) => {
  return (
    <span
      className="theme-toggle-button"
      onClick={toggleTheme}
      role="button"
      aria-label="toggle-colour-theme"
    >
      <span className="theme-button-icon">
        <Icon slug={isDarkMode ? "sunny" : "moon"} />
        <span className="theme-button-text">
          Switch to {isDarkMode ? "light" : "dark "} mode
        </span>
      </span>
    </span>
  );
};

const LightButton = () => {};

export default ThemeToggleButton;
