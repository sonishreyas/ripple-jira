import { useSprints } from "context";

const StartSprintButton = ({ sprintId }) => {
	const { sprintsState, sprintsDispatch } = useSprints();
	const handleStartSprint = () => {
		sprintsDispatch({
			type: "SET_ACTIVE_SPRINT",
			payload: {
				activeSprint: sprintsState?.sprintsData?.filter(
					(item) => item === sprintId
				)[0].id,
				sprintsData: sprintsState?.sprintsData?.reduce(
					(prev, curr) =>
						curr.id === sprintId
							? [...prev, { ...curr, status: "active" }]
							: [...prev, ...curr],
					[]
				),
			},
		});
	};
	return (
		<button
			className="primary-btn p-2 b-radius-1 text-bold icon-text-btn text-tertiary-color cursor-pointer"
			aria-label="Start Sprint"
			onClick={handleStartSprint}
		>
			<p className="btn-text">Start Sprint</p>
		</button>
	);
};

export { StartSprintButton };
