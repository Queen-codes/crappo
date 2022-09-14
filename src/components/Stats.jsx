import React from 'react'
import styled from 'styled-components'
import ExchangeIcon from "../assets/icon1.png"
import WalletIcon from "../assets/icon2.png"
import CountriesIcon from "../assets/icon3.png"

const StatsDetails = styled.div`
    display: flex;
    flex-direction: column;
`

const StatsContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.8rem;
    padding-right:1.5rem;
    padding-left: 1.5rem;
`

const Stat = styled.div`
    margin-top: 7.5rem;

    @media (min-width: 610px){
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

    
`

const StatsNumber = styled.span`
    font-weight: 700;
    font-size: 1.35rem;

    @media (min-width: 1024px) {
        font-size: 2rem;
    }
`

const StatsText = styled.span`
    color: #e0e0e0;
    letter-spacing: 0.023em;
    font-size: 0.8em;

    @media (min-width: 1024px) {
        font-size: 1rem;
    }
`
function Stats() {
  return (
    <Stat className="stats">

        <StatsContainer className="stats--container">
            <img src={ExchangeIcon} alt="chart" />
            <StatsDetails className="stats--details">
                <StatsNumber className="stats--number">$30B</StatsNumber>
                <StatsText className="stats--text">Digital Currency Exchanged</StatsText>
            </StatsDetails>
        </StatsContainer>
        
        <StatsContainer className="stats--container">
            <img src={WalletIcon} alt="avatar" />
            <StatsDetails className="stats--details">
                <StatsNumber className="stats--number">10M+</StatsNumber>
                <StatsText className="stats--text">Trusted Investors Wallet</StatsText>
            </StatsDetails>
        </StatsContainer>
        
        <StatsContainer className="stats--container">
            <img src={CountriesIcon} alt="globe" />
            <StatsDetails className="stats--details">
                <StatsNumber className="stats--number">195</StatsNumber>
                <StatsText className="stats--text">Countries supported</StatsText>
            </StatsDetails>
        </StatsContainer>
        

    </Stat>
  )
}

export default Stats