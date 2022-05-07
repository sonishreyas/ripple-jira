import { BoardContent } from "components";
import { useDocumentTitle } from "custom-hooks";
const Board = () => {
	useDocumentTitle("Board | Ripple Jira");
	return <BoardContent />;
};
export { Board };
