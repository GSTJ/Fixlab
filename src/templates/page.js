import React from "react"
import { Container, Title, PostArea, TitleContainer } from "components/atoms";
import { Global } from "components/molecules";
import { graphql } from "gatsby"

export default props => {
  const currentPage = props.data.wordpressPage

  return (
    <Global>
      <TitleContainer>
        <Title.h1>{currentPage.title}</Title.h1>
      </TitleContainer>
      <Container>
        <PostArea>
          <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
        </PostArea>
      </Container>
    </Global>
  )
}


export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
      yoast_meta {
        yoast_wpseo_canonical
        yoast_wpseo_metadesc
        yoast_wpseo_title
      }
    }
  }
`