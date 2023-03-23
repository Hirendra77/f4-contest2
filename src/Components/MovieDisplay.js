
const MovieDisplay = ({movies}) => {
     
    return(
        <table>
            <thead>
                <tr> 
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Year</th>
                </tr>

                {
                    movies.map(movie =>(
                          <tr>
                                <td>{movie.title}</td>
                                <td>{movie.genre}</td>
                                <td>{movie.year}</td>
                          </tr>
                    ))
                }

            </thead>



        </table>
    )
}

export default MovieDisplay