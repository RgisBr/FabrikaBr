
import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


 const SecondPage = () => (
  <Layout>
    <Seo title="Thank you for contacting us!" />
    <h1>About </h1>
    <p>Blockchain technology is known to be responsible for recording transactions on the Bitcoin network. 
       The premises of this technology are decentralization, data immutability, transparency and scalability. 
       These characteristics have contributed to the adoption of the Blockchain by companies, industries, financial institutions and governments.
       In 2017, some companies in the retail sector, in partnership with IBM, developed projects to implement the Blockchain technology. 
       The initiative aims to optimize monitoring and control processes, collecting information about products at each stage of the supply chain, meeting legal and environmental requirements.
       Our proposal is to offer a service platform to operate in the cryptography market, offering specialized services for companies and users of Blockchain technology, 
       in addition to developing Blockchain solutions based on information architecture, information security and data distribution. 
       Our industry is a market of US$2.3 trillion in capitalization (Oct/21), 3x larger than the capitalization of B3 US$773 billion dollars (01/21). 
       Our team consists of technology professionals such as Programmers, Web Designers, Project Analysts, and Project Manager. 
       The organizational system is based on Holocracy, this system allows governance to be distributed to teams, enabling employees to prepare proposals or definitions of rules through voting. 
       The proposed business model follows the requirements of the Brazilian Complementary Law (LC) No. 182/2021 The legal framework for startups 
        </p>
  
  <p> 
 <Link to="/contact/">Contact</Link> 
</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>


)
export default SecondPage
