import React from "react"
import { Container, Title, PostArea, TitleContainer } from "components/atoms";
import { Pagination } from "./styles"
import { Global, Card } from "components/molecules";
import { graphql, navigate } from "gatsby"
import Img from 'gatsby-image';

export default props => {
  const { wordpressCategory: current, allWordpressPost: posts } = props.data
  const { limit, skip, total } = props.pageContext

  return (
    <Global>
      <TitleContainer>
        <Title.h1>{current.name}</Title.h1>
      </TitleContainer>
      <Container>
        <PostArea>
          {posts.edges.map(post => (
            <Card
              key={post.node.path}
              alt={post.node.featured_media && post.node.featured_media.alt_text}
              image={post.node.featured_media && post.node.featured_media.localFile.childImageSharp && post.node.featured_media.localFile.childImageSharp.fluid}
              title={post.node.title}
              excerpt={post.node.excerpt}
              path={post.node.path}
              date={new Date(post.node.date)} />
          ))}
          <Pagination
            limit={limit}
            offset={skip}
            total={total - limit * 2}
            onClick={(e, offset, page) => navigate(current.path + ((page - 1) ? `page/${page}` : ""))}
          />
        </PostArea>
      </Container>
    </Global>
  )
}

export const Query = graphql`
  query($id: String!, $skip: Int!, $limit: Int!) {
    wordpressCategory(id: { eq: $id }) {
      name
      path
    }
    allWordpressPost(
      limit: $limit
      skip: $skip
      filter: { categories: { elemMatch: { id: { eq: $id } } } }
    ) {
      edges {
        node {
          title
          excerpt
          date
          path
          featured_media {
            localFile {
              childImageSharp {
                fluid(quality: 100){
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            alt_text
            source_url
          }
        }
      }
    }
  }
`

/*
  media_details {
    sizes {
      medium {
        source_url
        width
        height
      }
      large {
        source_url
        width
        height
      }
      full {
        source_url
        width
        height
      }
      medium_large {
        source_url
        width
        height
      }
    }
  }
*/