import Head from 'next/head'
import React from 'react'

export default function layout(props: any) {
  return (
    <>
      <Head >

      </Head>
      {props.children}
    </>
  )
}
