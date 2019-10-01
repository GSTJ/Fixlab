import React from 'react';
import { Container, Content, Title, Button, Alert, Link } from "components/atoms"
import { Time } from "components/molecules"
import { Info, Image } from './styles';
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image';

const Query = graphql`
  query {
    file(relativePath: { eq: "iphone_one.png" }) {
      childImageSharp {
        fluid(quality: 100, maxHeight:425, maxWidth: 210) {
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
        <Info>
          <Title.h1>Avaliações <span>gratuitas</span> dentro de</Title.h1>
          <Time />
          <Link.internal to="/contato">
            <Button filled>Orçamento</Button>
          </Link.internal>
          <br />
          <Alert>
            *Horas úteis. Média de prazo e sujeita a alterações
          </Alert>
        </Info>
        <Image>
          <Img fluid={Iphone} alt="Iphone XS Max Gold" />
        </Image>
      </Content>
    </Container>
  );
}