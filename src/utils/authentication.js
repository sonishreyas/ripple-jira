import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "backend/firebase/firebase";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "context";

const RequireAuth = ({ children }) => {
	const location = useLocation();
	const { authState } = useAuth();
	return authState ? (
		children
	) : (
		<Navigate to="/auth" state={{ from: location }} replace />
	);
};

const loginHandler = (e, loginState) => {
	console.log(loginState);
	e.preventDefault();
	(async () => {
		try {
			const result = await signInWithEmailAndPassword(
				auth,
				loginState.email,
				loginState.password
			);
			console.log("here", result);
		} catch (error) {
			console.log(error);
		}
	})();
};

const registerHandler = (e, registerState) => {
	e.preventDefault();
	(async () => {
		try {
			const result = await createUserWithEmailAndPassword(
				auth,
				registerState.email,
				registerState.password
			);
			console.log("here", result);
		} catch (error) {
			console.log(error);
		}
	})();
};

const setValueHandler = (e, field, type, loginDispatch) => {
	const fieldValue = { type: type, payload: {} };
	fieldValue.payload[field] = e.target.value;
	loginDispatch(fieldValue);
};

const setTestHandler = (loginDispatch) =>
	loginDispatch({
		type: "TEST_CREDENTIAL",
		payload: { email: "test@gmail.com", password: "test123" },
	});

const setFocusHandler = (field, value, type, loginDispatch, focusReset) => {
	focusReset[field] = value;
	loginDispatch({ payload: { focus: focusReset }, type: type });
};
export {
	RequireAuth,
	loginHandler,
	registerHandler,
	setValueHandler,
	setTestHandler,
	setFocusHandler,
};
