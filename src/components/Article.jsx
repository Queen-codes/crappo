import React from 'react'
import styled from 'styled-components'
import Ethereum from "../assets/ethereum-illustrations.png"
import { Button } from './Navbar'

const ArticleWrapper = styled.article`
    padding-right: 1.5rem;
    padding-left: 1.5rem;

    @media (min-width: 610px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 2rem;
        margin-top: 3rem;
    }
`

export const ArticleTitle = styled.h2`
    font-weight: 700;
    font-size: 1.45rem;
    line-height: 1.7;
    margin-top: 1.2rem;

    @media (min-width: 1024px) {
        font-size: 1.8rem;
        max-width: 400px;
    }
`

export const ArticleText = styled.p`
    font-weight: 400;
    font-size: .8rem;
    color: #E0E0E0;
    margin-top: 1rem;
    line-height: 1.8;
    margin-bottom: 1rem;

    @media (min-width: 1024px) {
        font-size: 1rem;
        max-width: 400px;
    }
`

function Article() {
  return (
    <ArticleWrapper data-aos="zoom-in">
        <div>
            <img src={Ethereum} alt="eth-illustration" />
        </div>

        <section>
            <ArticleTitle>Why you should choose CRAPPO</ArticleTitle>
            <ArticleText>Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.</ArticleText>
            <Button>Learn more</Button>
        </section>
    </ArticleWrapper>
  )
}

export default Article