import { FETCH_STARWARS_START, FETCH_STARWARS_SUCCESS, FETCH_STARWARS_FAIL } from '../actions';

const initialState = {
    films: [],
    error: '',
    isFetching: false
};

export const reducer = (state = initialState, action) => {
    console.log('reducer', action);
    switch (action.type) {
        case FETCH_STARWARS_START:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_STARWARS_SUCCESS:
            return {
                ...state,
                films: action.payload,
                isFetching: false,
            };
        case FETCH_STARWARS_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

        default:
            return state;
    }
}
