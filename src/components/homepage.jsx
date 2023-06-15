import React from "react";
import { Container, Row } from "react-bootstrap";
import {
  BsTwitter,
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsLink,
} from "react-icons/bs";
import News from "./news";
import logo from "../assets/logo.jpg";
import Predict from "./predict";

const Home = () => {
  return (
    <div>
      <h1 className="text-center fs-3 fw-bold my-5">
        Check your news is it Hoax or Trully news
      </h1>
      <Container className="py-4">
        <Row className="mb-5">
          <Predict />
        </Row>
      </Container>

      {/* About */}
      <div className="about">
        <Container>
          <Row>
            <div className="col-md-6 my-5 d-flex align-items-center">
              <p className="text-white desc">
                Fake news on websites is a grave issue. These misleading stories
                deceive readers & spread discord. They come in forms like
                clickbait, sensational headlines, & fabricated sources. Fake
                news undermines trust, distorts public discourse, & harms
                democracy. We must be vigilant, verify information, & think
                critically
              </p>
            </div>
            <div className="col-md-6 my-5">
              <img
                src={logo}
                alt=""
                style={{ width: "100%" }}
                className="rounded"
              />
            </div>
          </Row>
        </Container>
      </div>

      {/* Articles */}
      <div className="articles">
        <Container>
          <Row>{/* <Articles /> */}</Row>
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
                    href="https://www.linkedin.com/in/muhamad-gatot-s-7b08491aa/"
                    role="button"
                    target="_blank"
                    data-mdb-ripple-color="dark"
                  >
                    <i>
                      <BsLinkedin />
                    </i>
                  </a>

                  <a
                    className="btn btn-link btn-floating btn-lg text-white m-1"
                    href="https://github.com/gatotbima1104/hoax-prediction-fe"
                    target="_blank"
                    role="button"
                    data-mdb-ripple-color="dark"
                  >
                    <i>
                      <BsGithub />
                    </i>
                  </a>
                </section>

                <section className="mb-1 mt-2 text-start mt-3">
                  <p>
                    Thanks to Contributor:
                    <li className="my-2">
                      <a className="contributor">
                        Hanif Al-Irsyad has contributed to development of the
                        model and API
                        <a
                          className="btn btn-link btn-floating btn-lg text-white m-1"
                          href="https://www.linkedin.com/in/hanifalirsyad/"
                          target="_blank"
                          role="button"
                          data-mdb-ripple-color="dark"
                        >
                          <i className="fs-5">
                            <BsLinkedin />
                          </i>
                        </a>
                      </a>
                    </li>
                  </p>
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
