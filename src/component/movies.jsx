import React, { Component } from 'react';
import { getMovies } from "../services/fakeMovieService";

class Movie extends Component {
    state = {
        movie: getMovies()
    };
    handleDelete = _id => {
        let final_result = this.state.movie.filter(i => i._id !== _id);
        this.setState({ movie: final_result });

    }
    render() {


        return (
            <div>

                <p>Showing {this.state.movie.length} Movies in website </p>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movie.map(movie =>
                            <tr>
                                <td>{movie.title}</td>
                                <td>{movie.genre['name']}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><button className="btn btn-danger" onClick={() => this.handleDelete(movie._id)}>Delete</button></td>
                            </tr>
                        )}


                    </tbody>
                </table>


            </div>
        );


    }
}

export default Movie;