import React from 'react';

function Main() {

  return (
    <main>
        <section className="profile">
            <div className="profile__info">
              <div className="profile__avatar-container">
                <img onClick = {isEditAvatarPopupOpen}className="profile__avatar" src="#" alt="" />
              </div>
              <div className="profile__description">
                <div className="profile__up">
                  <h1 className="profile__name">Жак Ив Кусто</h1>
                  <button onClick = {isEditProfilePopupOpen} type="button" className="profile__edit" />
                </div>                    
                <p className="profile__text">Исследователь океана</p>
              </div>
            </div>
            <button onClick = {isAddPlacePopupOpen} type="button" className="profile__add" />                      
        </section>
        <section aria-label="Фото" className="elements">
            <ul className="cards">
            </ul>
            {/* {cards.map((card) => {
              <Card
                key = {card.cardId}
                likes = {card.likes}
                name = {card.name}
                link = {card.link}
                onCardClick = {onCardClick}
              />
            })} */}
        </section>
    </main>    
  );
}

export default Main;