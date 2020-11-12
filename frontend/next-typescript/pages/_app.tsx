import React, { FC } from 'react'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../redux/store'
import 'bootstrap/dist/css/bootstrap.min.css'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
