import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export default function renderCards(r, page, perPage) {
  const htmlArey = [];
  const dataArey = r.data.hits;
  const total = r.data.total;
  const btnCl = document.querySelector('.load-more ').classList;

  dataArey.map(el => {
    const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = el;

    htmlArey.push(`
      <div class="photo-card">
       <a href=${largeImageURL}> <img src=${webformatURL} alt="${tags}" width = 300 loading="lazy" /></a>
        <div class="info">
         <p class="info-item"><b>Likes</b>${likes}</p>
         <p class="info-item"><b>Views</b>${views}</p>
         <p class="info-item"><b>Comments</b>${comments}</p>
         <p class="info-item"><b>Downloads</b>${downloads}</p>
        </div>
      </div>`);
  });
  if (total !== 0) {
    makaCards(htmlArey);
  }
  if (page === 1 && total !== 0) {
    Notiflix.Notify.info(`Hooray! We found ${total} images.`);
    btnCl.remove('none-btn');
  }
  if (total === 0) {
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.',
    );
    btnCl.add('none-btn');
  }
  if (total < page * perPage) {
    Notiflix.Notify.warning("We're sorry, but you've reached the end of search results.");
    btnCl.add('none-btn');
  }
}
function makaCards(h) {
  const gallery = document.querySelector('.gallery');
  gallery.insertAdjacentHTML('beforeend', h.join(''));
  new SimpleLightbox('.gallery a');
}
