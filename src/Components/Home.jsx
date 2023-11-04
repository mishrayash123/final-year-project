import './Home.css'
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../Image/home-main.svg";
import Type from "./Type";


function Home() {
  


    return (
        <section className='m-5'>
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading text-white">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>
  
                <h1 className="heading-name text-white">
                  Welcome To
                  <strong className="main-name text-fuchsia-700"> Eng-Track</strong>
                </h1>
  
                <div className='font-bold text-fuchsia-700 text-3xl' style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>
  
              <Col md={5} style={{ paddingBottom: 20 }}>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    );
}

export default Home;