import React from 'react';
import { Phone, Maps } from "./resources";
import { Button, Link } from "components/atoms"
import { Footer, Figure, Caption } from './styles';

export default () => (
    <Footer>
        <Figure>
            <img width={30} height={30} src={Maps} alt="mapa" />
            <Caption>Av. Independencia, 251 - Vila Seixas <br /> Ribeirão Preto - SP <br /> CEP: 14020-010</Caption>
        </Figure>
        <Figure>
            <img width={30} height={30} src={Phone} alt="telefone" />
            <Caption>
                <Link.external href="tel:+5501636104810">(16) 3610-4810</Link.external>
            </Caption>
        </Figure>
        <Link.internal to="/contato"><Button filled inverted>Contato</Button></Link.internal>
    </Footer>
);

