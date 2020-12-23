import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export default i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "button": "click!",
          "message": "hello world!"
        }
      },
      ja: {
        translation: {
          "button": "クリック",
          "message": "ようこそ"
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })
