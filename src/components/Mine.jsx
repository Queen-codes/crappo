import React,{useState} from 'react'
import styled from 'styled-components'
import { CryptoCards } from '../../CryptoCards'
import { Button } from './Navbar'

const MiningWrapper = styled.div`
  background-color: #fff;
  color: #333;
  padding-bottom:3.3rem;
  padding-top: 4rem;

& h2{
    color: #0D0D2B;
    padding: 8rem 1rem 1.5rem 1.5rem;

  @media(min-width:610px) {
    text-align: center;
    max-width:550px;
    margin: auto;
  }
}
`
const CardsSection = styled.div`
  @media (min-width: 1024px) {
    display:grid;
    grid-template-columns: repeat(3, 1fr);
}
`
const Card = styled.div`
  border-radius: 10px;
  text-align: center;
  width: 90%;
  margin: auto;
  margin-bottom: 1.2rem;
  position: relative;
  padding-bottom: 1.6rem;
  cursor: pointer;

  @media (min-device-width: 610px) and (max-device-width: 1024px) {
    width: 50%;
  }
`
const LogoContainer = styled.div`
  width: 15%;
  margin:  auto;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`

const Name = styled.span`
  font-weight: 700;
  font-size: 1.2rem;
 
`

const NameContainer = styled.div`
  display: flex;
  gap: .5rem;
  justify-content: center;
`
const Description = styled.p`
  font-size: .85rem;
  line-height: 1.7;
  padding: 2.3rem;
`
function Mine() {
  const [isClicked, setIsClicked] = useState('Bitcoin')
  return (
    <MiningWrapper>
        <h2>Trade securely and market the high growth cryptocurrencies.</h2>

        <CardsSection data-aos='fade-up'>
            {CryptoCards.map(({coin, img, abb, description}, index) => {
              //const {} = card;
              const styles = {
                backgroundColor: coin === isClicked ? '#2B076E' : "#fff",
                color: coin === isClicked ? '#fff'  : '#0D0D2B',
                boxShadow: coin === isClicked ? ' 3px 3px 10px 6px rgba(0, 0, 0, 0.06)' : ' 3px 3px 10px 6px rgba(0, 0, 0, 0.06)',
                transition: 'all 0.8s ease-in-out',
                
              }

              
              return(
                <Card style={styles} key={index} onClick={() => setIsClicked(coin)}>
                  <LogoContainer className="image">              
                      <img src={img} alt="Coin Logo" />
                  </LogoContainer>

                  <NameContainer>
                    <Name>{coin}</Name>
                    <span style={{color:'#BDBDBD'}}>{abb}</span>
                  </NameContainer>


                  <Description style={{color: coin === isClicked? '#fff' : '#828282'}}>{description}</Description>

                  {isClicked === coin ? <Button>Start Mining</Button> : <button className='arrow-btn'><i className='bx bx-chevron-right'></i></button>}

                </Card>
              )
            })}
        </CardsSection>
    </MiningWrapper>
  )
}

export default Mine