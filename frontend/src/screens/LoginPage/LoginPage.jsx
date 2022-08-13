import React, { useState } from "react";
import MainScreen from "../MainScreen/MainScreen";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
import axios from "axios";
import "./LoginPage.css";
import Loading from "../../components/Loading/Loading";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoading(true);
      const { data } = await axios.post(
        `http://localhost:5000/api/users/login`,
        {
          email,
          pass,
        },
        config
      );
      setLoading(false);
      console.log(data);
      localStorage.setItem('userInfo', JSON.stringify(data))
      setEmail("");
      setPass("");
    } catch (error) {
        setErrors(error.response.data.message);
    }
  };

  return (
    <>
      <MainScreen title="Login">
        <div className="loginContainer">
            {loading && <Loading />}
          <Form onSubmit={submitHandler} autoComplete="off" className="form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <Row className="py-3">
            <Col>
              New Customer ?{" "}
              <Link
                to="/register"
                className="ps-2"
                style={{ color: "#492C1D", textDecoration: "underline" }}
              >
                Register Here
              </Link>
            </Col>
          </Row>
        </div>
      </MainScreen>
    </>
  );
};

export default LoginPage;
