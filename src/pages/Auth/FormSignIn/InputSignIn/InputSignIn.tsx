import React, { FC } from 'react';
import { IInputSignIn } from '../../../../components/common/Interfaces/AuthPage/Interfaces';
import Input from '../../../../components/common/UI/Inputs/Input';

const InputSignIn: FC<IInputSignIn> = ({
  inputState,
  setInputState,
}: IInputSignIn) => {
  return (
    <>
      <Input
        inputState={inputState}
        formKey="email"
        setInputState={setInputState}
        placeholder="Email"
        type="text"
      />
      <Input
        inputState={inputState}
        formKey="password"
        setInputState={setInputState}
        placeholder="Password"
        type="password"
      />
    </>
  );
};

export default InputSignIn;
