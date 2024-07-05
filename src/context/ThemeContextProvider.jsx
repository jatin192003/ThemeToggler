import React from "react";
import ThemeContext from "./ThemeContext";


const ThemeContextProvider = ({ children }) => {
    const [themeMode, setThemeMode] = React.useState("dark")

    const lightTheme = () => {
        setThemeMode("light")
    }

    const darkTheme = () => {
        setThemeMode("dark")
    }

    React.useEffect(() => {
        document.querySelector('html').classList.remove("light", "dark")
        document.querySelector('html').classList.add(themeMode)
      }, [themeMode])

    return (
        <ThemeContext.Provider value={{ themeMode, lightTheme, darkTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider