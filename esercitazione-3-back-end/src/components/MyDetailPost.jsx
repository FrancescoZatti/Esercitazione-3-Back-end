import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'


export default function MyDetailPost() {
    
    const {id} = useParams()
    const [post, setPost] = useState({})

    useEffect(() => {
        fetch(url + "posts/" + id)
        .then((response) => response.json())
        .then((data) => setPost(data))
    })

  return (
    <div>MyDetailPost</div>
  )
}
