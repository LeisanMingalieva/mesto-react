import React from 'react';
import {api} from '../utils/Api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
  const [cards, setCards] = React.useState([])
  const currentUser = React.useContext(CurrentUserContext)
  
  React.useEffect(() => {
    api.getInitialCards()
      .then(result => {
        setCards(result)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

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
                cards.map((card) => (
                  <Card
                    key = {card._id}
                    card = {card}
                    title = {card.name}
                    likeCount = {card.likes.length}
                    image = {card.link}
                    onCardClick = {props.onCardClick}
                  />
                ))
              }
            </ul>
        </section>
    </main>    
  );
}

export default Main;