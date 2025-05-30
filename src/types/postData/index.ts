export type PostAuthRegType = {
    email: string;
    login: string;
    password: string;
    firstName?: string;
    lastName?: string;
};
export type PostLoginType = {
    login: string;
    password: string;
};
export type forgotPassword = {
    email: string;
};
export type VerifyOTP = {
    email: string;
    otpToken: string;
};
