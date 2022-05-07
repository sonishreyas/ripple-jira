import { useProjects } from "context";
import { Link } from "react-router-dom";
export const ProjectsTable = () => {
	const { projectsState } = useProjects();

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
				{projectsState?.projectsData ? (
					projectsState.projectsData.map(({ id, name, key, lead }) => (
						<tr>
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
