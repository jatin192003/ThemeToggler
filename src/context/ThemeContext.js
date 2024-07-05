import React from "react";

const ThemeContext = React.createContext({
    themeMode: "dark",
    darkTheme: () => {},
    lightTheme: () => {}
})

export default ThemeContext;