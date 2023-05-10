import React from 'react';

function Main() {
  function handleEditAvatarClick() {

  }
  function handleEditProfileClick() {
    
  }

  function handleAddPlaceClick() {
    
  }

  return (
    <main>
        <section className="profile">
            <div className="profile__info">
              <div className="profile__avatar-container">
                <img className="profile__avatar" src="#" alt="" />
              </div>
              <div className="profile__description">
                <div className="profile__up">
                  <h1 className="profile__name">Жак Ив Кусто</h1>
                  <button onClick = {handleEditProfileClick} type="button" className="profile__edit" />
                </div>                    
                <p className="profile__text">Исследователь океана</p>
              </div>
            </div>
            <button type="button" className="profile__add" />                      
        </section>
        <section aria-label="Фото" className="elements">
            <ul className="cards">
            </ul>
        </section>
    </main>    
  );
}

export default Main;