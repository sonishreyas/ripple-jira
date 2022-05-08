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
				where("projectId", "==", projectId)
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

const deleteIssue = (e, issueId, issuesDispatch) => {
	(async () => {
		try {
			const issueRef = doc(db, "issues", issueId);
			await deleteDoc(issueRef);
			issuesDispatch({
				type: "DELETE_ISSUE",
				payload: {
					issuesData: issueId,
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

const updateIssue = (e, issueId, updatedIssue, issuesDispatch) => {
	(async () => {
		try {
			const issueRef = doc(db, "issues", issueId);
			await updateDoc(issueRef, updatedIssue);
			issuesDispatch({
				type: "UPDATE_ISSUE",
				payload: {
					issuesData: { id: issueId, ...updatedIssue },
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};
const getIconForIssueType = (type) => {
	switch (type) {
		case "Bug":
			return "fa-solid fa-circle-exclamation";
		case "Task":
			return "fa-solid fa-square-check";
		case "Story":
			return "fa-solid fa-bookmark";
	}
};
const getColorForIssueType = (type) => {
	switch (type) {
		case "Bug":
			return "bug";
		case "Task":
			return "task";
		case "Story":
			return "story";
	}
};

const getActiveSprintIssues = (activeIssues, issues) =>
	activeIssues.map((item) => issues.find(({ id }) => item === id));

const getIncompleteIssues = (currentIssues, issues) =>
	currentIssues.filter(
		(item) => issues.find((issue) => issue.id === item).category !== "Done"
	);

const getIssuesFromId = (issues, issueId) =>
	issues.filter((item) => item.id === issueId);

const getIssuesByCategory = (issues, category) =>
	issues.filter((issue) => issue.category === category);

export {
	addNewIssue,
	getIssues,
	getIconForIssueType,
	getActiveSprintIssues,
	getIncompleteIssues,
	getIssuesFromId,
	getColorForIssueType,
	updateIssue,
	deleteIssue,
	getIssuesByCategory,
};
