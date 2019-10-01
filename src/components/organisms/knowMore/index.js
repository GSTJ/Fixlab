import React from 'react';
import { Iphone, Ipad, Macbook, AppleWatch } from "./resources"
import { Title, SquareSelector, Link, Container } from 'components/atoms';
import { Content, List, Tutorial } from "./styles"

export default () => (
    <Container>
        <Content>
            <Title.h2>Conheça <span>alguns</span> de nossos serviços</Title.h2>
            <Tutorial>Clique em cima para mais informações</Tutorial>
            <List>
                <Link.internal to="/assistencia-iphone-ribeirao-preto">
                    <SquareSelector>
                        <img width={150} height={150} src={Iphone} alt="Assistência iPhone" />
                    </SquareSelector>
                </Link.internal>
                <Link.internal to="/assistencia-ipad-ribeirao-preto">
                    <SquareSelector>
                        <img width={150} height={150} src={Ipad} alt="Assistência iPad" />
                    </SquareSelector>
                </Link.internal>
                <Link.internal to="/assistencia-apple-watch-ribeirao-preto">
                    <SquareSelector>
                        <img width={150} height={150} src={Macbook} alt="Assistência Apple Watch" />
                    </SquareSelector>
                </Link.internal>
                <Link.internal to="/assistencia-notebooks-ribeirao-preto">
                    <SquareSelector>
                        <img width={150} height={150} src={AppleWatch} alt="Assistência Notebooks" />
                    </SquareSelector>
                </Link.internal>
            </List>
        </Content>
    </Container>
);

