import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
const NavbarContext = createContext({});

const NavbarProvider = ({ children }) => {
	const [showNavbar, setShowNavbar] = useState(false);
	useEffect(() => {
		window.addEventListener("resize", () => setShowNavbar(false));
	}, []);
	return (
		<NavbarContext.Provider value={{ showNavbar, setShowNavbar }}>
			{children}
		</NavbarContext.Provider>
	);
};

const useNavbar = () => useContext(NavbarContext);

export { useNavbar, NavbarProvider };
