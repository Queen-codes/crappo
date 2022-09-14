import React from 'react'
import styled from 'styled-components'
import { Button } from "./Navbar"
//import vector from "../assets/"
const NewsletterWrapper = styled.div`
    background: linear-gradient(180deg, #2B076E 0%, #0D0D2B 100%);
    
`
const WhiteBtn = styled(Button)`
    background-color: #fff;
    color: #333;

    &:hover{
        background-color: none;
        border: 1px solid #0D0D2B;
        color: #fff;

    }

    @media (min-width: 1024px) {
        margin-left: 3rem;
    }
    
`
const Container = styled.div`
    background-color: #3671E9;
    width: 90%;
    margin: auto;
    color: #fff;
    border-radius: 10px;
    padding: 1rem;
    min-height: 200px;

    @media (min-width: 1024px) {
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        place-items: center;
    }
    
`

const TextField = styled.span`

    position: relative;
    border-bottom: 1px solid #E0E0E0;
    margin: 30px 0;
    padding-bottom: 0.3rem;

    & input {
        border: none;
        outline: none;
        background: none;
        height: 40px;
        width: 100%;
        padding: 0 0.31rem;

        @media (min-width: 1024px) {
            width: auto;
            margin-right: 2.4rem;
        }
      }
    
  
`
function Newsletter() {
  return (
    <NewsletterWrapper>
        <Container data-aos='zoom-in' className='text'>
        <div>
            <h2>Start Mining now</h2>
            <p>Join now with CRAPPO to get the latest news and start mining now</p>
        </div>

        <section className="subsribe">
            <form onSubmit={(e) => e.preventDefault()}>
                <TextField className="text-field">
                    <input type="email" name="email" id="email" placeholder='Enter your email-adress'/>
                    <span></span>
                </TextField>
        
                <WhiteBtn>Subscribe</WhiteBtn>
            </form>
        </section>
    </Container>

    </NewsletterWrapper>
  )
}

export default Newsletter