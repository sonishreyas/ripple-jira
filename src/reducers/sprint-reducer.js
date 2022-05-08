const sprintsReducer = (state, { type, payload }) => {
	switch (type) {
		case "GET_SPRINTS":
			return { sprintsData: payload.sprintsData };
		case "ADD_NEW_SPRINT":
			return {
				...state,
				sprintsData: [...state.sprintsData, { ...payload.sprintsData }],
			};
		case "DELETE_SPRINT":
			return { ...state };
		case "SET_ACTIVE_SPRINT":
			return {
				...state,
				activeSprint: payload.activeSprint,
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
