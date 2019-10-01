import React from 'react';
import { Content, Title, Button, Description, Link, Information } from "components/atoms"
import { Image, Container } from './styles';
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image';

const Query = graphql`
  query {
    file(relativePath: { eq: "iphone_two.png" }) {
      childImageSharp {
        fluid(quality: 100, maxHeight: 400, maxWidth: 644) {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default () => {
  const { file: { childImageSharp: { fluid: Iphone } } } = useStaticQuery(Query)

  return (
    <Container>
      <Content>
        <Image>
          <Img fluid={Iphone} alt="Iphones" />
        </Image>
        <Information>
          <Title.h2 inverted>Assistência técnica <span>especializada</span> Apple</Title.h2>
          <Description inverted>
            Estamos a mais de cinco anos provendo soluções rápidas e acessíveis
          </Description>
          <Link.internal to="/contato">
            <Button filled inverted>Contato</Button>
          </Link.internal >
        </Information>
      </Content>
    </Container>
  );
}

