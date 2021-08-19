import * as React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="FabrikaBr" />
    <h2>Welcome!</h2>
    <p>FabrikaBr is an embryonic platform formed by professionals and students of Computer Engineering. Our goal is to develop technological products and services that can improve people's lives..</p>
    <p>We are enthusiastic about new technologies and their applications, mainly IA, IOT and Blockchain.
We believe in community economic models and decentralized governance. Our applications under development are based on process improvement, enabling greater savings in resources and consequently labor efficiency. Our work methodology follows a model that values human interaction following the best practices..  </p>
    
    <p>
      <Link to="/page-2/">Roadmap</Link> <br />
      <p>2021- 
  Team design and formation </p>
      <Link to="/using-typescript/">Blockchain</Link><br />
      <p>Saiba como a tecnologia Blockchain pode ajudar você.</p>
      <Link to="/About/">About</Link>
      <p>Saiba mais sobre nossos produtos.</p>
    </p>
  </Layout>
)

export default IndexPage
