
import cuid from 'cuid';
export const cuidFn = cuid;

function reviewsReducer(state= [], action) {
    switch (action.type) {
        case "ADD_REVIEW":
            const newReview = {
                ...action.review,
                id: cuid(),
            }
            return [...state, newReview];
        case "DELETE_REVIEW":
            return state.filter(r => r.id !== action.reviewId)
        default:
            return state;
    };
};

export default reviewsReducer