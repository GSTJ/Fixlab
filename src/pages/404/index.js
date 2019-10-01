import React from 'react'
import { Global } from "components/molecules";
import { Container } from "./styles"
import { Link, Title } from "components/atoms"
import notFound from "./resources/notFound.svg"

export default () => (
    <Global>
        <Container>
            <img src={notFound} alt="404 Página não encontrada" />
            <br />
            <Title.h1>Essa página não existe ou foi deletada!<br />Clique <span><Link.internal to="/">aqui</Link.internal></span> para retornar a pagina inicial</Title.h1>
        </Container>
    </Global>
)