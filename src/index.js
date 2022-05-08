import React from "react";
import ReactDOM from "react-dom";
import "css/components.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import {
	NavbarProvider,
	ThemeProvider,
	RegisterProvider,
	LoginProvider,
	AuthProvider,
	ProfileProvider,
	ProjectsProvider,
	IssuesProvider,
	ModalProvider,
	SprintsProvider,
} from "./context";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<ThemeProvider>
				<NavbarProvider>
					<RegisterProvider>
						<LoginProvider>
							<AuthProvider>
								<ProfileProvider>
									<ProjectsProvider>
										<IssuesProvider>
											<ModalProvider>
												<SprintsProvider>
													<App />
												</SprintsProvider>
											</ModalProvider>
										</IssuesProvider>
									</ProjectsProvider>
								</ProfileProvider>
							</AuthProvider>
						</LoginProvider>
					</RegisterProvider>
				</NavbarProvider>
			</ThemeProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
