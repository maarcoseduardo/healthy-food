import React from "react";
import {
  TryRecipeContent,
  Container,
  Content,
  Div,
  Title,
  DivInputButton,
  Input,
  Button,
  Icon,
} from "./styles";

export const TryNewRecipe = () => {
  return (
    <TryRecipeContent>
      <Container>
        <Content>
          <Div>
            <Title>Ready for Trying a new recipe?</Title>
            <DivInputButton>
              <Input placeholder="Search healthy recipes" />
              <Button>
                <Icon />
              </Button>
            </DivInputButton>
          </Div>
        </Content>
      </Container>
    </TryRecipeContent>
  );
};
