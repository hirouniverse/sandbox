import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { NextPage } from 'next'

type Post = {
  id: number,
  title: string
}

const PostPage: NextPage = () => {
  const [post, setPost] = useState<Post>(null)
  const router = useRouter()

  useEffect(() => {
    let isMounted = true;
    (async () => {
      const { data } = await axios.get<Post>(
        `${process.env.API_URL}/posts/${router.query.slug}`
      )
      if (isMounted) setPost(data)
    })()
    return () => { isMounted = false }
  }, [])

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"
        />
      </Head>
      <div>
        <h1>Post Page</h1>
        <p>{JSON.stringify(post)}</p>

        <Link href="/">Go back</Link>
      </div>
    </>
  )
}

export default PostPage
