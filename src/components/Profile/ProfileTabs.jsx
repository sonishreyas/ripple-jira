import { useProfile } from "context";
import { Profile, Settings } from ".";
const ProfileTabs = () => {
	const { profileActiveTab, setProfileActiveTab } = useProfile();
	const tabClickHandler = (activeTabName) => setProfileActiveTab(activeTabName);
	return (
		<section className="rui-main--heading-container no-border profile-tabs">
			<article className="vertical-tabs-container flex-row flex-wrap flex-gap-1 b-radius-2 p-5 w-100 h-auto">
				<article className="vertical-tabs-btn-container flex-column justify-content-start align-start p-0 my-5 mx-0">
					<button
						className={`tabs-btn p-5 flex-row flex-gap-1 align-center justify-content-start ${
							profileActiveTab === "Profile" ? "vertical-tabs-btn-active" : ""
						}`}
						onClick={() => tabClickHandler("Profile")}
					>
						<span className="tabs-icon">
							<i className="fa-solid fa-user"></i>
						</span>
						<p className="tabs-btn-text">Profile</p>
					</button>
					<button
						className={`tabs-btn p-5 flex-row flex-gap-1 align-center justify-content-start ${
							profileActiveTab === "Settings" ? "vertical-tabs-btn-active" : ""
						}`}
						onClick={() => tabClickHandler("Settings")}
					>
						<span className="tabs-icon">
							<i className="fa-solid fa-gear"></i>
						</span>
						<p className="tabs-btn-text">Settings</p>
					</button>
				</article>

				{profileActiveTab === "Profile" && (
					<div className="vertical-tabs-content p-5 b-radius-2 my-5 mx-0 flex-grow-1 flex-gap-1 user-details-container">
						<Profile />
					</div>
				)}
				{profileActiveTab === "Settings" && (
					<div className="vertical-tabs-content p-5 b-radius-2 my-5 mx-0 flex-grow-1 flex-gap-1 user-details-container">
						<Settings />
					</div>
				)}
			</article>
		</section>
	);
};

export { ProfileTabs };
