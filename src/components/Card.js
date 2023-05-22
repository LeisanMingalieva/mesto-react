import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card(props) {
    const currentUser = React.useContext(CurrentUserContext)
    const isOwn = props.card.owner._id === currentUser._id;
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = (`card__like ${isLiked && 'card__like_active'}`);
    
    function handleClick() {
        props.onCardClick(props.card);
    }
    function handleLikeClick() {
        props.onCardLike(props.card);
    }
    function handleCardDelete() {
        props.onCardDelete(props.card)
    }

    return (
        <li className="card">
            <img
            src={props.image}
            alt={props.title}
            className="card__image"
            onClick = {handleClick}
            />
            <div className="card__description">
                <h2 className="card__name">{props.title}</h2>
                <div>
                    <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick} />
                    <p className="card__like-count">{props.likeCount}</p>
                </div>                
            </div>    
            {isOwn && <button type="button" className="card__delete" onClick={handleCardDelete}/>}     
        </li>
    )
}