import React from 'react'
import { Global } from "components/molecules";
import { Link, Title, PageErrorContainer } from "components/atoms"
import notFound from "./resources/notFound.svg"

export default () => (
    <Global>
        <PageErrorContainer>
            <img src={notFound} alt="404 Página não encontrada" />
            <br />
            <Title.h1>Essa página não existe ou foi deletada!<br />Clique <span><Link.internal to="/">aqui</Link.internal></span> para retornar a pagina inicial</Title.h1>
        </PageErrorContainer>
    </Global>
)