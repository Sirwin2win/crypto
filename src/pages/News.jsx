import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const News = () => {
  const [cat, setCat] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "03116c6d72msh785c9db90bbe9c9p1bc455jsnbb3af817b58d",
    },
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk",
        options
      ); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      setCat(data.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="row">
          {cat.map((v) => (
            <div className="col-sm-4 my-4">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={v.thumbnail} />
                <Card.Body>
                  <Card.Title key={v.title}>{v.title}</Card.Title>
                  <Card.Text key={v.description}>{v.description}</Card.Text>
                  <Link to={v.url}>
                    <Button variant="primary">Read More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
// 495364d13e644ca891d5a79acaa626b4
export default News;
