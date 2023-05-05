import logo from './image/header_logo.svg';
import './index.css';

function App() {
  return (
    <div className="page">
        <header className="header">
        <img src={logo} alt="Логотип" className="header__logo" />
        </header>
        <main>
          <section className="profile">
            <div className="profile__info">
              <div className="profile__avatar-container">
                <img className="profile__avatar" src="#" alt="" />
              </div>
              <div className="profile__description">
                <div className="profile__up">
                  <h1 className="profile__name">Жак Ив Кусто</h1>
                  <button type="button" className="profile__edit" />
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
        <footer className="footer">
          <p className="footer">© 2023 Mesto Russia</p>
        </footer>
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
        <section className="popup popup_type_image" aria-label="Изображение">
          <figure className="popup__image-container">
            <button type="button" className="popup__close" />
            <img src="#" alt="#" className="popup__image" />
            <figcaption className="popup__image-title">Байкал</figcaption>
          </figure>
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
