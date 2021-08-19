import * as React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="FabrikaBr" />
    <h2>Bem vindo!</h2>
    <p>FabrikaBr is an embryonic platform formed by professionals and students of Computer Engineering. Our goal is to develop technological products and services that can improve people's lives..</p>
    <p>Fornecemos soluções para o desenvolvimento de protótipos baseados em IA e IoT, automação de processos, monitoramento e relatórios gerenciais.
       Nossa metodologia de trabalho descentralizado, permitem que nossos processos sejam executados por uma equipe multidisciplinar remota com confiança e escalabilidade.  </p>
    
    <p>
      <Link to="/page-2/">Projetos</Link> <br />
      <p>Desenvolva seu projeto, aprenda utilizar os artefatos de controle e monitoramento </p>
      <Link to="/using-typescript/">Blockchain</Link><br />
      <p>Saiba como a tecnologia Blockchain pode ajudar você.</p>
      <Link to="/About/">About</Link>
      <p>Saiba mais sobre nossos produtos.</p>
    </p>
  </Layout>
)

export default IndexPage
