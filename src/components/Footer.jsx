//import React from 'react'
import Logo from '../assets/Logo.png'
import  Visa from '../assets/Visa.png'
import MasterCard from '../assets/Mastercard.png'
import btc from '../assets/btc.png'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
    padding-top: 6rem;
    padding-left: 2rem;
     @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr)
     }

    & a {
        color: #f2f2f2;
        font-size: .8rem;


        &:hover {
            color:  #3671E9;
        }
    }

    & li {
        padding-bottom: .8rem;
    }

    & h4 {
        padding-top: 1rem;
        padding-bottom: 1.2rem;
    }
`

const List = styled.ul`
    display: flex;
    gap: 2rem;
    margin-bottom: 1rem;

    & i {
        font-size: 1.3rem;
        margin-top: 1rem;

        &:hover {
            color:  #3671E9;
        }
    }
`
const SocialLinks = styled.section`
    @media(min-width: 1024px) {
        grid-column: -2
    }
`
function Footer() {
  return (
    <FooterWrapper>
        <section className="logo">
            <img src={Logo} alt="Crappo's Logo" />
        </section>

        <section className="quick-link">
            <h4>Quick Link</h4>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </section>

        <section className="resources">
            <h4>Resources</h4>
            <ul>
                <li><a href="#">Download Whitepaper</a></li>
                <li><a href="#">Smart Token</a></li>
                <li><a href="#">Blockchain explorer</a></li>
                <li><a href="#">Crypto API</a></li>
                <li><a href="#">Interest</a></li>
            </ul>
        </section>

        <section className="payment">
            <h4>We accept following payment systems</h4>
            <List>
                <li>
                    <img src={Visa} alt="Visa card" />
                </li>
                <li>
                    <img src={MasterCard} alt="Mastercard" />
                </li>
                <li>
                    <img src={btc} alt="Bitcoin" />
                </li>
            </List>
        </section>

        <section className="copyright">
            <p style={{fontSize: '0.8rem'}}>©2022 CRAPPO. All rights reserved</p>
        </section>

        <SocialLinks>
            <List>
                <li>
                    <a href=""><i className='bx bxl-facebook'></i></a>
                </li>
                <li>
                    <a href=""><i className='bx bxl-instagram'></i></a>
                </li>
                <li>
                    <a href=""><i className='bx bxl-youtube'></i></a>
                </li>
                <li>
                    <a href=""><i className='bx bxl-twitter'></i></a>
                </li>
                <li>
                    <a href=""><i className='bx bxl-linkedin'></i></a>
                </li>
            </List>
        </SocialLinks>
    </FooterWrapper>
  )
}

export default Footer