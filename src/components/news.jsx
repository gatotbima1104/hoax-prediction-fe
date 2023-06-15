import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";

const News = () => {
  const [news, setNews] = useState([]);
  const fetchData = async () => {
    try {
      // const APIkey = "8a67098680f24938b76dca2e4e46eccd";
      // const url =
      //   "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + APIkey;
      const url = "https://newsapi.org/v2/everything?q=goverment&apiKey=8a67098680f24938b76dca2e4e46eccd"
      const response = await axios.get(url);
      setNews(response.data.articles);
      console.log(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Container className="my-5">
        <h1 className="mb-5 text-center">Similar Articles</h1>
        <Row>
          {news.map((item) => (
            <div className="col-md-3 d-flex mb-3 col-sm-6">
              <div className="card mb-3 p-2 mx-auto" style={{ maxWidth: "300px" }}>
                <p className="title-article">{item.title}</p>
                <img
                  src={item.urlToImage}
                  className="img-fluid"
                  style={{ height: "150px" }}
                />
                <p className="title-article mt-3"> Source: {item.source.name}</p>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <p className="title-article mt-2">{item.url}</p>
                </a>
              </div>
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default News;
