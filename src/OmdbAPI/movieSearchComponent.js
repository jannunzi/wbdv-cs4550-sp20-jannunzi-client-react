import React from "react";
import {Link} from "react-router-dom";

export default class MovieSearchComponent extends React.Component {

    componentDidMount() {
        let searchTitle = this.props.match.params.searchTitle;
        console.log(searchTitle)
        if(!searchTitle)
            searchTitle='batman'
        fetch(`http://www.omdbapi.com/?s=${searchTitle}&apikey=4a249f8d`)
            .then(response => response.json())
            .then(results => this.setState({
                movies: results.Search,
                searchTitle: searchTitle
            }))
    }

    searchMovies = (title) => {
        this.props.history.push(`/search/${title}`)
        fetch(`http://www.omdbapi.com/?s=${title}&apikey=4a249f8d`)
            .then(response => response.json())
            .then(results => this.setState({
                movies: results.Search
            }))
    }

    state = {
        movies: [
            {title: "Avatar"},
            {title: "Aliens"},
            {title: "Titanic"},
            {title: "Terminator 2"}
        ],
        searchTitle: ''
    }

    render() {
        return(
            <div>
                <h2>Search Movies</h2>
                <input
                    className={`form-control`}
                    onChange={e => this.setState({searchTitle: e.target.value})}
                    value={this.state.searchTitle}/>
                <button className={`btn btn-success btn-block`} onClick={() => this.searchMovies(this.state.searchTitle)}>
                    Search For Movie
                </button>
                <ul className={`list-group`}>
                    {
                        this.state.movies.map((movie, i) =>
                            <li className={`list-group-item`} key={i}>
                                <Link to={`/movie/${movie.imdbID}`}>
                                {movie.Title} {movie.imdbID}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }

}
