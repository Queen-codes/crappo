//import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/Logo.png'
import Hamburger from '../assets/icon-hamburger.svg'
import Close from '../assets/icon-close.svg'

const Header = styled.header`
  padding: 1rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  background-color: hsla(220, 80%, 56%, 1);
  color: #fff;
  border-radius: 1.5rem;
  margin: .3rem;
  transition: all 0.4s ease-in;

  &:hover {
    background-color:  hsla(220, 80%, 56%, 0.55);

  }
`;

const TransparentButton = styled(Button) `
  background-color: transparent;
`

const NavMenu = styled.ul`
  display: flex;
  gap: 1.2rem;
  align-items: center;
   
  @media (max-width: 45em) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    flex-direction: column;
    background-color: #0d0d2b;
    transform: translateX(100vh);
    padding-top: 10rem;
    transition:  1s;
    z-index: 1000;
    
`;



function Navbar({handleToggler, menu}) {
  return (
    <Header>
      <div className="logo">
        <img src={Logo} alt="Crappo's Logo" />
      </div>

      <div className="mobile-toggler">
        <img src={ Hamburger} onClick={handleToggler} alt="" />
      </div>
      <nav>
        <NavMenu className={menu ? 'nav-menu active' : 'nav-menu'}>
          <li><a href="#">Product</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Login</a></li>

          <img src={ Close} onClick={handleToggler} alt="" className='close-menu' />

          <div className="cta">
            <TransparentButton>Login</TransparentButton>
            <Button>Register</Button>
         </div>
        </NavMenu>

       
      </nav>
    </Header>
  )
}

export default Navbar