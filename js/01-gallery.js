import { galleryItems } from './gallery-items.js'
// Change code below this line

const gallery = document.querySelector('.gallery')

const imagesHTML = galleryItems.map(({ preview, original, description }) => {
	return `<div class='gallery__item'>
	  <a class='gallery__link' href='${original}'>
		<img class='gallery__image' src='${preview}' data-source='${original}' alt='${description}' />
	  </a>
	</div>`;
  });
  gallery.insertAdjacentHTML('beforeend', imagesHTML.join(''));

  gallery.addEventListener('click', event => {
	event.preventDefault()
	if (event.target.tagName === 'IMG') {
		const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" alt="${event.target.alt}">`,
	  {
		onClose: instance => {gallery.removeEventListener('keydown', onEscapePress);},
	  }
    );

    const onEscapePress = (event) => {
      if (event.key === 'Escape') {
			  instance.close();
			}
    };
		instance.show();
		gallery.addEventListener('keydown', onEscapePress);
	};
});



// for (const item of galleryItems) {
// 	const html = `<li><div class="gallery__item">
//     <a class="gallery__link" href="large-image.jpg">
//       <img
//         class="gallery__image"
//         src="small-image.jpg"
//         data-source="large-image.jpg"
//         alt="Image description"
//       />
//     </a>
//   </div></li>`
// 	gallery.insertAdjacentHTML('beforeend', html);
// }
