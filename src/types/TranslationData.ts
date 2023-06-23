import { Language } from './Language';

export type TranslationData = {
  [lang in Language]: {
    logo: string;
    about: string;
    partners: string;
    contactUs: string;
    welcomeQuote: string;
    aboutTitle: string;
    aboutSubTitle: string;
    aboutText: string;
    partnersTitle: string;
    sendButton: string;
    footerQuote: string;
    smallFooterQuote: string;
    phone: string;
    email: string;
    fullName: string;
    message: string;
    fullNameError: string;
    emailError: string;
    phoneError: string;
    messageError: string;
    toastSuccess: string;
    toastError: string;
  };
};
