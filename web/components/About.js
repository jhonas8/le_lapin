import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const About = () => {
  return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                Sobre <span className="text-warning">Nós</span>
              </h3>
              <p className="text-muted">Um pouco da nossa missão e de quem somos</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="font-weight-light line-height-1_6 text-dark mb-4">
              Nossa confeitaria: um lugar para todos os seus desejos doces.
            </h2>
          </Col>
          <Col md={{ size: 7, offset: 1 }}>
            <Row>
              <Col md={12}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Nossa missão</h6>
                <p className="text-muted font-weight-light">
                  A nossa confeitaria é o lugar perfeito para os amantes de doces e sobremesas incríveis. Nossa equipe
                  de confeiteiros talentosos trabalha duro para criar uma variedade de doces tentadores, desde bolos e
                  panetones até cookies e coxinhas. Se você está procurando por uma sobremesa deliciosa ou uma lembrança
                  doce, temos algo para agradar a todos.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
