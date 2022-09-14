import React from 'react'
import styled from 'styled-components'
import CoinStats from './CoinStats'
import Invest from './Invest'
import Growth from './Growth'
//import Details from './Details'
//import {Routes, Route, BrowserRouter} from 'react-router-dom'

const MarketWrapper = styled.div`
    background-color: #2B076E;
    padding-bottom: 1rem;
`

const Heading = styled.h2`
    font-weight: 700;
    font-size: 1.4rem;
    text-align: center;
    padding: 2rem .6rem .6rem .6rem;
    

    @media(min-width: 610px) {
      max-width: 500px;
      margin: auto;
    }
`
function Markets() {
  return (
    <MarketWrapper>
       <Heading data-aos='zoom-in'>Market sentiments, portfolio, and run the infrastructure of your choice</Heading>

       <Invest/>
       <CoinStats/>
       
        <Growth/>

       
    </MarketWrapper>
  )
}

export default Markets