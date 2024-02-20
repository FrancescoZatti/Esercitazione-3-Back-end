import React from 'react'
import MyNavbar from '../components/MyNavbar'
import MyDetailPost from '../components/MyDetailPost'
import Container from 'react-bootstrap/esm/Container.js'


export default function MyDetail() {
  return (
    <>
    <MyNavbar />
    <Container>
        <MyDetailPost />
    </Container>
    </>
  )
}
