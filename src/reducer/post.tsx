
enum ActionType {
  FETCH_POST = "FETCH_POSTS",
  DELETE_POSTS = "DELETE_POSTS"
}
interface Post {
  userId:number;
  id:number;
  title:number;
}

interface TodosAction {
  type: ActionType;
  text: string;
  payload: Post[];
}

const posts = (state= [], action:TodosAction) => {
  switch (action.type) {
    case "FETCH_POSTS":
        return [...state, ...action.payload]
    default:
      return state;
  }
}

export default posts;