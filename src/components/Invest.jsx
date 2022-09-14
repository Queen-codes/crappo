//import React from 'react'
import styled from "styled-components"
import invest from "../assets/Chart.png"
import { Button } from './Navbar'

export const Section = styled.section`
    width: 90%;
    margin:2.5rem auto;

    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
    }
`

export const Article = styled.article`
    margin-top: 1.6rem; 
    
    & p {
        color: #E0E0E0;
        font-size: .85rem;
        line-height: 1.7;
        margin-top: 1rem;
        margin-bottom: 1.3rem;

        @media(min-width: 768px) {
            max-width: 470px;
            font-size: 1.15rem
        }
    }
`

function Invest() {
  return (
    <Section data-aos ='fade-left'>

        <div className="section-image">
            <img src={invest} alt="Coin Price Chart" />
        </div>  
       
        <Article className="article-grid">
            <h3>Invest Smart</h3>
            <p>Get full statistic information about the behaviour of buyers and sellers will help you to make the decision. </p>
            <Button>Learn more</Button>
        </Article>


    </Section>
  )
}

export default Invest