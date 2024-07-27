
import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, renderError, clearGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector('.search-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = event.currentTarget.elements.searchQuery.value.trim();

  if (query === '') {
    renderError('Please enter a search query.');
    return;
  }

  clearGallery();
  try {
    const data = await fetchImages(query);

    if (data.hits.length === 0) {
      renderError('Sorry, there are no images matching your search query. Please try again!');
      return;
    }

    renderGallery(data.hits);
  } catch (error) {
    renderError('Failed to fetch images. Please try again later.');
  }
});


