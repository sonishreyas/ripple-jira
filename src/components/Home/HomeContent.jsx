import { Link } from "react-router-dom";

const HomeContent = () => {
	return (
		<main className="main flex-row align-center justify-content-center all-grid-columns">
			<div className="flex-column align-center text-center justify-content-ceter h-100">
				<div className="homepage-heading">
					Manage your projects <i className="text-cta-color">better</i>{" "}
				</div>
				<div className="homepage-heading">
					with <i className="text-cta-color">Ripple Jira</i>
				</div>
				<div className="homepage-subheading">
					Ripple Jira is a scrum project management tool build using React.
				</div>
				<div className="homepage-subheading">Create your first issue now.</div>
				<div className="flex-row align-center m-10">
					<Link
						to="/projects"
						className="no-link-decoration primary-btn p-5 b-radius-5 mx-5 my-0 text-bold icon-text-btn flex-row justify-content-center
                        align-center flex-gap-1 text-tertiary-color"
						aria-label="Go to Project"
					>
						<span>
							<i className="fa-solid fa-bars-progress"></i>
						</span>
						<p className="btn-text">Get Started</p>
					</Link>
				</div>
			</div>
		</main>
	);
};

export { HomeContent };
