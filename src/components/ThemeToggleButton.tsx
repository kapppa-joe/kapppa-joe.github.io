const ThemeToggleButton = ({isDarkMode, toggleTheme}: {isDarkMode: boolean, toggleTheme: () => void}) => {
  return (
    <button className="theme-toggle-button" onClick={toggleTheme}>
      {isDarkMode ? 'light' : 'dark'}
    </button>
  );
};

export default ThemeToggleButton;