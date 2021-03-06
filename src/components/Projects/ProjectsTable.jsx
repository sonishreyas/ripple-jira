import { useAuth, useModal, useProjects } from "context";
import { Link } from "react-router-dom";
import { checkIfAdmin, deleteProject } from "utils";
import { toast } from "react-toastify";
export const ProjectsTable = () => {
	const { projectsState, projectsDispatch } = useProjects();
	const { authState } = useAuth();
	const { modalDispatch, setShowModal } = useModal();
	const handleDeleteProject = (e, id) => {
		console.log(id);
		deleteProject(e, id, projectsDispatch);
		toast.success("Project deleted");
		setShowModal(false);
	};

	const handleDismissModal = () => setShowModal(false);

	const handleDeleteModal = (e, id) => {
		modalDispatch({
			type: "SET_MODAL",
			payload: {
				message: "Are you sure you want to delete this project ?",
				handleConfirm: () => handleDeleteProject(e, id),
				handleDismiss: handleDismissModal,
			},
		});
		setShowModal(true);
	};
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
										title="Delete Project"
										onClick={(e) => handleDeleteModal(e, id)}
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
