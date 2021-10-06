import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Roadmap" />
    <h1>Roadmap </h1>
    <p>Tasks</p>
  <p>  2021- 1Q/2Q Design and staff training.</p>
<p> Done</p>
  <p> 2021- 3Q/4Q organizational structure, laboratory testing, research, fundraising and development partners projects..</p>
<p>Done</p>
  <p> 2022- 1Q/2Q Reviewing working structure and TESTNET the Network BSC.</p>
<p>Done</p>
  <p>  2022- 3Q/4Q lessons learned KB, creating business environment, planning for 1Q/2Q 2022 and 3Q/4Q 2022.</p>
 <p> Done </p>
  
  
    <Link to="/">Go back to the homepage</Link>
  </Layout>


)
export default SecondPage
