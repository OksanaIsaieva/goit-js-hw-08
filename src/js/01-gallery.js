// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import "../css/01-gallery.css";


console.log(SimpleLightbox);
console.log(galleryItems);
const galeryList = document.querySelector(".gallery");
galleryItems.forEach ((item) => {
    
    galeryList.insertAdjacentHTML('beforeend', `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
      />
    </a>
  </li>`)
});

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
 });
 // Change code below this line