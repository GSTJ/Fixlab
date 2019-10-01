import React, { useState, Fragment } from 'react';
import { Logo, Menu } from "./resources"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "components/atoms"
import { Drawer, ListItem, ListItemText, Divider } from '@material-ui/core';
import { Navbar, Links, MobileMenu, List } from './styles';

const Query = graphql`
  query {
    wordpressMenusMenusItems {
      items {
        title
        url
        wordpress_id
      }
    }
  }
`

export default () => {
  const { wordpressMenusMenusItems: menu } = useStaticQuery(Query)
  const [menuToggle, setMenuToggle] = useState(false);
  //Remove replace in production
  return (
    <Navbar>
      <Link.internal to="/">
        <img src={Logo} width={120} alt="Assistência Técnica Apple iPhone e iPad Ribeirão Preto (016) 3610-4810"></img>
      </Link.internal>
      <MobileMenu src={Menu} onClick={() => setMenuToggle(true)} alt="open menu" />
      <Links>
        {menu.items.map(page => (
          <Link.internal key={page.wordpress_id} to={page.url.replace("https://fixlab.com.br", "")}>
            <li>{page.title}</li>
          </Link.internal>)
        )}
      </Links>
      <Drawer open={menuToggle} onClose={() => setMenuToggle(false)}>
        <List>
          {menu.items.map(page => (
            <Fragment key={page.url}>
              <Link.internal to={page.url.replace("https://fixlab.com.br", "")}>
                <ListItem button>
                  <ListItemText primary={page.title} />
                </ListItem>
              </Link.internal>
              <Divider />
            </Fragment>
          ))}
        </List>
      </Drawer>
    </Navbar>
  );
}