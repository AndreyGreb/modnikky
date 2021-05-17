import React, { FC } from 'react';
import { IInputCreateAccount } from '../../../../components/common/Interfaces/AuthPage/Interfaces';
import Input from '../../../../components/common/UI/Inputs/Input';

const InputCreateAccount: FC<IInputCreateAccount> = ({
  inputState,
  setInputState,
}: IInputCreateAccount) => {
  return (
    <>
      <Input
        inputState={inputState}
        formKey="firstName"
        setInputState={setInputState}
        placeholder="First Name"
        type="text"
      />
      <Input
        inputState={inputState}
        formKey="lastName"
        setInputState={setInputState}
        placeholder="Last Name"
        type="text"
      />
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

export default InputCreateAccount;
