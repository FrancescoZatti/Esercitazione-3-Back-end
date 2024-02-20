import React from 'react'
import MyNavbar from '../components/MyNavbar'
import MyPosts from '../components/MyPosts.jsx'
import Container from 'react-bootstrap/esm/Container.js'

export default function HomePage() {
  return (
    <>
        <MyNavbar />
        <Container fluid className="mt-5">
          <MyPosts />
        </Container>
    </>
  )
}