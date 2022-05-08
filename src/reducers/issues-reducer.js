const deleteIssueData = (issues, deletedIssue) =>
	issues.filter((item) => item.id !== deletedIssue);
const updateIssueData = (data, newData) =>
	data.reduce(
		(prev, curr) =>
			curr.id === newData.id
				? [...prev, { ...curr, ...newData }]
				: [...prev, { ...curr }],
		[]
	);
const issuesReducer = (state, { type, payload }) => {
	switch (type) {
		case "GET_ISSUES":
			return { issuesData: payload.issuesData };
		case "NEW_ISSUE":
			return { ...state, newIssue: { ...state.newIssue, ...payload.newIssue } };
		case "ADD_NEW_ISSUE":
			return {
				...state,
				issuesData: [...state.issuesData, { ...payload.issuesData }],
			};
		case "DELETE_ISSUE":
			return {
				...state,
				issuesData: deleteIssueData(state.issuesData, payload.issuesData),
			};
		case "UPDATE_ISSUE":
			return {
				...state,
				issuesData: updateIssueData(state.issuesData, payload.issuesData),
			};
		case "SET_SELECTED_ISSUE":
			return {
				...state,
				selectedIssue: payload.selectedIssue,
			};
		case "RESET_FORM":
			return {
				...state,
				newIssue: payload.newIssue,
			};
		case "RESET":
			return {
				issuesData: [],
				newIssue: {},
			};
		default:
			return state;
	}
};
export { issuesReducer };
