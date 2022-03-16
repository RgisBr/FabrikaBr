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
We believe in community economic models and decentralized governance. Our applications under development are based on process improvement, enabling greater savings in resources and consequently labor efficiency. Our work methodology follows a model that values human interaction following the best practices.  </p>
    
    <p>
      
      <Link to="/blockchain/">Blockchain</Link><br />
      <p>We develop projects in Blockchains, applications for various sectors such as education, industry, retail, government and agriculture. </p>
      <p>We provide tools to ensure the reliability of operations and information by solving supply chain problems.</p>
      <p>Our main scope is to develop, integrate, implement and collaborate with other decentralized projects.</p>
      <p>Fundamental analysis on cryptography projects, smart contract verification, fraud, tokenomics and economics (we do not provide any kind of financial advice or asset buy/sell indications). We do not identify our customers, we preserve the anonymity of the contractors, we do not disclose results data only the PKI holder can access the report through an intelligent contract.  </p>
      <p>The DeWork protocol (decentralized work), allows FabrikaBr to be project-oriented, remote teams with people from all over the world..</p>
      
  
      <Link to="/roadmap/">Roadmap</Link> <br />
      <p>2021- 1Q/2Q Design and staff training. OK </p>
      <p>2021- 3Q/4Q organizational structure, laboratory testing, research, fundraising and development partners projects. OK </p> 
      <p>2022- 1Q/2Q Reviewing working structure and testnet  </p>
      <p>2022- 3Q/4Q lessons learned KB, creating business environment, planning for 1Q/2Q 2022 and 3Q/4Q 2022. </p>
     
      <Link to="/about/">About</Link> <br />                                                                                                                         
      <p>Learn more about us, help build our story everyone is welcome.</p>
      <p> DONATE </p>
      <p> Polkadot 16CzoFa2ZsyAD3jRGYBWJwaXXH1xwS39UW5XFN63Rfum41yf </p>
      <p> BSC/ETH 0x3C9E47A08109321D8C58e5E803058A894723F7c0 </p>
      <p> Relictum Pro nju1CRue58JxPhAXokv2DSvf69KySkHf</p>                                                                                                                     
      <p> TESTNET the Network BSC(0xB6a0c64eB388623Ce90aa26E50F388283E12CB4E). OK ((Pls! Donate BNB or BUSD TestNet https://testnet.binance.org/faucet-smart </p>
                                                       
                                                       
       <p>White Paper</p> <br />
        <p>https://github.com/FabrikaBr/fabrikabrI0x/blob/636c42215e0733ef1cf3736648d2b573e9ea3222/White%20Paper</p>                                                                                                                       
  
    </p>
  </Layout>
)

export default IndexPage
