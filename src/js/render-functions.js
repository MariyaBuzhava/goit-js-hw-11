import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";

export function renderGallery(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images
    .map(
      (image) => `
        <div class="gallery-item">
      <a href="${image.largeImageURL}" target="_blank">
        <img src="${image.webformatURL}" alt="${image.tags}" />
      </a>
      <div class="info">
        <p><strong>Likes:</strong> ${image.likes}</p>
        <p><strong>Views:</strong> ${image.views}</p>
        <p><strong>Comments:</strong> ${image.comments}</p>
        <p><strong>Downloads:</strong> ${image.downloads}</p>
      </div>
    </div>
  `
    )
    .join('');
  gallery.innerHTML = markup;
}

export function renderError(message) {
  iziToast.error({
    message: message,
    position: "topRight",
    backgroundColor: "#ef4040",
    messageColor: "#fff",
    iconUrl: svgIconUrl,
    iconColor: "#fff"
  });
}

export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}

const svgIconUrl = '../symbol-defs.svg#icon-bi_x-octagon';
