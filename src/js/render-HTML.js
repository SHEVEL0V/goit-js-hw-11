import Notiflix from 'notiflix';
// import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export default function renderCards(r, page) {
  const htmlArey = [];
  const dataArey = r.data.hits;
  const total = r.data.total;
  if (page === 1 && total !== 0) {
    Notiflix.Notify.info(`Hooray! We found ${total} images.`);
    document.querySelector('.load-more ').classList.remove('none-btn');
  }
  if (total === 0) {
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.',
    );
    document.querySelector('.load-more ').classList.add('none-btn');
  }
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
  makaCards(htmlArey);
}

function makaCards(h) {
  const gallery = document.querySelector('.gallery');
  gallery.insertAdjacentHTML('beforeend', h.join(''));
  // new SimpleLightbox(".gallery a");
}
