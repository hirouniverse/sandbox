import React, { FC } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next';

const ChangeLangButton: FC<WithTranslation> = ({ t, i18n }) => {
  const changeLang = () => {
    i18n.changeLanguage(i18n.language !== 'en' ? 'en' : 'ja')
  }
  return (
  <button onClick={() => changeLang() }>{t('button')}</button>
  )
}

export default withTranslation()(ChangeLangButton)
