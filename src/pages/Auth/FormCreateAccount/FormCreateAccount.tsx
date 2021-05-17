import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonAuth from '../../../components/common/UI/Buttons/ButtonAuth/ButtonAuth';
import { LOGIN_ROUTE } from '../../../utils/consts';

import style from '../Auth.module.scss';
import InputCreateAccount from './InputCreateAccount/InputCreateAccount';

const FormCreateAccount = () => {
  const [inputState, setInputState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  return (
    <>
      {/* block input */}
      <div className={style['form__content-input']}>
        <InputCreateAccount
          inputState={inputState}
          setInputState={setInputState}
        />
      </div>

      {/* block checkbox */}
      <div className={style.checkbox}>
        <label className={style.checkbox__label} htmlFor="checkbox">
          <input
            className={style.checkbox__input}
            id="checkbox"
            type="checkbox"
          />
          <span className={style.checkbox__span} />
        </label>
        <span>
          Let&apos;s get personal! We&apos;ll send you only the good stuff:
          <br />
          Exclusive early access to Sale, new arrivals and promotions. No
          nasties.
        </span>
      </div>

      {/* block agree */}
      <div className={style['form__content-agree']}>
        <span>By signing up you agree to&nbsp;</span>
        <div>Terms of Service</div>
        <span>&nbsp;and&nbsp;</span>
        <div>Privacy Policy</div>
      </div>

      {/* block button */}
      <ButtonAuth text="SIGN UP" />

      {/* block footer */}
      <div className={style['form__content-footer']}>
        <Link to={LOGIN_ROUTE}>I HAVE AN ACCOUNT</Link>
      </div>
    </>
  );
};

export default FormCreateAccount;
