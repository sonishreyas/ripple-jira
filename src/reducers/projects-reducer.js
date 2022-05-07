const projectsReducer = (state, { type, payload }) => {
	switch (type) {
		case "NEW_PROJECT":
			return { ...state, newProject: payload.newProject };
		case "ADD_NEW_PROJECT":
			return { ...state, projectsData: payload.projectsData };
		case "DELETE_PROJECT":
			return { ...state };
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
