import React, { useState } from 'react'
import styled from 'styled-components'
//import Down from "../assets/ArrowDown.png"
import { Button } from './Navbar'

const Form = styled.section`
  background-color: #fff;
  min-height: 150px;
  border-radius: 10px;
  padding: 1.2rem;
  color: #333;
  position: relative;
  transform: translateY(30%);
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);

  @media(min-width: 1024px) {
    width: 55%;
    margin: auto;
  }

  & input {
    border: none;
    outline: none;
    background: none;
    height: 40px;
    width: 100%;
    padding: 0 0.31rem;
    font-size: 1rem;

  }

  & .text-field {
    position: relative;
    border-bottom: 1px solid #E0E0E0;
    margin: 30px 0;


  }

`

const Dropdown = styled.section`
  background: none;
 
  user-select: none;
  position: relative;
  margin-bottom: 1rem;

  @media(min-width: 1024px) {
    width: 40%;
    margin-top: 1.5rem;
  }

  & .dropdown-btn {
    border-bottom: 1px solid #E0E0E0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & .dropdown-menu {
    position: absolute;
    top: 110%;
    padding: 0.75rem;
    left: 0;
    background-color: #fff;
    width: 100%;
    border-radius: 10px;
    box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
    margin-top: 0.5rem;
  }

  & .dropdown-item {
    cursor: pointer;
    transition: all 0.3s 
  }
`

const TextHeader = styled.h3`
  text-transform: uppercase;
  color: #3671E9;
  font-weight: 500;
  font-size: 0.85rem;
  letter-spacing: 0.024em;
  line-height: 1.7;
  padding-bottom: 1rem;
  padding-top: 1rem;
`

const Text = styled.p`
  color: #828282;
  font-size: 0.7rem;
  margin-top: .5rem;
  
`

const Price = styled.p`
  font-weight: 700;
  color: #0D0D2B;
  font-size: 1.2rem;

  & span {
    color: hsla(220, 80%, 56%, 1);
  }
`

const Section = styled.section`
  @media(min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
//step 1: dropdown container
//step 2: dropdown-btn container 1. onclick to set active to opposite value, render selected option, add drpdoen icon
//step 3: condiionally render dropdown menu if active, create a div, map options into the div, while retruning a div with onclick function to setselected to option, active to false, redner map result. key. 
function CalculatorCard({selected, setSelected}) {
  const[active, setActive] = useState(false)
  const options = ['Th/s', 'Kh/s', 'H/s', 'Mh/s', 'Gh/s' ]

  function handleClick () {
    setActive(prev => !prev)
  }

  return (
    <Form>
     
     <Section>
        <div className="text-field">
          <input type="text" name="hash" id="hash" placeholder='Enter your hash rate'/>
          <span></span>
        </div>
        
        <Dropdown className="dropdown">
          <div className="dropdown-btn" onClick={handleClick}>
            {selected}
            <i className='bx bx-chevron-down'></i>
          </div>

          {active && (
            <div className="dropdown-menu">
              {options.map(option => (
                <div onClick={() => {setSelected(option); setActive(false)}} className="dropdown-item" key={option}>{option}</div>
              ))}
            </div>
          )}
        </Dropdown>

        <Button>Calculate</Button>
      </Section>
    
    <section className="text">
        <TextHeader>ESTIMATED 24 HOUR REVENUE:</TextHeader>
        <Price>0.055 130 59 ETH <span>($1275)</span></Price>
        <Text>Revenue will change based on mining difficulty and Ethereum price.</Text>
    </section>

    </Form>
  )
}

export default CalculatorCard