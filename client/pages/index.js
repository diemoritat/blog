import React from 'react'
import Link from 'next/link'
import Hello from '../components/Hello'
import Introduction from '../components/Introduction'

const Index = () => (
  <div className='container bg-primary page'>
    <Hello/>
    <Introduction/>
    <div className="wrapper">
      <Link href='/about'>
        <a className='btn btn-light'>About me</a>
      </Link>
    </div>

  </div>
)

export default Index
