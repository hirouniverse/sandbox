import React from 'react'
import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Navbar, Nav } from 'react-bootstrap'
import axios from 'axios'

type Post = {
  id: number,
  title: string
}

const RootPage: NextPage = () => {

  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    (async () => {
      const { data } = await axios.get<Post[]>(`${process.env.API_URL}/posts`)
      setPosts(data)
    })()
  })

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/about">
              <Nav.Link href="#features">Features</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <ul>
        {
          posts.map(p => {
            return (
              <li key={p.id}>
                <Link href={`/posts/${p.id}`}>{ p.title }</Link>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default RootPage
