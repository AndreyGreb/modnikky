import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IFormSignIn } from '../../../components/common/Interfaces/AuthPage/Interfaces';
import ButtonAuth from '../../../components/common/UI/Buttons/ButtonAuth/ButtonAuth';
import { REGISTRATION_ROUTE } from '../../../utils/consts';
import style from '../Auth.module.scss';
import InputSignIn from './InputSignIn/InputSignIn';

const FormSignIn: FC<IFormSignIn> = ({
  inputAuthState,
  setInputAuthState,
  submitData,
}: IFormSignIn) => {
  return (
    <>
      {/* block input */}
      <div className={style['form__content-input']}>
        <InputSignIn
          inputAuthState={inputAuthState}
          setInputAuthState={setInputAuthState}
        />
      </div>

      {/* block error message */}
      {/* {formError && (
        <div className={style['form__content-error']}>
          <span>Wrong email or password!</span>
        </div>
      )} */}

      {/* block button */}
      <ButtonAuth submitData={submitData} text="SIGN IN" />

      {/* block footer */}
      <div className={style['form__content-footer']}>
        <Link to={REGISTRATION_ROUTE}>CREATE ACCOUNT</Link>
      </div>
    </>
  );
};

export default FormSignIn;
