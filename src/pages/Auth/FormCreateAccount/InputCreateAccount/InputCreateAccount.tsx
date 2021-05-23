import React, { FC } from 'react';
import { IInputCreateAccount } from '../../../../components/common/Interfaces/AuthPage/Interfaces';
import Input from '../../../../components/common/UI/Inputs/Input';

const InputCreateAccount: FC<IInputCreateAccount> = ({
  inputRegistrState,
  setInputRegistrState,
}: IInputCreateAccount) => {
  return (
    <>
      <Input
        inputState={inputRegistrState}
        formKey="firstName"
        setInputState={setInputRegistrState}
        placeholder="First Name"
        type="text"
      />
      <Input
        inputState={inputRegistrState}
        formKey="lastName"
        setInputState={setInputRegistrState}
        placeholder="Last Name"
        type="text"
      />
      <Input
        inputState={inputRegistrState}
        formKey="email"
        setInputState={setInputRegistrState}
        placeholder="Email"
        type="text"
      />
      <Input
        inputState={inputRegistrState}
        formKey="password"
        setInputState={setInputRegistrState}
        placeholder="Password"
        type="password"
      />
    </>
  );
};

export default InputCreateAccount;
