const updateProjectData = (projectData, newData) =>
	projectData.reduce(
		(prev, curr) =>
			curr.id === newData.id
				? [...prev, { ...curr, ...newData }]
				: [...prev, ...curr],
		[]
	);

const deleteProjectData = (projects, deletedProject) =>
	projects.filter((item) => item.id !== deletedProject);

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
			return {
				...state,
				projectsData: deleteProjectData(
					state.projectsData,
					payload.projectsData
				),
			};
		case "SET_SELECTED_PROJECT":
			return {
				...state,
				selectedProject: payload.selectedProject,
			};
		case "UPDATE_PROJECT":
			return {
				...state,
				selectedProject: {
					...state.selectedProject,
					...payload.selectedProject,
				},
				projectsData: updateProjectData(
					state.projectsData,
					payload.projectsData
				),
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
