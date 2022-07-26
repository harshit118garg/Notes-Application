import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'

const Footer = () => {
  return (
    <>
    <footer className='bg-dark bg-opacity-25 text-center'>
        <Container>
          <Row>
              <Col className='text-white py-3'><p>Made with 💙💙 by Harshit Garg || <span className='fw-bold'>AnyWhere Notes</span></p></Col>
          </Row>
        </Container>
    </footer>
    </>
  )
}


export default Footer