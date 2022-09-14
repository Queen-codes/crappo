import {useState} from 'react'
import styled from 'styled-components'
import CalculatorCard from './CalculatorCard'
//import { ArticleTitle } from './Article'
//import { ArticleText } from './Article'

const Title = styled.h2`
  font-weight: 700;
  font-size: 1.45rem;
  line-height: 1.7;
  margin-top: 1.2rem;
`

const Section = styled.section`
  text-align: center;
  position: relative;
  transform: translateY(40px);
`
const Text = styled.p`
  font-weight: 400;
  font-size: .8rem;
  color: #E0E0E0;
  margin-top: 1rem;
  line-height: 1.8;
  margin-bottom: 1rem;

  @media(min-width: 610px) {
    max-width: 500px;
    margin: auto;
  }
`
const CalculatorWrapper = styled.section`
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  margin-top: 4.35rem;
  position: relative;
 
`
function Calculator() {
  const[selected, setSelected] = useState('TH/s')
  return (
    <CalculatorWrapper >
      <Section> 
        <Title data-aos="fade-left"> Check how much you can earn</Title>
        <Text data-aos="fade-right">Let’s check your hash rate to see how much you will earn today, Exercitation veniam consequat sunt nostrud amet.</Text>
        </Section>
        <CalculatorCard selected={selected} setSelected={setSelected}/>
    </CalculatorWrapper>
  )
}

export default Calculator