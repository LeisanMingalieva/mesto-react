import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext)

  return (
    <main className="content">
        <section className="profile">
            <div className="profile__info">
              <div className="profile__avatar-container">
                <img onClick = {props.onEditAvatar} className="profile__avatar" src={currentUser.avatar} alt={currentUser.name} />
              </div>
              <div className="profile__description">
                <div className="profile__up">
                  <h1 className="profile__name">{currentUser.name}</h1>
                  <button onClick = {props.onEditProfile} type="button" className="profile__edit" />
                </div>                    
                <p className="profile__text">{currentUser.about}</p>
              </div>
            </div>
            <button onClick = {props.onAddPlace} type="button" className="profile__add" />                      
        </section>
        <section aria-label="Фото" className="elements">
            <ul className="cards">
              {
                props.cards.map((card) => (
                  <Card
                    key = {card._id}
                    card = {card}
                    title = {card.name}
                    likeCount = {card.likes.length}
                    image = {card.link}
                    onCardClick = {props.onCardClick}
                    onCardLike = {props.onCardLike}
                    onCardDelete = {props.onCardDelete}
                  />
                ))
              }
            </ul>
        </section>
    </main>    
  );
}

export default Main;