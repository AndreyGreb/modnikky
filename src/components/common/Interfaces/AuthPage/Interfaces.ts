export interface IInputSignIn {
  inputAuthState: { email: string; password: string };
  setInputAuthState: (value: { email: string; password: string }) => void;
}

export interface IFormCreateAccount {
  inputRegistrState: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
  setInputRegistrState: (value: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) => void;
  submitData: () => void;
}

export interface IFormSignIn {
  inputAuthState: { email: string; password: string };
  setInputAuthState: (value: { email: string; password: string }) => void;
  submitData: () => void;
}

export interface IInputCreateAccount {
  inputRegistrState: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
  setInputRegistrState: (value: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) => void;
}

export interface IInput {
  placeholder: string;
  type: string;
  inputState: any;
  // | { email: string; password: string }
  // | { firstName: string; lastName: string; email: string; password: string };

  formKey: string;
  setInputState: (
    value: any
    // | { email: string; password: string }
    // | { firstName: string; lastName: string; email: string; password: string }
  ) => void;
}

export interface IButtonAuth {
  text: string;
  submitData: () => void;
}
