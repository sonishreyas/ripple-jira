import { onAuthStateChanged } from "firebase/auth";
import { auth } from "backend/firebase/firebase";
import { useReducer, createContext, useContext, useEffect } from "react";
import { authReducer } from "reducers";

const defaultAuthState = {
	token: "",
	email: "",
	firstName: "",
	lastName: "",
};

const AuthContext = createContext({ defaultAuthState });

const AuthProvider = ({ children }) => {
	const [authState, authDispatch] = useReducer(authReducer, defaultAuthState);
	useEffect(
		() =>
			onAuthStateChanged(auth, (user) => {
				user &&
					authDispatch({
						type: "UPDATE_USER",
						payload: user,
					});
			}),

		[]
	);
	console.log(authState);
	return (
		<AuthContext.Provider value={{ authState, authDispatch }}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
