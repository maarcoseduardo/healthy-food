import {
  Container,
  Content,
  Paragraph,
  Div,
  Unlist,
  List,
  Anchor,
} from "./styles";

export const Footer = () => {
  return (
    <Container>
      <Content>
        <Div>
          <Paragraph>Copyrights 2019 Stack. All Rights Reserved.</Paragraph>
          <Unlist>
            <List>
              <Anchor>Privacy Policy</Anchor>
            </List>
            <List>
              <Anchor>Terms and Conditions</Anchor>
            </List>
          </Unlist>
        </Div>
      </Content>
    </Container>
  );
};