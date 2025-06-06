import { FieldError } from 'react-hook-form';

export type RegFields = {
    firstName: string;
    lastName: string;
    email: string;
    login: string;
    password: string;
    rePassword: string;
};
export type LoginFields = {
    login: string;
    password: string;
};
export type VerifyField = {
    email: string;
};
export type ResetPasswordType = {
    email?: string;
    login: string;
    password: string;
    passwordConfirm: string;
};
export type verifyCode = {
    otpToken: string;
};
export type passwordInputType = {
    test: string;
    errors?: FieldError;
    repeat?: boolean;
    isLogin?: boolean;
};
