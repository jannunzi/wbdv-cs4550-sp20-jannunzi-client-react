import React from "react";
import MovieSearchComponent from "./movieSearchComponent";
import MovieDetailsComponent from "./movieDetailsComponent";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

export default class OmdbComponent extends React.Component {
    render() {
        return(
            <Router>
                <div className={`container`}>
                    <h1>Omdb Client</h1>

                    <Route
                        path={`/`}
                        exact={true}
                        component={MovieSearchComponent}/>

                    <Route
                        path={`/search/:searchTitle`}
                        exact={true}
                        component={MovieSearchComponent}/>

                    <Route
                        path={`/movie/:imdbID`}
                        exact={true}
                        component={MovieDetailsComponent}/>
                </div>
            </Router>
        )
    }
}
