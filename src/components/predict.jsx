import React, { useState, useEffect } from "react";
import { axiosInstance } from "../lib/axios";
import { Form, Spinner } from "react-bootstrap";

const Predict = () => {
  const [result, setResult] = useState(null);
  const [input, setInput] = useState({
    news: "",
  });
  const [loading, setLoading] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setIsButtonClicked(true);
      setTimeout(async () => {
        const response = await axiosInstance.post("/predict", {
          news: input.news,
        });

        // console.log(response.data);
        setResult(response.data);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <div className="col-md-12">
          <Form.Group
            className="mb-3 text-center"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Put your news here</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              type="text"
              name="news"
              value={input.news}
              onChange={(e) => setInput({ news: e.target.value })}
              onKeyDown={handleKeyPress}
            />
          </Form.Group>
        </div>

        <div className="col-md-12">
          {loading && (
            <div className="text-center">
              <Spinner 
              animation="border"
              />
            </div>
          )
          
          }

          {isButtonClicked && !loading && (
            <div className="text-center">
              <p>Prediction: 
                {result.prediction}
                </p>
            </div>
          )}
        </div>

        <div className="text-center mt-5 mb-2">
          <button className="button-89 fw-bold" type="submit">
            Hoax / True
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Predict;
