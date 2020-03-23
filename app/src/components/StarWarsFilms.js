import React from 'react';
import { connect } from 'react-redux';
import { getSWFilms } from '../actions';
import Loader from 'react-loader-spinner';

const StarWarsFilms = props => {
    const fetchSW = e => {
        e.preventDefault();
        props.getSWFilms();
    };

    return (
        <div className="sw-film-list">
            <h1 className="list-title">Star Wars Film List!</h1>
            {props.isFetching && <p className="is-fetching-msg">Fetching your list of Star Wars films...</p>}
            <div>
                {props.films.map(film => (
                    <p className="film-items" key={film.episode_id}>{film.title}</p>
                ))}
            </div>
            {props.error && <p className="error">{props.error}</p>}
            <button className="fetch-button" onClick={fetchSW}>Get Star Wars Films!</button>

            {props.isFetching && (
                <Loader
                    type="BallTriangle"
                    color="red"
                    height={100}
                    width={100}
                    timeout={5000}
                />
            )}
        </div>
    );
};

const mapStateToProps = state => {
    console.log('*****', state)
    return {
        films: state.films,
        error: state.error,
        isFetching: state.isFetching
    }
}

export default connect(
    mapStateToProps,
    { getSWFilms }
)(StarWarsFilms);
