import { Link, NavLink } from "react-router-dom";
import { useAuth, useNavbar, useTheme } from "context";

const Header = () => {
	const { handleSetTheme, themeIcon } = useTheme();
	const { setShowNavbar } = useNavbar();
	const { authState } = useAuth();
	const getActiveClass = ({ isActive }) =>
		isActive
			? "no-link cursor-pointer text-cta-color text-bold"
			: "no-link cursor-pointer";
	const handleShowNavbar = () => setShowNavbar(true);
	return (
		<header className="header header-shadow flex-column">
			<div className="flex-row justify-content-space-between align-center w-100">
				<div className="brand-info flex-row justify-content-center align-center flex-gap-1 m-5">
					<section>
						<i
							className="fas fa-bars header-nav-icon"
							onClick={handleShowNavbar}
						></i>
					</section>
					<Link to={"/"} className="no-link header-brand">
						<img
							src="https://raw.githubusercontent.com/sonishreyas/ripple-jira/dev/src/backend/media/ripple-jira-logo.png"
							alt="Logo of ripple UI"
							className="brand-logo"
						/>
						<sub className="brand-name">Ripple Jira</sub>
					</Link>
				</div>
				<div className="social-icon-container flex-row align-center flex-gap-2">
					{authState.token && (
						<Link to={"/profile"} className="no-link">
							<p className="avatar b-radius-circle avatar-text flex-row justify-content-center align-center m cursor-pointer">
								{authState.avatar}
							</p>
						</Link>
					)}
					<i
						className={`fas fa-${themeIcon} theme-icon social`}
						aria-label="dark/light theme icon"
						onClick={handleSetTheme}
					></i>
				</div>
			</div>
		</header>
	);
};

export { Header };
