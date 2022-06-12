import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='error-page section'>
    <div className="error-container">
      <h1>oops! it's a dead end</h1>
      <button className='btn btn-primary'>
        <Link to="/">Back Home</Link>
      </button>
    </div>
      <h2>error page</h2>
    </section >
  )
}

export default Error
