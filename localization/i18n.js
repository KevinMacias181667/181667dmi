import * as Localizations from 'expo-localization';

import i18n from 'i18n-js';




import * as enL from "./translation/en.json";

import * as esL from "./translation/es.json";



i18n.translations = {

    en: enL,

    es: esL,

};



i18n.locale = Localizations.locale;

i18n.fallbacks = true;



export default i18n;