import React from 'react';
import {api} from '../utils/Api';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = React.useState('')
  const [userDescription, setUserDescription] = React.useState('')
  const [userAvatar, setUserAvatar] = React.useState('')
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    api.getUserData()
      .then(result => {
        setUserName(result.name)
        setUserDescription(result.about)
        setUserAvatar(result.avatar)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [userName, userDescription, userAvatar])

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
                <img onClick = {props.onEditAvatar} className="profile__avatar" src={userAvatar} alt={userName} />
              </div>
              <div className="profile__description">
                <div className="profile__up">
                  <h1 className="profile__name">{userName}</h1>
                  <button onClick = {props.onEditProfile} type="button" className="profile__edit" />
                </div>                    
                <p className="profile__text">{userDescription}</p>
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