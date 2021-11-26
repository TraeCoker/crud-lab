import { combineReducers } from "redux";
import restaurantsReducer from './restaurantsReducer';
import reviewsReducer from './reviewsReducer';
import cuid from 'cuid';
export const cuidFn = cuid;


const rootReducer = combineReducers({
  restaurants: restaurantsReducer,
  reviews: reviewsReducer
});

export default rootReducer;