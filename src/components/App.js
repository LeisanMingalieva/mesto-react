import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import {api} from '../utils/Api';
function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [isImageOpen, setIsImageOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({})
  const [currentUser, setCurrentUser] = React.useState({})

  React.useEffect(() => {
    api.getUserData()
      .then(res => setCurrentUser(res)
      )
      .catch((err) => {
        console.log(err)
      })
  }, [])

  function handleCardClick(card) {
    setIsImageOpen(true)
    setSelectedCard(card)
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsImageOpen(false)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }  

  return (
  <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header />

      <Main
        onEditProfile = {handleEditProfileClick}
        onAddPlace = {handleAddPlaceClick}
        onEditAvatar = {handleEditAvatarClick}
        onCardClick = {handleCardClick}
      />
         
      <Footer />

      <PopupWithForm
        name = 'profileForm'
        title = 'Редактировать профиль'
        buttonText= 'Сохранить'
        isOpen={isEditProfilePopupOpen}      
        onClose={closeAllPopups}
      > 
        <fieldset className="popup__form-field">
          <input
            placeholder="Имя"
            type="text"
            className="popup__form-item popup__form-item_el_name"
            id="input-name"
            required
            minLength={2}
            maxLength={40}
            name="name"
          />
          <span className="popup__form-item-error" id="input-name-error" />
        </fieldset>
        <fieldset className="popup__form-field">
          <input
            placeholder="О себе"
            type="text"
            className="popup__form-item popup__form-item_el_job"
            id="input-job"
            required
            minLength={2}
            maxLength={200}
            name="about"
          />
          <span className="popup__form-item-error" id="input-job-error" />
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        name = 'cardsForm'
        title = 'Новое место'
        buttonText= 'Создать'
        isOpen={isAddPlacePopupOpen}      
        onClose={closeAllPopups}
      > 
        <fieldset className="popup__form-field">
          <input
            name="name"
            required
            id="input-place"
            type="text"
            placeholder="Название"
            minLength={2}
            maxLength={30}
            className="popup__form-item popup__form-item_el_place"
          />
          <span className="popup__form-item-error" id="input-place-error"/>
        </fieldset>
        <fieldset className="popup__form-field">
          <input
            name="link"
            required
            id="input-link"
            type="url"
            placeholder="Ссылка на картинку"
            className="popup__form-item popup__form-item_el_link"
          />
          <span className="popup__form-item-error" id="input-link-error" />
        </fieldset>
      </PopupWithForm>
        <ImagePopup 
          isOpen={isImageOpen}
          onClose={closeAllPopups}
          card={selectedCard}
      />
      <PopupWithForm
        name='confirmForm'
        title = 'Вы уверены?'
        isOpen={false}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name = 'avatarForm'
        title = 'Обновить аватар'
        buttonText= 'Сохранить'
        isOpen={isEditAvatarPopupOpen}      
        onClose={closeAllPopups}
      >
        <fieldset className="popup__form-field">
          <input
            name="avatar"
            required
            id="avatar-link"
            type="url"
            placeholder="Ссылка на картинку"
            className="popup__form-item popup__form-item_el_link"
          />
          <span className="popup__form-item-error" id="avatar-link-error" />
        </fieldset>
      </PopupWithForm>           
    </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
