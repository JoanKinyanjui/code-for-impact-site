import * as React from 'react'
import DropDownNav from '../components/DropDownNav'
import Features from '../components/features'
import Footer from '../components/footer'
import Jumbotron from '../components/jumbotron'
import Main from '../components/main'
import Nav from '../components/nav'
import Process from '../components/process'
import Results from '../components/results'
import Reviews from '../components/reviews'

const IndexPage = () => {
  
  return (
<div>
<Nav />
<Main name=" A collaborative development community for small open source repos" />
<Features />
<Process />
<Results />
<Reviews />

<Jumbotron />

<Footer/>
</div>
  )
}


   
export const Head = () => <title>Landing Page</title>


export default IndexPage;





