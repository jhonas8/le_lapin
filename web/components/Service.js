import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

const Service = () => {
  const services = [
    {
      title: 'Bolo de chocolate molhadinho com calda de cereja',
      icon: 'images/bolo.png',
    },
    {
      title: 'Concha de Colher: Torta Búlgara',
      icon: 'images/ovo.webp',
    },
    {
      title: 'Panetone de Pistache, Limão e Framboesa',
      icon: 'images/panetone.jpg',
    },
    {
      title: 'Banana Real',
      icon: 'images/pastel.webp',
    },
    {
      title: 'Lascas Crocantes de Avelã',
      icon: 'images/sla.webp',
    },
    {
      title: 'Sonho de porco',
      icon: 'images/bolosalgado.webp',
    },
  ];

  useEffect(() => {
    const servicesEl = document.querySelectorAll('#service-col');

    const DELAY_TIME_MS = 100;

    servicesEl.forEach((el, index) => {
      el.setAttribute('data-aos-delay', (index * DELAY_TIME_MS).toString());
    });
  }, []);

  return (
    <section className="section" id="service" data-aos="zoom-in">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                <span className="text-warning">Produtos</span>
              </h3>
              <p className="text-muted">Alguns de nossos produtos já disponíveis ao público.</p>
            </div>
          </Col>
        </Row>
        <Row>
          {services.map((service, key) => (
            <Col key={key} lg={4} md={6} id="service-col" data-aos="zoom-in">
              <div className=" w-35 m-4 position-relative">
                <div className="card bg-transparent border-none border-0">
                  <div className="overflow-hidden rounded-circle mb-2">
                    <img
                      className="card-img-top object-fit-cover"
                      height={300}
                      width={300}
                      alt="image"
                      src={service.icon}
                    ></img>
                  </div>
                  <p className="text-center font-weight-normal text-capitalize">{service.title}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Service;
