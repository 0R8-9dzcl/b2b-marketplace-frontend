import React from 'react';
import './AccountCompanySeller.scss';
import IconMail from '../../../UI/Icon/Icon_mail';
import IconPhone from '../../../UI/Icon/Icon_phone';
import AccountTitle from '../../../UI/Account/AccountTitle/AccountTitle';
import IconStarAccount from '../../../UI/Icon/Icon_star-account';
import Tooltip from '../../../UI/Tooltip/Tooltip';
import AccountInputField from '../../../UI/Account/AccountInputField/AccountInputField';
import IconPencil from '../../../UI/Icon/Icon_pencil';
import IconInfoFil from '../../../UI/Icon/Icon_info_fill';

const AccountCompanySeller = () => {
  return (
    <section className="account-company-seller">
      <div>
        <div className="account-company-seller__conteiner">
          <AccountTitle name="ООО «Компания»" title="Продавец" icon={<IconPencil />} />
          <IconStarAccount />
          <span className="account-company-seller__rating">5,0</span>
        </div>
        <form className="account-company-seller__form">
          <textarea
            className="account-company-seller__description"
            name="comment"
            cols="40"
            rows="3"
            placeholder="Описание компании"></textarea>
          <h2 className="account-company-seller__title">Данные продавец</h2>
          <AccountInputField label="Счет" placeholder="000000000 0000" type="number" />
          <AccountInputField label="ИНН" placeholder="000000000 0000" type="number" />
          <AccountInputField label="ОГРН" placeholder="000000000 0000" type="number" />
          <AccountInputField label="Регион доставки" placeholder="Город" type="text" />

          <h2 className="account-company-seller__title">
            Контакты
            <Tooltip
              position="right"
              tooltipContent={
                <>Эти данные видите только&nbsp;вы, они скрыты от&nbsp;покупателей</>
              }>
              <IconInfoFil />
            </Tooltip>
          </h2>
          <AccountInputField label="Почта" placeholder="Почта" type="email" icon={<IconMail />} />
          <AccountInputField
            label="Телефон"
            placeholder="Телефон"
            type="tel"
            icon={<IconPhone />}
          />
        </form>
      </div>
    </section>
  );
};

export default AccountCompanySeller;
