"use client";

import { ReactNode, createContext, useContext } from "react";
type Theme = {
	color: {
		primary: string;
		secondary: string;
	};
};

const defaultTheme = {
	color: {
		primary: "#007bff",
		secondary: "#6c757d",
	},
};

const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	return <ThemeContext.Provider value={defaultTheme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
