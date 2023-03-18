
import React from 'react';

function MovieList (movieArray){
  let array = movieArray.movieArray;
     return(
        <div>
            <table className="table">
                <tbody>
                    <tr>
                        <th >Title</th>
                        <th >Genre</th>
                        <th >Year</th>
                    </tr>
                {
                    array.map((data, i)=>{
                        return(
                            <tr key={i}>
                            <td>{data.title}</td>
                            <td>{data.genre}</td>
                            <td>{data.year}</td>
                          </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
     )

}

export default MovieList;