import React, { useEffect, useState } from "react";
import { url } from "../data/data.js";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";


export default function MyPost() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(url + "posts?_embed")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((post) =>
        post.title.rendered.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  }, [searchTerm, posts]);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div
      style={{ minHeight: "60vh" }}>
      <Form.Group className="container mb-4" onSubmit={handleSearch}>
        <Form.Text className="text-light">Search articles:</Form.Text>
        <Form.Control type="text"
              placeholder="Search..."
              className="cercaPost mr-sm-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              />
      </Form.Group>
        <div className="d-flex flex-wrap justify-content-center justify-items-start">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Card
              key={post.id}
              className="post col-lg-3 col-md-5 col-sm-12 mx-lg-1 mx-md-2 mx-sm-1 my-1"
              style={{ minHeight: "22rem", width: "25rem" }}
              onClick={() => navigate(`/posts/${post.id}`)}
            >
              <Card.Img
              variant="top"
              style={{ height: "12rem", objectFit: "cover" }}
              src={post._embedded['wp:featuredmedia']['0'].source_url}
              />
              <Card.Body>
                <div style={{ height: "15rem" }}>
                    <Card.Title>{post.title.rendered}</Card.Title>
                    <Card.Text>
                    <span
                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                    </Card.Text>
                    <Card.Text className="text-muted">
                        {post.yoast_head_json.author} | {post.date.slice(0, -9)} 
                    </Card.Text>
                </div>
                <Button
                onClick={() => navigate(`/posts/${post.id}`)}
                variant="primary position-absolute bottom-0 my-2">
                  Leggi di più
                </Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p className="text-light">No matching posts found.</p>
        )}
        </div>
      </div>
    </>
  );
}
