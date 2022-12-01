import React from 'react'
import { getClient } from '../../database/db'

export default function MongoTest() {
  // use fetch to send a POST request to the API route
  // '/db/insert-user' with the user data
  const userData = {
    name: 'John Doe',
    email: 'john@me.com',
    password: 'password'
  }

  const handleClick = async () => {
    const response = await fetch('/api/db/user', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(response)
    const data = await response.json()
    console.log(data)
  }



  return (
    <button onClick={handleClick}>MongoTest</button>
  )
}
