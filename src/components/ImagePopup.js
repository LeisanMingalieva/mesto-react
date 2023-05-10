import React from 'react';

function ImagePopup() {
  return (
    <section className="popup popup_type_image" aria-label="Изображение">
        <figure className="popup__image-container">
            <button type="button" className="popup__close" />
            <img src="#" alt="#" className="popup__image" />
            <figcaption className="popup__image-title">Байкал</figcaption>
        </figure>
    </section>
  );
}

export default ImagePopup;