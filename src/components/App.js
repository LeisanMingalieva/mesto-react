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
        <section className="popup popup_type_profile ">
          <div className="popup__content">
            <button type="button" className="popup__close" />
            <h2 className="popup__form-heading">Редактировать профиль</h2>
            <form name="profileForm" className="popup__form-container" noValidate>                
              <fieldset className="popup__form-field">
                <input placeholder="Имя" type="text" className="popup__form-item popup__form-item_el_name" id="input-name" required minLength={2} maxLength={40} name="name" />
                <span className="popup__form-item-error" id="input-name-error" />
              </fieldset>
              <fieldset className="popup__form-field">
                <input placeholder="О себе" type="text" className="popup__form-item popup__form-item_el_job" id="input-job" required minLength={2} maxLength={200} name="about" />
                <span className="popup__form-item-error" id="input-job-error" />
              </fieldset>            
              <button type="submit" className="popup__form-save">Сохранить</button>
            </form>
          </div>
        </section>
        <section className="popup popup_type_card">
          <div className="popup__content">
            <button type="button" className="popup__close" />            
            <h2 className="popup__form-heading">Новое место</h2>
            <form name="cardsForm" className="popup__form-container" noValidate>
              <fieldset className="popup__form-field">
                <input name="name" required id="input-place" type="text" placeholder="Название" minLength={2} maxLength={30} className="popup__form-item popup__form-item_el_place" />
                <span className="popup__form-item-error" id="input-place-error" />
              </fieldset> 
              <fieldset className="popup__form-field">
                <input name="link" required id="input-link" type="url" placeholder="Ссылка на картинку" className="popup__form-item popup__form-item_el_link" />
                <span className="popup__form-item-error" id="input-link-error" />
              </fieldset>                
              <button type="submit" className="popup__form-save">Создать</button>
            </form>
          </div>
        </section>
        <section className="popup popup_type_confirm">
        <div className="popup__content">
          <button type="button" className="popup__close" />
          <h2 className="popup__form-heading">Вы уверены?</h2>   
          <form name="confirmForm" className="popup__form-container">          
            <button type="submit" className="popup__form-save">Да</button>
          </form>
        </div>
      </section>
      <section className="popup popup_type_avatar">
        <div className="popup__content">
          <button type="button" className="popup__close" />            
          <h2 className="popup__form-heading">Обновить аватар</h2>
          <form name="avatarForm" className="popup__form-container" noValidate>
            <fieldset className="popup__form-field">
              <input name="avatar" required id="avatar-link" type="url" placeholder="Ссылка на картинку" className="popup__form-item popup__form-item_el_link" />
              <span className="popup__form-item-error" id="avatar-link-error" />
            </fieldset>                
            <button type="submit" className="popup__form-save">Сохранить</button>
          </form>
        </div>
      </section>    
        
        <template id="cards-template" />
      </div>
  );
}

export default App;
