import React from 'react';

function ImagePopup(props) {
  return (
    <section className= {`popup popup_type_image ${props.isOpen ? 'popup_opened' : ''}`} aria-label="Изображение">
        <figure className="popup__image-container">
            <button type="button" className="popup__close" onClick={props.onClose} />
            <img src={props.card.link} alt={props.card.name} className="popup__image" />
            <figcaption className="popup__image-title">{props.card.name}</figcaption>
        </figure>
    </section>
  );
}

export default ImagePopup;