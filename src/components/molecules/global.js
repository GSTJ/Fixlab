import React from 'react';
import { Navbar, Footer } from "components/organisms"
import { Helmet } from 'react-helmet'

export default props => (
  <>
    <Helmet>
      <html lang="pt-br" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <title>Fixlab | Assistência técnica especializada Apple</title>
      <meta name="description" content="Assistência técnica Apple iPhone e iPad Ribeirão Preto (016) 3610-4810" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Fixlab | Assistência técnica especializada Apple" />
      <meta property="og:description" content="Localizada em Ribeirão Preto, atendemos notebooks, celulares e computadores (016) 3610-4810" />
      <meta property="og:url" content="www.fixlab.com.br" />
      <meta property="og:image" content="/og.png" />
      <meta property="og:site_name" content="Fixlab" />
      <meta name="twitter:card" content="summary_large_image" />
      <style>{`
        html {
          margin: 75px 0 0 0;
          padding: 0;
          font-family: PT Sans,Segoe UI,Roboto,Helvetica Neue,-apple-system,BlinkMacSystemFont sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        body {
          margin: 0;
          padding: 0;
        }
        #main{
          min-height: calc(100vh - 275px);
        }
    `}</style>
    </Helmet>
    <Navbar />
    <div id="main">
      {props.children}
    </div>
    <Footer />
  </>
)