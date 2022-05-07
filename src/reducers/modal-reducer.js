const modalReducer = (state, { type, payload }) => {
	switch (type) {
		case "SET_MODAL":
			return {
				message: payload.message,
				handleConfirm: payload.handleConfirm,
				handleDismiss: payload.handleDismiss,
			};
		case "RESET_MODAL":
			return {
				message: "",
				handleConfirm: () => {},
				handeDismiss: () => {},
			};
		default:
			return state;
	}
};

export { modalReducer };
