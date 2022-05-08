import {
	createContext,
	useContext,
	useReducer,
	useEffect,
	useState,
} from "react";
import { sprintsReducer } from "reducers";
import { getSprints } from "utils";
import { useAuth } from "./auth-context";
const defaultSprintsState = {
	sprintsData: [],
	newSprit: {},
	activeSprint: {},
};

const SprintsContext = createContext({ defaultSprintsState });

const SprintsProvider = ({ children }) => {
	const [sprintsState, sprintsDispatch] = useReducer(
		sprintsReducer,
		defaultSprintsState
	);

	return (
		<SprintsContext.Provider
			value={{
				sprintsState,
				sprintsDispatch,
			}}
		>
			{children}
		</SprintsContext.Provider>
	);
};

const useSprints = () => useContext(SprintsContext);

export { useSprints, SprintsProvider };
