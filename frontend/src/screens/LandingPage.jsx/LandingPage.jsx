import React from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
        <Container>
          <Row>
            <div className="intro-text">
              <div>
                <h2 className="title display-3">Welcome To AnyWhere Notes</h2>
                <p className="fs-4 pt-3 fw-semibold text-uppercase">
                  Get Your Important ToDo's anytime
                </p>
              </div>
              <div className="btnContainer py-3">
                <a href="/login">
                  <Button size="lg" className="landingButton" variant="warning">
                    Login
                  </Button>
                </a>
                <a href="/register">
                  <Button
                    size="lg"
                    className="landingButton"
                    variant="outline-warning"
                  >
                    Sign Up
                  </Button>
                </a>
              </div>
            </div>
          </Row>
        </Container>
    </>
  );
};

export default LandingPage;
