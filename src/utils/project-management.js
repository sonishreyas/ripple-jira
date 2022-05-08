import {
	collection,
	doc,
	query,
	setDoc,
	getDocs,
	where,
	updateDoc,
	deleteDoc,
} from "firebase/firestore";
import { db } from "backend/firebase/firebase";

const checkIfAdmin = (access, id) =>
	access.find((item) => item.id === id).role === "admin" ? true : false;

const checkIfDeveloper = (access, id) =>
	access.find((item) => item.id === id).role === "developer" ? true : false;

const checkIfMaintainer = (access, id) =>
	access.find((item) => item.id === id).role === "maintainer" ? true : false;

const addNewProject = (e, projectsState, projectsDispatch) => {
	e.preventDefault();
	(async () => {
		try {
			const newProjectRef = doc(collection(db, "projects"));
			await setDoc(newProjectRef, projectsState.newProject);
			projectsDispatch({
				type: "ADD_NEW_PROJECT",
				payload: {
					projectsData: { _id: newProjectRef.id, ...projectsState.newProject },
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

const getProjects = (authState, projectsDispatch) => {
	(async () => {
		try {
			const q = query(
				collection(db, "projects"),
				where("users", "array-contains", authState.uid)
			);
			const querySnapshot = await getDocs(q);
			const projectsData = [];
			querySnapshot.forEach((doc) => {
				let data = doc.data();
				projectsData.push({ id: doc.id, ...data });
			});
			projectsDispatch({
				type: "GET_PROJECTS",
				payload: { projectsData: projectsData },
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

const updateProject = (e, projectId, updatedValue, projectsDispatch) => {
	e.preventDefault();
	console.log(projectId);
	(async () => {
		try {
			const projectRef = doc(db, "projects", projectId);
			await updateDoc(projectRef, updatedValue);
			projectsDispatch({
				type: "UPDATE_PROJECT",
				payload: {
					projectsData: { id: projectId, ...updatedValue },
					selectedProject: { id: projectId, ...updatedValue },
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

const deleteProject = (e, projectId, projectsDispatch) => {
	e.preventDefault();

	(async () => {
		try {
			const projectRef = doc(db, "projects", projectId);
			await deleteDoc(projectRef);
			projectsDispatch({
				type: "DELETE_PROJECT",
				payload: {
					projectsData: projectId,
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

export {
	checkIfAdmin,
	checkIfDeveloper,
	checkIfMaintainer,
	addNewProject,
	getProjects,
	updateProject,
	deleteProject,
};
