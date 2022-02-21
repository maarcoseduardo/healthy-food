import {
  Container,
  Content,
  Membership,
  Div,
  Title,
  Input,
  Button,
} from "./styles";

export const JoinMembership = () => {
  return (
    <Membership id="join">
      <Container>
        <Content>
          <Title>Join our membership to get special offer</Title>
          <Div>
            <Input placeholder="Enter your email address" />
            <Button>Join</Button>
          </Div>
        </Content>
      </Container>
    </Membership>
  );
};
