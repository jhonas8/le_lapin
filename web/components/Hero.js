import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Hero = () => {
  return (
    <section className="section position-relative" id="home" data-aos="zoom-in">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase font-weight-medium f-14 mb-4">Le Lapin</p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">
                Onde cada mordida é um prazer <span className="font-weight-medium">delicioso!</span>
              </h1>
              <p className="text-muted mb-4 pb-2">
                Aqui nos especializamos em doces tentadores e sobremesas incríveis, feitos com ingredientes frescos e de
                alta qualidade. Venha visitar-nos para experimentar nossa culinária sofisticada e um ambiente acolhedor.
              </p>
              <a href="https://linktr.ee/LeLapin" className="btn btn-warning">
                Conheça agora mesmo <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img
                src="/images/bolo.png"
                alt=""
                className="img-fluid mx-auto d-block"
                style={{ borderRadius: '50%' }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
