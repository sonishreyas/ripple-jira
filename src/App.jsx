import { Home, Authentication, Profile, Projects, Board } from "./pages";
import { Header, Footer, NavBar, NewProjectModal } from "./components";
import { useNavbar, useProjects } from "./context";
import { RequireAuth } from "./utils";
import { Routes, Route, Outlet } from "react-router-dom";

export default function App() {
	const { showNavbar } = useNavbar();
	const { showProjectsModal } = useProjects();

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
			</Routes>
			<Outlet />
			{showNavbar && <NavBar />}
			{showProjectsModal && <NewProjectModal />}
			<Footer />
		</div>
	);
}
