import React from "react";
import { Container, Row, Form } from "react-bootstrap";
import { BsTwitter, BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
// import Articles from "./article";
import News from "./news";
import logo from "../assets/logo.jpg";

const Home = () => {
  return (
    <div>
      <h1 className="text-center fs-3 fw-bold my-5">
        Check your news is it Hoax or Trully news
      </h1>
      <Container className="py-4">
        <Row className="gx-5 mb-5">
          <div className="col-md-6  ">
            <Form.Group
              className="mb-3 text-center"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Put your news here</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </div>

          <div className="col-md-6 ">
            <Form.Group
              className="mb-3 text-center"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Result your News</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </div>
          <div className="text-center mt-5 mb-2">
            <button className="button-89 fw-bold">Hoax / True</button>
          </div>
        </Row>
      </Container>

      {/* About */}
      <div className="about">
        <Container>
          <Row>
            <div className="col-md-6 my-5 d-flex align-items-center">
              <p className="text-white desc">Fake news on websites is a grave issue. These misleading stories deceive readers & spread discord. They come in forms like clickbait, sensational headlines, & fabricated sources. Fake news undermines trust, distorts public discourse, & harms democracy. We must be vigilant, verify information, & think critically
              </p>
            </div>
            <div className="col-md-6 my-5">
              <img src={logo} alt="" style={{width: '100%'}}
              className="rounded"
              />
            </div>
          </Row>
        </Container>
      </div>

      {/* Articles */}
      <div className="articles">
        <Container>
          <Row>
            {/* <Articles /> */}
          </Row>
        </Container>
      </div>

      <News />

      {/* Footer */}
      <div className="footer">
        <Container>
          <Row>
            <footer className="text-center text-white">
              <div className="container pt-2">
                <section className="mb-1">
                  <a
                    className="btn btn-link btn-floating btn-lg text-white m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                  >
                    <i>
                      <BsTwitter />
                    </i>
                  </a>

                  <a
                    className="btn btn-link btn-floating btn-lg text-white m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                  >
                    <i>
                      <BsInstagram />
                    </i>
                  </a>

                  <a
                    className="btn btn-link btn-floating btn-lg text-white m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                  >
                    <i>
                      <BsLinkedin />
                    </i>
                  </a>

                  <a
                    className="btn btn-link btn-floating btn-lg text-white m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                  >
                    <i>
                      <BsGithub />
                    </i>
                  </a>
                </section>
              </div>
            </footer>
          </Row>
        </Container>
      </div>

    </div>
  );
};

export default Home;
