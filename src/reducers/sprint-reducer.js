const updateSprintsData = (data, sprint) =>
	data.reduce(
		(prev, curr) =>
			curr.id === sprint.id
				? [...prev, { ...curr, ...sprint }]
				: [...prev, ...curr],
		[]
	);

const sprintsReducer = (state, { type, payload }) => {
	switch (type) {
		case "GET_SPRINTS":
			return { ...state, sprintsData: payload.sprintsData };
		case "ADD_NEW_SPRINT":
			return {
				...state,
				sprintsData: { ...payload.sprintsData },
			};
		case "UPDATE_SPRINT":
			return {
				...state,
				sprintsData: { ...state.sprintsData, ...payload.sprintsData },
			};
		case "DELETE_SPRINT":
			return { ...state };
		case "SET_ACTIVE_SPRINT":
			return {
				...state,
				activeSprint: payload.activeSprint,
				sprintsData: payload.sprintsData,
			};
		case "SPRINT_COMPLETED":
			return {
				...state,
				activeSprint: payload.activeSprint,
				sprintsData: payload.sprintsData,
			};
		case "RESET":
			return {
				sprintsData: [],
				activeSprint: {},
			};
		default:
			return state;
	}
};
export { sprintsReducer };
