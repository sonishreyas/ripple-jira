import { Link, NavLink } from "react-router-dom";
import { useAuth, useProjects } from "../../context";
const NavBar = () => {
	const { authState } = useAuth();
	const { projectsState } = useProjects();
	const projectId = projectsState.selectedProject.id;
	const getActiveClass = ({ isActive }) =>
		isActive
			? "text-cta-color rui-drawer-links navbar-rp-section"
			: "rui-drawer-links navbar-rp-section";
	return (
		<nav className="nav nav-shadow navbar-rp">
			<ul className="rui-drawer-content--list no-list">
				<li className="flex-row justify-content-space-between align-center rui-drawer-content rui-drawer-header display-inactive">
					<section>
						<img
							src="https://raw.githubusercontent.com/sonishreyas/ripple-jira/dev/src/backend/media/ripple-jira-logo.png"
							alt="Logo of ripple play"
							className="brand-logo"
						/>
						<sub className="brand-name">Ripple Jira</sub>
					</section>
					<section>
						<i className="fas fa-angle-left close-drawer"></i>
					</section>
				</li>
				<li className="rui-drawer-content m-10">
					<NavLink to={"/"} className={getActiveClass}>
						<span>
							<i className="fa-solid fa-house-chimney"></i>
						</span>
						<span className="rui-drawer-content--text p-2 text-center">
							Home
						</span>
					</NavLink>
				</li>
				<li className="rui-drawer-content m-10">
					<NavLink to={"/projects"} className={getActiveClass}>
						<span>
							<i className="fa-solid fa-rectangle-list"></i>
						</span>
						<span className="rui-drawer-content--text p-2 text-center">
							Projects
						</span>
					</NavLink>
				</li>
				<li className="rui-drawer-content m-10">
					<NavLink to={`/project/${projectId}`} className={getActiveClass}>
						<span>
							<i className="fa-solid fa-bars-staggered"></i>
						</span>
						<span className="rui-drawer-content--text p-2 text-center">
							Board
						</span>
					</NavLink>
				</li>
				<li className="rui-drawer-content m-10">
					<NavLink
						to={`/project/${projectId}/backlog`}
						className={getActiveClass}
					>
						<span>
							<i className="fa-solid fa-bars-progress"></i>
						</span>
						<span className="rui-drawer-content--text p-2">Backlog</span>
					</NavLink>
				</li>
				<li className="rui-drawer-content m-10">
					<NavLink
						to={`/project/${projectId}/settings`}
						className={getActiveClass}
					>
						<span>
							<i className="fa-solid fa-gear"></i>
						</span>
						<span className="rui-drawer-content--text p-2">Settings</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export { NavBar };
