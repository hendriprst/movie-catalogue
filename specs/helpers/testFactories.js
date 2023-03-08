import FavoriteMovieIdb from '../../src/scripts/data/favorite-movie-idb';
import likeButtonPresenter from '../../src/scripts/utils/like-button-presenter';

const createLikeButtonPresenterWithMovie = async (movie) => {
  await likeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteMovies: FavoriteMovieIdb,
    movie,
  });
};

export { createLikeButtonPresenterWithMovie };
