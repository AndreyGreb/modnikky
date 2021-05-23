import React, { FC } from 'react';
import { IInputSignIn } from '../../../../components/common/Interfaces/AuthPage/Interfaces';
import Input from '../../../../components/common/UI/Inputs/Input';

const InputSignIn: FC<IInputSignIn> = ({
  inputAuthState,
  setInputAuthState,
}: IInputSignIn) => {


  return (
    <>
      <Input
        inputState={inputAuthState}
        formKey="email"
        setInputState={setInputAuthState}
        placeholder="Email"
        type="text"
      />
      <Input
        inputState={inputAuthState}
        formKey="password"
        setInputState={setInputAuthState}
        placeholder="Password"
        type="password"
      />
    </>
  );
};

export default InputSignIn;
