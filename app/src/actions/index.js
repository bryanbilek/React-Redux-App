import axios from 'axios';
export const FETCH_STARWARS_START = 'FETCH_STARWARS_START';
export const FETCH_STARWARS_SUCCESS = 'FETCH_STARWARS_SUCCESS';
export const FETCH_STARWARS_FAIL = 'FETCH_STARWARS_FAIL';

export const getSWFilms = () => dispatch => {
    dispatch({ type: FETCH_STARWARS_START });
    axios
        .get('https://swapi.co/api/films/')
        .then(res =>
            // console.log('%%%%%%%%', res.data.results)
            dispatch({ type: FETCH_STARWARS_SUCCESS, payload: res.data.results })
        )
        .catch(err => console.log(err))
        .catch(err => dispatch({ type: FETCH_STARWARS_FAIL, payload: err.res }));
};