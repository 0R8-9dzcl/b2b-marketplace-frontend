import IconYandex from "../../UI/Icon/IconYandex";
import IconVK from '../../UI/Icon/IconVK';
import IconGmail from '../../UI/Icon/IconGmail';
import { Button } from '../../UI/Button/Button';
import Popup from "../Popup";
import PopupButtons from "../PopupButtons/PopupButtons";

const SelectPopup = ({ onSelectType, isOpen, onClose }) => {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <div className="popup__container">
        <h2 className="popup__title">Добро пожаловать!</h2>
        <p className="popup__subtitle">Войдите в личный кабинет и&nbsp;попробуйте&nbsp;больше возможностей сайта</p>
        <div className="popup__socials">
          <button className="popup__social">
            <IconYandex />
          </button>
          <button className="popup__social">
            <IconGmail />
          </button>
          <button className="popup__social">
            <IconVK />
          </button>
        </div>
        <PopupButtons
          onClick={onSelectType}
          value1="register"
          value2="login"
          buttonText1="Зарегистрироваться"
          buttonText2="Войти"
        />
      </div>
    </Popup>
  );
};

export default SelectPopup;
