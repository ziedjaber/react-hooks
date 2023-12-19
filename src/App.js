import './App.css'; // Importation du fichier de style
import { useState } from 'react'; // Importation du hook useState de React
import m from './assests/m'; // Importation de la liste de films initiale depuis le fichier m.js
import AddMovie from './Components/AddMovie'; // Importation du composant AddMovie
import MovieList from './Components/MovieList'; // Importation du composant MovieList

function App() {
  // Déclaration d'un état "movies" et de la fonction "setMovies" pour le mettre à jour
  const [movies, setMovies] = useState(m);

  // Fonction pour ajouter un nouveau film à la liste
  const addMovie = (title, description, rating, posterURL) => {
    // Création d'un nouvel objet représentant le nouveau film
    const newMovie = { title, description, rating, posterURL };
    // Mise à jour de la liste des films en ajoutant le nouveau film à l'aide du spread operator
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  // Rendu du composant App
  return (
    <div className="App">
      {/* Composant AddMovie pour ajouter un nouveau film */}
      <AddMovie onAdd={addMovie} />
      {/* Composant MovieList pour afficher la liste des films */}
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
