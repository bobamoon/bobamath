import MovieCard from "../components/MovieCard"
import {useState} from "react"

function Home() {

	const [seachQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "john wick", release_date: "2020" },
        { id: 2, title: "CHUD", release_date: "1984" },
        { id: 3, title: "Jurassic Park", release_date: "2020" },
        { id: 4, title: "The Matric", release_date: "2020" },
        { id: 5, title: "Caddy Shack", release_date: "2020" },
    ];

    const handleSearch = () => {
		e.preventDefault()
		alert(seachQuery)
		setSearchQuery("")
    }

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
				type="text" 
				placeholder="Search for movies..." 
				className="seach-input" 
				value = {seachQuery}
				onChange = {(e) => setSearchQuery(e.target.value)}/>
			<button type="submit" className="seach-button">search</button>
        </form>
        <div className="movies-grid">
            {movies.map(
				(movie) => 
				(
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    </div>

}

export default Home
