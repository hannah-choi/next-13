import React from 'react'

type Props = {
  params: {
    slug: string;
  }
}


export default function Trousers({params}: Props) {
  return (
    <h1>{params.slug}</h1>
  )
}

