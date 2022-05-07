import { useNavigate } from "react-router-dom";
import { useAuth, useLogin, useRegister } from "context";
import { signOut } from "firebase/auth";
import { auth } from "backend/firebase/firebase";

const Settings = () => {
	const { authDispatch } = useAuth();
	const { loginDispatch } = useLogin();
	const { registerDispatch } = useRegister();
	const navigate = useNavigate();
	const handleLogout = () => {
		localStorage.clear();
		authDispatch({ type: "LOGOUT" });
		loginDispatch({ type: "RESET" });
		registerDispatch({ type: "RESET" });
		signOut(auth);
		navigate("/");
	};
	return (
		<div className="profile-container">
			<div className="profile-header flex-row justify-content-space-between align-center flex-wrap p-5 my-0 mx-5">
				<h1 className="p-2 mauthy-2 mx-0">Settings</h1>
			</div>
			<ul className="profile-list p-5">
				<li className="no-list">
					<button
						className="primary-btn log-out-btn  p-5 b-radius-2 mx-5 my-0 text-bold"
						onClick={handleLogout}
						type="button"
					>
						Log Out
					</button>
				</li>
			</ul>
		</div>
	);
};

export { Settings };
