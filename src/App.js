import React from "react";

const movies = [
  { title: "La Casa de Muñecas de Gabby: La Película", genre: "Animación", duration: 99, status: "cartelera", image: "https://www.universalpictures.com.mx/tl_files/content/movies/gabbys_dollhouse/posters/01.jpg" },
  { title: "Ne Zha 2: El Renacer Del Alma", genre: "Animación", duration: 144, status: "cartelera", image: "https://elite-digital-cdn.app.vista.co/media/entity/get/FilmPosterGraphic/HO00000654?width=200" },
  { title: "Demon Slayer: Kimetsu no Yaiba - Castillo Infinito", genre: "Animación", duration: 155, clasificacion: "+15", status: "cartelera", image: "https://a.storyblok.com/f/178900/551x838/40a2f35905/castilloinfinito-imaxlatam.jpg/m/filters:quality(95)format(webp)" },
  { title: "El Conjuro 4: Últimos Ritos", genre: "Terror", duration: 136, clasificacion: "+15", status: "cartelera", image: "https://m.media-amazon.com/images/M/MV5BM2VmMzRkYzgtMzg2ZC00OTFkLTkwMTYtNTMxNjM2YzI1MjgyXkEyXkFqcGc@._V1_.jpg" },
  { title: "Una Batalla Tras Otra", duration: 162, clasificacion: "+15", status: "cartelera", image: "https://m.media-amazon.com/images/M/MV5BODA4MzZhYTctNWUyYy00ZjA3LWI3ZTgtZDkwMDMyN2U1YmRkXkEyXkFqcGc@._V1_.jpg" },
  { title: "La Hermanastra Fea", duration: 110, status: "cartelera", image: "https://m.media-amazon.com/images/M/MV5BNDEyNzQ0MzgtNjhjNS00NDkxLWI0ZTUtOGZlMWJlNmNiZTkxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },

  { title: "Batman Azteca: Choque de Imperios", genre: "Animación", duration: 91, status: "cartelera", image: "https://m.media-amazon.com/images/M/MV5BYmQ4ODAwNDktYTQ4OC00MWUyLTk2YTYtY2I1OTM3MjBkYWJjXkEyXkFqcGc@._V1_.jpg" },
  { title: "Desastre En Familia", genre: "Comedia", duration: 95, status: "cartelera", image: "https://media-cache.cinematerial.com/p/500x/4mghfcaq/desastre-en-familia-mexican-movie-poster.jpg?v=1758737209" },

  { title: "Camina O Muere", genre: "Acción, Aventura", duration: 109, status: "cartelera", image: "https://statics.cinemex.com/movie_posters/ANLUh7l9YmvVExV-750x1125.jpg" },
  { title: "Cazadores Del Fin Del Mundo", genre: "Acción, Aventura", duration: 106, status: "cartelera", image: "https://storage.googleapis.com/citicinemas-store/Movie-2138/poster/GLjEuzdsonyz/CAZADORES%20DEL%20FIN%20DEL%20MUNDO.jpg" },
  { title: "El Gran Viaje De Tu Vida", genre: "Drama, Aventura", duration: 109, status: "cartelera", image: "https://tickets-static-content.cinepolis.com/pimcore/7415/assets/Mexico/Tickets/Movies/ElGranViajeDeTuVida/Es/ABBBJ_720x1022_1_copia/resource.jpg" },
  { title: "Animales Peligrosos", genre: "Terror", duration: 98, clasificacion: "+15", status: "cartelera", image: "https://m.media-amazon.com/images/M/MV5BMTg5M2ZjNjItZThiZi00NDFiLTg3NmYtMmFhZTkxZWQ2OWVmXkEyXkFqcGc@._V1_.jpg" },
  { title: "Otro viernes de locos", status: "cartelera", image: "https://lumiere-a.akamaihd.net/v1/images/image002_eef65ea3.jpeg" },
  { title: "Los 4 Fantásticos: primeros pasos", status: "cartelera", image: "https://es.web.img3.acsta.net/c_310_420/img/a8/7c/a87c158d7a0c9ac165a2d6e740c14af7.jpg" },
  { title: "Los Tipos Malos 2", status: "cartelera", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqp0Ijindu92VolIf59j1zR3rtnstYw5IZQQ&s" },
  { title: "Toy Story (30 Aniversario)", genre: "Animación", status: "cartelera", image: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/WFMXZIWL7BCAFGUWPNPAAUHRZY.jpg" },
  { title: "200 Lobo", status: "cartelera", image: "https://img.vwassets.com/cinelinternamagica.com.mx/vertical_bda0e398-a132-44e9-be83-3feb8dda973b.jpg" },

  { title: "Taylor Swift The Official Release Party of...", status: "proximamente", estreno: "2025-10-03", image: "https://tickets-static-content.cinepolis.com/pimcore/7670/assets/Mexico/Tickets/Movies/TaylorSwiftTheOfficialReleasePartyof/Es/720x1022px_6/resource.jpg" },
  { title: "Los Extraños: Capítulo 2", genre: "Terror", status: "proximamente", estreno: "2025-10-02", image: "https://statics.cinemex.com/movie_posters/OsipR7j6qfqUGjl-360x540.jpg" },
  { title: "Tron: Ares", genre: "Ciencia Ficción", duration: 119, status: "proximamente", estreno: "2025-10-09", image: "https://lumiere-a.akamaihd.net/v1/images/imagen_1_d1448555.jpeg?region=0,0,660,977" },
  { title: "Teléfono Negro 2", genre: "Terror", status: "proximamente", estreno: "2025-10-16", image: "https://www.universalpictures.com.mx/tl_files/content/movies/black_phone_2/posters/01.jpg" },
  { title: "Downton Abbey: El Gran Final", genre: "Drama", status: "proximamente", estreno: "2025-10-09", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZISHybQiui0oHOEaV1pAWOhZAeU1LcY1qEw&s" },
  { title: "Kygo: Back at the Bowl", genre: "Concierto Documental", status: "proximamente", image: "https://statics.cinemex.com/movie_posters/yGtU7SkUuRzv6Rx-750x1125.jpg" },
  { title: "Volver Al Futuro", genre: "Ciencia Ficción", status: "proximamente", image: "https://cdn.cinencuentro.com/wp-content/uploads/2015/10/POSTER.jpg" },
  { title: "Jesús, Luz Del Mundo", genre: "Drama", status: "proximamente", image: "https://m.media-amazon.com/images/M/MV5BYzM2YzJiNTktMGVjZS00ZmUxLWJhOTItOWUxY2QwM2QwNDRkXkEyXkFqcGc@._V1_.jpg" },
  { title: "Super Wings: Máxima Velocidad", genre: "Animación", status: "proximamente", image: "https://m.media-amazon.com/images/M/MV5BODFmODhlYjktZWYwNi00NWVhLThiYjEtMGU0OTM2NjNmYThhXkEyXkFqcGc@._V1_.jpg" },
  { title: "BTS 2016 Live Epilogue Remastered", genre: "Concierto", status: "proximamente", image: "https://tickets-static-content.cinepolis.com/pimcore/6462/assets/Mexico/Tickets/Movies/BTS2016HYYHOnStageEpilogoRemasteriz/Es/Poster_WEB_Desktop_720x1022px_BTS_Epilogue_3/resource.jpg" },
  { title: "BTS 2017 Live Trilogy EPISODE III THE WINGS TOUR THE FINAL Remastered", genre: "Concierto", duration: 107, status: "proximamente", image: "https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster--dark-mode.png/0/images/masterrepository/Fandango/241955/2017-BTS-THE-WINGS-TOUR_ONE-SHEET-ARTWORK-ENGLISH.jpg" },
  { title: "BTS 2019 'SPEAK YOURSELF' LONDON Remasterizado", genre: "Concierto", status: "proximamente", image: "https://tickets-static-content.cinepolis.com/pimcore/6463/assets/Mexico/Tickets/Movies/BTS2019SPEAKYOURSELFLONDONRemasteriza/Es/Poster_WEB_Desktop_720x1022px_BTS_LoveYourself_copia_2_/resource.jpg" },
  { title: "BTS 2021 MUSTER SOWOOZOO Remastered", genre: "Concierto", status: "proximamente", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwNOh_k_UCc0MJVM2hODmeBOm79lY9UbJKDg&s" }
];

const getMovieDuration = (min) => {
  const hrs = Math.floor(min / 60);
  const mins = min % 60;
  return `${hrs}h ${mins}m`;
};

function getMovieImage(movie) {
  if (movie.image) return movie.image;
  return "/public/img/CineCDN.png"; 
}

function countdownRelease(fechaEstreno) {
  const releaseDate = new Date(fechaEstreno).getTime();
  const now = new Date().getTime();
  const diff = releaseDate - now;
  if (diff <= 0) return "¡Ya en estreno!";
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  return `${days} días para estreno`;
}

async function fetchMoviesAsync() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(movies), 1000);
  });
}

function Navbar() {
  React.useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-transparent w-100"
      style={{ zIndex: 1000 }}>
      <div className="container-fluid">
        <div className="row w-100 align-items-center text-center">
          <div className="col-4 text-start">
            <ul className="navbar-nav d-flex flex-row">
              <li className="nav-item mx-2"><a className="nav-link active" href="#">Películas</a></li>
              <li className="nav-item mx-2"><a className="nav-link" href="#">Alimentos</a></li>
              <li className="nav-item mx-2"><a className="nav-link" href="#">Promos</a></li>
              <li className="nav-item mx-2"><a className="nav-link" href="#">Especiales</a></li>
            </ul>
          </div>
          <div className="col-4">
            <a className="navbar-brand fw-bold text-warning" href="#">
              Cine CDN
            </a>
          </div>
          <div className="col-4 text-end">
            <a href="#" className="text-white fs-4">
              <i className="bi bi-person-circle"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Carousel() {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item">
          <img src="/img/CineCDN.png" className="d-block w-100" alt="Mi imagen local" />
        </div>
        <div className="carousel-item active">
          <img src="https://cinesunidosweb.blob.core.windows.net/slider/HO00005679.jpg"
            className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://media.ambito.com/p/946d32508208bd07eeedd122fcc3ad20/adjuntos/239/imagenes/042/607/0042607687/1200x675/smart/kimetsu-no-yaiba.jpg"
            className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}

function MovieList({ status }) {
  const [moviesList, setMoviesList] = React.useState([]);

  React.useEffect(() => {
    fetchMoviesAsync().then(allMovies => {
      setMoviesList(allMovies.filter(m => m.status === status));
    });
  }, [status]);

  return (
    <div className="row mt-4">
      {moviesList.map((movie, idx) => (
        <div className="col-md-4 mb-3" key={idx}>
          <div className="card h-100 shadow">
            <img src={getMovieImage(movie)} className="card-img-top" alt={movie.title}
              style={{ height: "500px", objectFit: "cover" }} />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              {movie.genre && <p className="card-text">{movie.genre}</p>}
              {movie.duration && <p><strong>Duración:</strong> {getMovieDuration(movie.duration)}</p>}
              {movie.clasificacion && <p><strong>Clasificación:</strong> {movie.clasificacion}</p>}
              {movie.estreno && <p className="text-danger"><strong>{countdownRelease(movie.estreno)}</strong></p>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <div className="container mt-4">
        <h1 className="text-center">Bienvenido a Cine CDN</h1>
        <p className="text-center">Tu cine favorito con React y Bootstrap</p>
        <div className="container mt-4">
          <h2> En Cartelera</h2>
          <MovieList status="cartelera" />
          <h2 className="mt-5"> Próximos Estrenos</h2>
          <MovieList status="proximamente" />
        </div>
      </div>
    </div>
  );
}

export default App;
