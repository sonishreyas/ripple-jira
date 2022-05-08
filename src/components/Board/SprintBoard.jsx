import { useEffect, useState } from "react";
import { getActiveSprintIssues, updateIssue } from "utils";
import { useProjects, useIssues, useSprints } from "context";

const SprintBoard = () => {
	const { projectsState } = useProjects();
	const { issuesState, issuesDispatch } = useIssues();
	const { sprintsState } = useSprints();
	const [filteredIssues, setFilteredIssues] = useState([]);
	useEffect(() => {
		Object.keys(sprintsState?.sprintsData).length &&
			issuesState?.issuesData?.length &&
			setFilteredIssues(
				sprintsState?.sprintsData?.issues.map((item) =>
					issuesState.issuesData.find((issue) => issue.id === item)
				)
			);
	}, [sprintsState, issuesState]);
	const categories = ["To Do", "In Progress", "Done"];
	const handleCategoryChange = (e, id) =>
		updateIssue(id, { category: e.target.value }, issuesDispatch);
	return (
		<div className="flex-row justify-content-space-between align-start flex-gap-1">
			{projectsState?.selectedProject?.categories?.length &&
				projectsState?.selectedProject?.categories?.map(
					(item) =>
						item !== "Backlog" && (
							<div className="basic-card p-5 b-radius-1 flex-column align-center flex-gap-1">
								<h4>{item}</h4>
								{filteredIssues.length &&
									filteredIssues.map(
										({ id, summary, category, issueKey }) =>
											item === category && (
												<div
													className="basic-card p-10 b-radius-1 issue-card"
													key={id}
												>
													<p>{summary}</p>
													<p>{issueKey}</p>
													<select
														name="category"
														id="category"
														className="textbox-content p-5"
														onChange={(e) => handleCategoryChange(e, id)}
													>
														<option value={category}>{category}</option>
														{categories.map(
															(item) =>
																item !== category && (
																	<option value={item}>{item}</option>
																)
														)}
													</select>
												</div>
											)
									)}
							</div>
						)
				)}
		</div>
	);
};
export { SprintBoard };
