import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
const NavbarContext = createContext({});

const NavbarProvider = ({ children }) => {
	const [showNavbar, setShowNavbar] = useState(false);
	useEffect(() => {
		if (window.width <= 768)
			window.addEventListener("resize", () => setShowNavbar(false));
		else setShowNavbar(true);
	}, []);
	return (
		<NavbarContext.Provider value={{ showNavbar, setShowNavbar }}>
			{children}
		</NavbarContext.Provider>
	);
};

const useNavbar = () => useContext(NavbarContext);

export { useNavbar, NavbarProvider };
