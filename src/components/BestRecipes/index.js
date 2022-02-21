import React from "react";
import {
  RecipesContent,
  Container,
  Content,
  Description,
  Title,
  SubTitle,
  Recipes,
  Unlist,
  List,
  RecipesCard,
  Img,
  RecipesCardContainer,
  H2,
  Anchor,
} from "./styles";
import { recipes } from "../../services/recipes";

export const BestRecipes = () => {
  return (
    <RecipesContent id="recipes">
      <Container>
        <Content>
          <Description>
            <Title>Our Best Recipes</Title>
            <SubTitle>
              Far far away, behind the mountains, far from the countries
            </SubTitle>
            <SubTitle>
              Vakalia and Consonantia, there live the blind texts.
            </SubTitle>
          </Description>
          <Recipes>
            <Unlist>
              {recipes.map(({ id, image, title }) => (
                <List key={id}>
                  <RecipesCard>
                    <Img src={image} />
                    <RecipesCardContainer>
                      <H2>{title}</H2>
                      <Anchor>See Recipe</Anchor>
                    </RecipesCardContainer>
                  </RecipesCard>
                </List>
              ))}
            </Unlist>
          </Recipes>
        </Content>
      </Container>
    </RecipesContent>
  );
};