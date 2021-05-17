export interface IInputSignIn {
  inputState: any;
  setInputState: (value: any) => any;
}

export interface IInputCreateAccount {
  inputState: any;
  setInputState: (value: any) => any;
}

export interface IInput {
  placeholder: string;
  type: string;
  inputState: any;
  formKey: string;
  setInputState: (value: any) => any;
}

export interface IButtonAuth {
  text: string;
  // onSubmit: () => void;
}
