import { useAuth, useProjects } from "context";
import { Link } from "react-router-dom";
import { checkIfAdmin } from "utils";
export const ProjectsTable = () => {
	const { projectsState } = useProjects();
	const { authState } = useAuth();
	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Key</th>
					<th>Lead</th>
				</tr>
			</thead>
			<tbody>
				{projectsState?.projectsData.length ? (
					projectsState.projectsData.map(({ id, name, key, lead, access }) => (
						<tr key={id}>
							<td>
								<Link
									to={`/project/${id}`}
									className="no-link-decoration cursor-pointer"
								>
									{name}
								</Link>
							</td>
							<td>{key}</td>
							<td className="flex-row justify-content-center align-center flex-gap-1">
								<p className="avatar b-radius-circle avatar-text flex-row justify-content-center align-center m cursor-pointer">
									{lead.avatar}
								</p>{" "}
								<p> {lead.name}</p>
							</td>
							{checkIfAdmin(access, authState.uid) && (
								<td>
									<i
										className="fa-solid fa-trash p-5 cursor-pointer social icons"
										title="Delete Habit"
										// onClick={(e) => handleDeleteHabit(e, _id)}
									></i>
								</td>
							)}
						</tr>
					))
				) : (
					<tr>
						<td></td>
						<td></td>
						<td className="flex-row justify-content-center align-center flex-gap-1"></td>
					</tr>
				)}
			</tbody>
		</table>
	);
};
