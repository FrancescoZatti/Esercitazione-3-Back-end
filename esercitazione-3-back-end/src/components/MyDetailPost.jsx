import React, { useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { url } from "../data/data.js";

export default function MyDetailPost() {
  const [post, setPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(url + `posts/${id}?_embed`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);
  console.log(post);

  return (
    <Container fluid>
      {post.title && (
        <Card>
          <Card.Body>
            <Card.Img variant="top" src={post._embedded["wp:featuredmedia"][0].source_url} />
            <Card.Title>{post.title.rendered}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}
