import React from "react";

export default class MovieDetailsComponent extends React.Component {


    // http://www.omdbapi.com/?i=tt3896198&apikey=4a249f8d
    // http://www.omdbapi.com/?i=tt3896198&apikey=4a249f8d


    componentDidMount() {
        const imdbID = this.props.match.params.imdbID
        fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=4a249f8d`)
            .then(response => response.json())
            .then(movie => {
                console.log(typeof movie.Actors)
                this.setState({
                    movie: movie
                })
            })
    }

    likes = (imdbID) => {
        alert("likes: " + imdbID)
        fetch(`http://localhost:8080/api/likes/${imdbID}`, {
            method: 'POST'
        }).then(this.setState({
                liked: true
            }))
    }

    unlike = () => {}

    state = {
        movie: {},
        liked: false
    }

    render() {
        return(
            <div>
                {   !this.state.liked &&
                    <button onClick={() => this.likes(this.props.match.params.imdbID)}>
                        Like
                    </button>
                }
                {   this.state.liked &&
                    <button onClick={() => this.unlike(this.props.match.params.imdbID)}>
                        Unlike
                    </button>
                }
                <h2>
                    Movie Details {this.props.match.params.imdbID}
                </h2>
                <h3>{this.state.movie.Title}</h3>
                <p>Directed by: {this.state.movie.Director}</p>
                <p>{this.state.movie.Plot}</p>
                <h4>Cast</h4>
                {this.state.movie.Actors}
                <ul>
                    {
                        this.state.movie.Actors && this.state.movie.Actors.split(',').map((actor, index) =>
                            <li key={index}>{actor}</li>
                        )
                    }
                </ul>
                <img src={this.state.movie.Poster}/>
            </div>
        )
    }
}
