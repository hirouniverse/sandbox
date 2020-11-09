import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const AboutPage: NextPage = () => (
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
      <h1>About Page</h1>
      <Link href="/"><a>Go Back</a></Link>
    </div>
  </>
)

export default AboutPage
