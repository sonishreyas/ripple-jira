import {
	Home,
	Authentication,
	Profile,
	Projects,
	Board,
	Backlog,
} from "./pages";
import {
	Header,
	Footer,
	NavBar,
	NewProjectModal,
	ConfirmModal,
	NewIssueModal,
} from "./components";
import { useIssues, useModal, useNavbar, useProjects } from "./context";
import { RequireAuth } from "./utils";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";

export default function App() {
	const { showNavbar } = useNavbar();
	const { showProjectsModal } = useProjects();
	const { showModal } = useModal();
	const { showIssuesModal } = useIssues();
	const location = useLocation();

	return (
		<div className="grid-container">
			<Header />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/auth" element={<Authentication />} />
				<Route
					path="/projects"
					element={
						<RequireAuth>
							<Projects />
						</RequireAuth>
					}
				/>
				<Route
					path="/project/:projectId"
					element={
						<RequireAuth>
							<Board />
						</RequireAuth>
					}
				/>
				<Route
					path="/profile"
					element={
						<RequireAuth>
							<Profile />
						</RequireAuth>
					}
				/>
				<Route
					path="/board"
					element={
						<RequireAuth>
							<Board />
						</RequireAuth>
					}
				/>
				<Route
					path="/project/:projectId/backlog"
					element={
						<RequireAuth>
							<Backlog />
						</RequireAuth>
					}
				/>
			</Routes>
			<Outlet />
			{showNavbar &&
				location.pathname !== "/home" &&
				location.pathname !== "/projects" && <NavBar />}
			{showProjectsModal && <NewProjectModal />}
			{showModal && <ConfirmModal />}
			{showIssuesModal && <NewIssueModal />}
			<Footer />
		</div>
	);
}
