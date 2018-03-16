import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'


const Header = () => (
  <Banner>
    <HeaderContainer>
      <h1>
        <IndexLink to="/">
          
        </IndexLink>
      </h1>
    </HeaderContainer>
  </Banner>
)

const Banner = styled.div`
  background-image: url('https://i.imgur.com/DWqXr4u.png');
  background-size: 100% 100%;
  height: 125px;
  marginBottom: 1.45rem;
`
const IndexLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 3rem;
`
const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
  font-family: Helvetica
`
export default Header
