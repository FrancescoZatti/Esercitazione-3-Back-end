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
    <>
      {post.title && (
        <Card
        className="container-fluid cardPost mt-3 mb-4"
        >
          <Card.Body>
            {/* <Card.Img id="postCover" variant="top" src={post._embedded["wp:featuredmedia"][0].source_url} />
            <Card.Title className="my-2 fs-1">{post.title.rendered}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} /> */}
            <Card.Text dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </Card.Body>
        </Card>
      )}
    </>
  );
}
