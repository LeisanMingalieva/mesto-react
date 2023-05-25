import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({card, image, title, likeCount, onCardClick, onCardLike, onCardDelete}) {
  const currentUser = React.useContext(CurrentUserContext)
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (`card__like ${isLiked && 'card__like_active'}`);
    
  function handleClick() {
    onCardClick(card);
  }
   
  function handleLikeClick() {
    onCardLike(card);
  }
  function handleCardDelete() {
    onCardDelete(card)
  }

  return (
    <li className="card">
      <img
        src={image}
        alt={title}
        className="card__image"
        onClick = {handleClick}
      />
      <div className="card__description">
        <h2 className="card__name">{title}</h2>
          <div>
            <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick} />
            <p className="card__like-count">{likeCount}</p>
          </div>                
      </div>    
        {isOwn && <button type="button" className="card__delete" onClick={handleCardDelete}/>}     
    </li>
  )
}

export default Card;