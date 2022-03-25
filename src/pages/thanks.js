
import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


 const SecondPage = () => (
  <Layout>
    <Seo title="Thank you for contacting us!" />
    <h1>Thank you for contacting us!</h1>
    
  <p>One of our analysts will soon answer your questions.</p>
  
 
    <Link to="/">Go back to the homepage</Link>
  </Layout>


)
export default SecondPage
