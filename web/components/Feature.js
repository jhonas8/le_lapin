import Link from 'next/link';
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const FeatureBox = (props) => {
  return (
    <>
      {props.features.map((feature, key) =>
        feature.id % 2 !== 0 ? (
          <Row
            key={key}
            className={feature.id === 1 ? 'align-items-center' : 'align-items-center mt-5'}
            data-aos="fade-right"
          >
            <Col md={5}>
              <div>
                <img
                  src={feature.img}
                  alt=""
                  className="img-fluid d-block mx-auto"
                  style={{ height: '350px', width: '350px', borderRadius: '50%' }}
                />
              </div>
            </Col>
            <Col md={{ size: 6, offset: 1 }}>
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className={feature.icon}></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
                <Link href={feature.link}>
                  <a className="f-16 text-warning">
                    Saiba Mais <span className="right-icon ml-2">&#8594;</span>
                  </a>
                </Link>
              </div>
            </Col>
          </Row>
        ) : (
          <Row key={key} className="align-items-center mt-5" data-aos="fade-left">
            <Col md={6}>
              <div className="mb-4">
                <div className="my-4">
                  <i className="mdi mdi-account-group"></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
                <Link href={feature.link}>
                  <a className="f-16 text-warning">
                    Saiba Mais <span className="right-icon ml-2">&#8594;</span>
                  </a>
                </Link>
              </div>
            </Col>
            <Col md={{ size: 5, offset: 1 }} className="mt-5 mt-sm-0">
              <div>
                <img
                  src={feature.img}
                  alt=""
                  className="img-fluid d-block mx-auto"
                  style={{ height: '350px', width: '350px', borderRadius: '50%' }}
                />
              </div>
            </Col>
          </Row>
        ),
      )}
    </>
  );
};

const Feature = () => {
  const features = [
    {
      id: 1,
      img: './images/box_candy.jpg',
      title: 'Fidelidade',
      desc: 'Ganhe pontos por cada valor gasto na loja e os troque por descontos ou produtos.',
      link: '/fidelidade',
    },
    {
      id: 2,
      img: './images/delivery.jpg',
      title: 'Agendamento',
      desc: 'Agende conosco algum produto ou reserve uma mesa.',
      link: '/agendamento',
    },
    // {
    //   id: 3,
    //   img: './images/45.png',
    //   title: 'LOREM IPSUM',
    //   desc: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    //   link: '/',
    // },
  ];

  return (
    <section className="section" id="feature">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                <span className="text-warning">Serviços</span>
              </h3>
              <p className="text-muted">
                Nossos clientes são especiais, e por isso, oferecemos alguns serviços personalizados para melhorar a
                experiência de quem é nosso principal foco, você.
              </p>
            </div>
          </Col>
        </Row>
        <FeatureBox features={features} />
      </Container>
    </section>
  );
};

export default Feature;
