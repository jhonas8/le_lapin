import React, { useState, useEffect } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  useEffect(() => {
    const navbar = document.getElementsByClassName('navbar');

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
    <Navbar color={sticky ? 'light' : 'transparent'} light container="md" expand="md" sticky={sticky ? 'top' : ''}>
      <NavbarBrand
        href="#"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <Logo />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          <Nav className="m-auto" navbar>
            <NavItem
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#feature">Serviços</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#service">Produtos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about">Sobre</NavLink>
            </NavItem>
          </Nav>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
