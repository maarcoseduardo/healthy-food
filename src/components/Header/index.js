import React, { useState } from "react";
import { headerMenu } from "../../services/header-menu";
import Link from 'next/link';
import { Hamburguer } from "./Hamburguer";
import {
  HeaderContent,
  Content,
  HealthLogoText,
  Nav,
  UnlistContent,
  UnList,
  List,
  Anchor,
  RegisterAnchor
} from "./styles";

export const Header = ({ scroll }) => {
  
  const [open, setOpen] = useState(false);

  return (
    <HeaderContent scroll={scroll}>
      <Content>
        <Anchor onClick={() => setOpen(false)} to={"__next"} spy={true} smooth={true}>
          <HealthLogoText scroll={scroll} open={open}>Healthy Food</HealthLogoText>
        </Anchor>
        <Nav>
          <UnlistContent open={open}>
            <UnList>
              {headerMenu.map(({ id, go, title }) => (
                <List key={id}>
                  <Anchor onClick={() => setOpen(!open)} to={go} spy={true} smooth={true} >
                    {title}
                  </Anchor>
                </List>
              ))}
              <List>
                <Link as="/register" href="/register" passHref>
                  <RegisterAnchor passHef>REGISTER</RegisterAnchor>
                </Link>
              </List>
            </UnList>
          </UnlistContent>
        </Nav>
        <Hamburguer open={open} setOpen={setOpen} />
      </Content>
    </HeaderContent>
  );
};
