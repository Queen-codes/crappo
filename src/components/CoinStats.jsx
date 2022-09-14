//import React from 'react'
import statistics from "../assets/Statistic.png"
import { Button } from './Navbar'
import { Section, Article } from './Invest'
import styled from "styled-components"

const StatsSection = styled(Section) `
    @media (min-width: 1024px) {
        margin-left: 0;
    }
`
  

function CoinStats() {
  return (
    <StatsSection data-aos='fade-right'>
         <div>
            <img src={statistics} alt="Coin stats" />
        </div>

        <Article>
            <h3>Detailed Statistics</h3>
            <p>View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.</p>
            <Button>Learn more</Button>
        </Article>

    </StatsSection>
  )
}

export default CoinStats