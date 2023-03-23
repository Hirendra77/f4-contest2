


function  GenreDisplay({movies, genreFilter}){
        
    let arr = movies.map(movie => movie.genre) // all genres
    let set = new Set(arr) // unique genres
    let genreArray =   [...set]  // [ 'Western', 'Drama', 'Science Fiction', 'Thriller', 'War', 'Animation']

    function updateGenre(e){
        genreFilter(e.target.value)
        console.log("button clicked is", e.target.value)
    }

  return(
       <div>
              {
                genreArray.map(
                    (value) => (
                        <button
                         onClick = {updateGenre}
                         value={value}
                        >{value}</button>
                    )

                )
              }
       </div>
  )

}

export default GenreDisplay