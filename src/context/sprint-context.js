import {
	createContext,
	useContext,
	useReducer,
	useEffect,
	useState,
} from "react";
import { sprintsReducer } from "reducers";
import { getSprints } from "utils";
import { useProjects } from ".";
const defaultSprintsState = {
	sprintsData: {},
	newSprit: {},
	activeSprint: {},
};

const SprintsContext = createContext({ defaultSprintsState });

const SprintsProvider = ({ children }) => {
	const [sprintsState, sprintsDispatch] = useReducer(
		sprintsReducer,
		defaultSprintsState
	);

	const { projectsState } = useProjects();
	useEffect(() => {
		projectsState.selectedProject?.id !== undefined &&
			getSprints(projectsState.selectedProject.id, sprintsDispatch);
	}, [projectsState]);
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
