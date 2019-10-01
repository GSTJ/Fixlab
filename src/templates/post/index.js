import React from "react"
import { Container, Title, PostArea, TitleContainer, Separator, Link, Button } from "components/atoms";
import { Global } from "components/molecules";
import { graphql } from "gatsby"
import { LeftArrow, RightArrow } from "./resources"
import { Helmet } from 'react-helmet'

export default props => {
  const { current, previous, next } = props.data
  const { yoast_meta: { yoast_wpseo_metadesc: yoastDescription, yoast_wpseo_title: yoastTitle } } = current 
  return (
    <Global>
      <Helmet>
        {yoastTitle && <title>{yoastTitle}</title>}
        {yoastTitle && <meta property="og:title" content={yoastTitle} />}
        {yoastDescription && <meta name="description" content={yoastDescription} />}
        {yoastDescription && <meta property="og:description" content={yoastDescription} />}
      </Helmet>
      <TitleContainer>
        <Title.h1>{current.title}</Title.h1>
      </TitleContainer>
      <Container>
        <PostArea>
          <div dangerouslySetInnerHTML={{ __html: current.content }} />
          <Separator>
            <Link.internal to={previous && previous.path}>
              <Button filled inverted style={{ width: 70 }}>
                <img src={LeftArrow} width={20} height={20} alt="left arrow" />
              </Button>
            </Link.internal>
            <Link.internal to={next && next.path}>
              <Button filled inverted style={{ width: 70 }}>
                <img src={RightArrow} width={20} height={20} alt="right arrow" />
              </Button>
            </Link.internal>
          </Separator>
        </PostArea>
      </Container>
    </Global>
  )
}


export const pageQuery = graphql`
  query($current: String!, $next: String, $previous: String) {
    current: wordpressPost(id: { eq: $current }) {
      title
      content
      yoast_meta {
        yoast_wpseo_canonical
        yoast_wpseo_metadesc
        yoast_wpseo_title
      }
    }
    next: wordpressPost(id: { eq: $next }) {
      title
      path
    }
    previous: wordpressPost(id: { eq: $previous }) {
      title
      path
    }
  }
`