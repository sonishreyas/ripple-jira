const projectsReducer = (state, { type, payload }) => {
	switch (type) {
		case "GET_PROJECTS":
			return { projectsData: payload.projectsData };
		case "NEW_PROJECT":
			return { ...state, newProject: payload.newProject };
		case "ADD_NEW_PROJECT":
			return {
				...state,
				projectsData: [...state.projectsData, { ...payload.projectsData }],
			};
		case "DELETE_PROJECT":
			return { ...state };
		case "SET_SELECTED_PROJECT":
			return {
				...state,
				selectedProject: payload.selectedProject,
			};
		case "RESET_FORM":
			return {
				...state,
				newProject: payload.newProject,
			};
		case "RESET":
			return {
				projectsData: [],
				newProject: {},
			};
		default:
			return state;
	}
};
export { projectsReducer };
