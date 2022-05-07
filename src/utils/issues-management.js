import {
	collection,
	doc,
	query,
	setDoc,
	getDocs,
	where,
} from "firebase/firestore";
import { db } from "backend/firebase/firebase";

const addNewIssue = (e, issuesState, issuesDispatch) => {
	e.preventDefault();
	(async () => {
		try {
			const newIssueRef = doc(collection(db, "issues"));
			await setDoc(newIssueRef, issuesState.newIssue);
			issuesDispatch({
				type: "ADD_NEW_ISSUE",
				payload: {
					issuesData: { _id: newIssueRef.id, ...issuesState.newIssue },
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

const getIssues = (projectId, issuesDispatch) => {
	(async () => {
		try {
			const q = query(
				collection(db, "issues"),
				where("projectId", "array-contains", projectId)
			);
			const querySnapshot = await getDocs(q);
			const issuesData = [];
			querySnapshot.forEach((doc) => {
				let data = doc.data();
				issuesData.push({ id: doc.id, ...data });
			});
			issuesDispatch({
				type: "GET_ISSUES",
				payload: { issuesData: issuesData },
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

const getIconForIssueType = (type) => {
	switch (type) {
		case "Bug":
			return "fa-solid fa-square-exclamation";
		case "Task":
			return "fa-solid fa-square-check";
		case "Story":
			return "fa-solid fa-bookmark";
	}
};
export { addNewIssue, getIssues, getIconForIssueType };
