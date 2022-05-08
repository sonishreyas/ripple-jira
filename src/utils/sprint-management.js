import {
	collection,
	doc,
	query,
	setDoc,
	getDocs,
	where,
	updateDoc,
} from "firebase/firestore";
import { db } from "backend/firebase/firebase";

const addNewSprint = (e, newSprint, sprintsDispatch) => {
	e.preventDefault();
	(async () => {
		try {
			const newSprintRef = doc(collection(db, "sprints"));
			await setDoc(newSprintRef, newSprint);
			sprintsDispatch({
				type: "ADD_NEW_SPRINT",
				payload: {
					sprintsData: { _id: newSprintRef.id, ...newSprint },
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

const getSprints = (sprintsDispatch) => {
	(async () => {
		try {
			const q = query(
				collection(db, "sprints"),
				where("status", "!=", "completed")
			);
			const querySnapshot = await getDocs(q);
			const sprintsData = [];
			querySnapshot.forEach((doc) => {
				let data = doc.data();
				sprintsData.push({ id: doc.id, ...data });
			});
			sprintsDispatch({
				type: "GET_SPRINTS",
				payload: { sprintsData: sprintsData },
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

const updateSprint = (e, sprintId, updatedValue, sprintsDispatch) => {
	e.preventDefault();
	console.log(sprintId);
	(async () => {
		try {
			const sprintRef = doc(db, "sprints", sprintId);
			await updateDoc(sprintRef, updatedValue);
			sprintsDispatch({
				type: "UPDATE_SPRINT",
				payload: {
					sprintsData: { id: sprintId, ...updatedValue },
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

const getSprintById = (activeId, data) =>
	data.filter((item) => item.id === activeId)[0];
export { addNewSprint, getSprints, updateSprint, getSprintById };
