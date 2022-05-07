import {
	createContext,
	useContext,
	useReducer,
	useEffect,
	useState,
} from "react";
import { modalReducer } from "reducers";
import { useAuth } from "./auth-context";
const defaultModalState = {
	message: {},
	handleConfirm: () => {},
	handeDismiss: () => {},
};

const ModalContext = createContext({ defaultModalState });

const ModalProvider = ({ children }) => {
	const [modalState, modalDispatch] = useReducer(
		modalReducer,
		defaultModalState
	);
	const [showModal, setShowModal] = useState(false);
	const { authState } = useAuth();

	return (
		<ModalContext.Provider
			value={{
				modalState,
				modalDispatch,
				showModal,
				setShowModal,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};

const useModal = () => useContext(ModalContext);

export { useModal, ModalProvider };
