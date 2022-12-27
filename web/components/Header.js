import React, { useState, useEffect } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const toggle = () => setIsOpen(!isOpen);

  const detectIsMobile = (w) => {
    setIsMobile(w.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', () => detectIsMobile(window));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', () => detectIsMobile(window));
    };
  });

  useEffect(() => {
    const navbar = document.getElementsByClassName('navbar');
    setIsMobile(window.innerWidth <= 768);
    setNavbarHeight(navbar[0].offsetHeight);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > navbarHeight) {
      setSticky(true);
    } else if (window.scrollY < navbarHeight) {
      setSticky(false);
    }
  };

  const Logo = () => <Image src="/images/le_lapin_nobg.png" width="80" height="80" />;

  return (
    <Navbar
      color={sticky ? 'light' : 'transparent'}
      light
      container="md"
      expand="md"
      sticky={isMobile || sticky ? 'top' : ''}
    >
      <NavbarBrand
        href="#"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <Logo />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} className="me-2" />
      <Collapse className={`zindex-offcanvas ${isMobile ? 'bg-white' : ''}`} isOpen={isOpen} navbar>
        <Nav navbar>
          <Nav navbar>
            <NavItem
              onClick={() => {
                window.scrollTo(0, 0);
                setIsOpen(false);
              }}
            >
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem onClick={() => setIsOpen(false)}>
              <NavLink href="#feature">Serviços</NavLink>
            </NavItem>
            <NavItem onClick={() => setIsOpen(false)}>
              <NavLink href="#service">Produtos</NavLink>
            </NavItem>
            <NavItem onClick={() => setIsOpen(false)}>
              <NavLink href="#about">Sobre</NavLink>
            </NavItem>
          </Nav>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
