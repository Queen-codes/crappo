//import React from 'react'
import { Button } from './Navbar'
import Table from "../assets/Table.png"
import { Section, Article } from './Invest'
//import {Link} from 'react-router-dom'



function Growth() {
  return (
    <Section data-aos ="fade-left">

    <div className="section-image">
        <img src={Table} alt="Coin Price Chart" />
    </div>  
   
    <Article className='article-grid'>
        <h3>Grow your profit and track your investments</h3>
        <p>Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.</p>
       <Button>Learn more</Button>
        
         
    </Article>
    </Section>
  )
}

export default Growth