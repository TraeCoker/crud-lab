import cuid from 'cuid';
export const cuidFn = cuid;

function restaurantsReducer(state = [], action) {

    switch (action.type){
        case "ADD_RESTAURANT":
            const newRestaurant = {
                ...action.payload,
                id: cuid()
            }
            return [...state, newRestaurant] ;
        case "DELETE_RESTAURANT":
            return state.filter(r => r.id !== action.restaurantId)
        default:
        return state;
    };
};

export default restaurantsReducer