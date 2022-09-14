import styled from "styled-components"
import HeroImage from "../assets/Hero.png"
import { Button } from "./Navbar"
//import Arrow from "../assets/Arrow Right.png"

const HeroSection = styled.main`
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    margin-top: 1rem;

    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
`
const HeroDiscount = styled.div`
    background-color: rgba(255, 255, 255, 0.1);
    padding: 0.5rem;
    border-radius: 1.5rem;
    margin-bottom: 1rem;
    width: max-content;
`
const PercentDiscount = styled.span`
    background-color: #fff;
    color: #0d0d20;
    text-transform: uppercase;
    letter-spacing: 0.01em;
    border-radius: 1.5rem;
    padding: 0.5rem 1rem;
    margin-left: -0.4rem;
    font-weight: 500;
    font-size: 0.8rem;
    letter-spacing: 0.012em;
    margin-right: 0.5rem;
`
const PurposeDiscount = styled.span`
    font-size: 0.7rem;
`

const Title = styled.h1`
    font-weight: 700;
    font-size: 2em;
    color: #fff;

    @media (min-width: 1024px) {
        font-size: 3rem;
        max-width: 500px;
    }
`

const Description = styled.p`
    color: #e0e0e0;
    font-size: 0.8rem;
    letter-spacing: 0.02em;
    line-height: 2;

    @media(min-width: 1024px) {
        font-size: 1rem;
        max-width: 500px;
    }
`
function Hero() {
  return (
    <HeroSection className="hero-section" data-aos="fade-up">
        <section className="hero-text">
            <HeroDiscount className="hero--discount">
                <PercentDiscount className="percent-discount">75% save</PercentDiscount>
                <PurposeDiscount className="purpose-discount">For the Black Friday Weekend</PurposeDiscount>
            </HeroDiscount>

            <Title>Fastest & secure platform to invest in crypto</Title>
            <Description className="hero--description">Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.</Description>
            <Button> 
                Try for free
            </Button>
        </section>

        <section className="hero-image">
            <img src={HeroImage} alt="hero's image" />
        </section>
    </HeroSection>
  )
}

export default Hero