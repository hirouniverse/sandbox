import React, { FC } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'

const Greet: FC<WithTranslation> = ({ t }) => {
  return (
    <>
      <p>{t('message')}</p>
    </>
  )
}

export default withTranslation()(Greet)

