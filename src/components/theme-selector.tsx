import { IconProp, library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

library.add(
    faMoon,
    faSun
)

const windowGlobal = (typeof window !== 'undefined' && window) as Window;

export default function ThemeSelector() {
  const userPreference = windowGlobal?.localStorage == null ? null : windowGlobal.localStorage.getItem("theme");
  
  const [currentTheme, setSelectedTheme] = React.useState(
    userPreference || "light"
  );

  const newThemeOption = currentTheme === "light" ? "dark" : "light";

  const toggleThemeCssVariables = () => {
    setThemeCssVariables(newThemeOption);
  };

  if (userPreference != null) {
    setThemeCssVariables(userPreference as ThemeOptions);
  }

  return (
    <div className="btn-group">
        <button className="btn btn-default" onClick={() => {
            toggleThemeCssVariables();
            if (windowGlobal?.localStorage != null) {
                windowGlobal.localStorage.setItem("theme", newThemeOption);
            }
            setSelectedTheme(newThemeOption);
          }}>
            <FontAwesomeIcon icon={iconMap[newThemeOption]} size="1x" />
        </button>
    </div>
  );
}

const themes = ["dark", "light"] as const;
type ThemeOptions = typeof themes[number];

interface Theme {
  "--background-color": string;
  "--font-color": string;
  "--invert-font-color": string;
  "--secondary-color": string;
  "--tertiary-color": string;
  "--primary-color": string;
  "--error-color": string;
  "--progress-bar-background": string;
  "--progress-bar-fill": string;
  "--code-bg-color": string;
}

const iconMap: Record<ThemeOptions, IconProp> = {
    light: "sun",
    dark: "moon"
}

const themeMap: Record<ThemeOptions, Theme> = {
  light: {
    "--background-color": "#ff",
    "--font-color": "#151515",
    "--invert-font-color": "#fff",
    "--secondary-color": "#727578",
    "--tertiary-color": "#a3abba",
    "--primary-color": "#1a95e0",
    "--error-color": "#d20962",
    "--progress-bar-background": "#727578",
    "--progress-bar-fill": "#151515",
    "--code-bg-color": "#e8eff2",
  },
  dark: {
    "--background-color": "#222225",
    "--font-color": "#e8e9ed",
    "--invert-font-color": "#222225",
    "--secondary-color": "#a3abba",
    "--tertiary-color": "#a3abba",
    "--primary-color": "#62c4ff",
    "--error-color": "#ff3c74",
    "--progress-bar-background": "#3f3f44",
    "--progress-bar-fill": "#62c4ff",
    "--code-bg-color": "#3f3f44",
  },
};

const setThemeCssVariables = (option: ThemeOptions) => {
    const theme = themeMap[option];

    for (const cssVariableName in theme) {
      const cssPropertyValue: string = (theme as any)[cssVariableName];
      document.documentElement.style.setProperty(
        cssVariableName,
        cssPropertyValue
      );
    }
  };
