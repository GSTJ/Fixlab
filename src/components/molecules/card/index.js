import React from 'react';
import { format } from 'date-fns';
import { Link } from "components/atoms"
import { Container, Image, Date, Content } from "./styles";
import { pt } from 'date-fns/locale';


export default props => {
  const { title, date, excerpt, path, image, alt } = props
  return (
    <Container>
      {image && (
        <Image fluid={image} objectFit="cover" objectPosition="50% 50%" alt={alt} />
      )}
      <Content>
        <h2><Link.internal to={path}>{title}</Link.internal></h2>
        <Date>{format(date, "d 'de' MMMM 'de' yyyy", { locale: pt })}</Date>
        <span dangerouslySetInnerHTML={{ __html: excerpt }} />
      </Content>
    </Container>
  );
}
