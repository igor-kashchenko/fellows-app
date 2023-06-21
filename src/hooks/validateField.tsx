import { useContext } from 'react';
import TranslationContext from '../translationContext/TranslationContext';
import { FormErrors } from '../types/FormError';
import { TranslationContextType } from '../types/TranslationContextType';

export const useValidation = () => {
  const { getTranslation } = useContext(TranslationContext) as TranslationContextType;

  const validateField = (fieldName: keyof FormErrors, value: string) => {

    let errorMessage: string | null = null;

    if (!value) {
      errorMessage = null;
    } else {
      switch(fieldName) {
      case 'fullname':
        if (!/^[A-Za-zА-Яа-яІіЇїЄєҐґ ]+$/.test(value)) {
          errorMessage = getTranslation('fullNameError');
        }
        break;
      case 'phone':
        if (!/^\+?[0-9]+$/.test(value)) {
          errorMessage = getTranslation('phoneError');
        }
        break;
      case 'email':
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)) {
          errorMessage = getTranslation('emailError');
        }
        break;
      case 'message':
        if (!value) {
          errorMessage = getTranslation('messageError');
        }
        break;
      }
    }

    return errorMessage;
  };

  return { validateField };
};
