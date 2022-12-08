import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer"
import addpostReducer from "./addpostReducer";
import addCommentReducer from "./addCommentReducer"

const rootReducer = combineReducers({
    categoryReducer,addpostReducer,addCommentReducer
    })

export default rootReducer;