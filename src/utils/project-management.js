import {
	collection,
	doc,
	query,
	setDoc,
	getDocs,
	where,
} from "firebase/firestore";
import { db } from "backend/firebase/firebase";

const checkIfAdmin = (access, id) =>
	access.find((item) => item.id === id).role === "admin" ? true : false;

const checkIfDeveloper = (access, id) =>
	access.find((item) => item.id === id).role === "developer" ? true : false;

const checkIfReadOnly = (access, id) =>
	access.find((item) => item.id === id).role === "read-only" ? true : false;

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

export {
	checkIfAdmin,
	checkIfDeveloper,
	checkIfReadOnly,
	addNewProject,
	getProjects,
};
