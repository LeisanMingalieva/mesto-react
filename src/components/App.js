import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  return (
    <div className="page">
        <Header />
        <Main />
        <PopupWithForm />
        <ImagePopup />    
        <Footer /> 
        <PopupWithForm
          name = 'profile'
          title = 'Редактировать профиль'
          buttonText= 'Сохранить'
          isOpen={isEditProfilePopupOpen}      
          onClose={closeAllPopup}
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
          name = 'card'
          title = 'Новое место'
          buttonText= 'Сохранить'
          isOpen={isAddPlacePopupOpen}      
          onClose={closeAllPopup}
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
        {/* <PopupWithForm
          name = 'confirm'
          title = 'Вы уверены?'
          buttonText= 'Да'
          isOpen={isConfirmPopupOpen}      
          onClose={closeAllPopup}
        >
        </PopupWithForm>              */}
        {/* <section className="popup popup_type_confirm">
        <div className="popup__content">
          <button type="button" className="popup__close" />
          <h2 className="popup__form-heading">Вы уверены?</h2>   
          <form name="confirmForm" className="popup__form-container">          
            <button type="submit" className="popup__form-save">Да</button>
          </form>
        </div>
      </section> */}
      <PopupWithForm
        name = 'avatar'
        title = 'Обновить аватар'
        buttonText= 'Сохранить'
        isOpen={isEditAvatarPopupOpen}      
        onClose={closeAllPopup}
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
                 
      <template id="cards-template" />
      </div>
  );
}

export default App;
