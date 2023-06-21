import React from 'react';
import { TranslationContextType } from '../types/TranslationContextType';

const TranslationContext = React.createContext<TranslationContextType | null>(null);

export default TranslationContext;

