import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import FlatButton from 'material-ui/FlatButton'
import '../layouts/index.css'
import ImageGallery from '../components/ImageGallery'


const IndexPage = () => (
  <Body>
    <ImageGallery/>
    <h1>Why Reeves Media?</h1>
    <Blurb>Reeves Media has been in the out-of-home industry since 1983. You can take advantage of this knowledge and experience. You won’t pay any more for our talent and expertise – in fact, you’ll tap into our purchasing power and preferred pricing from some of the finest independent operators in the industry!

Check out our billboard inventory and see why we can offer you the best options on the outdoor advertising superhighway! </Blurb>
    <FlatButton label="View our inventory" containerElement={<Link to={'/inventory'}/>} style={{backgroundColor: '#064383', color:'white'}}/>
    
  </Body>
)

const Body = styled.div`
  background-color: white;
  padding: 5px;
`

const Blurb = styled.p`
  font-family: 'Helvetica';
`
export default IndexPage
