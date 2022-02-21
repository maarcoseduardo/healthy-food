import { Cards } from "./BlogCard";
import {
  CardContainer,
  Container,
  ReadContent,
  Title,
  Subtitle,
} from "./styles";

export const ReadBlog = () => {
  return (
    <>
      <ReadContent id="blog">
        <Container>
          <Title>Read Our Blog</Title>
          <Subtitle>
            Far far way, behind the word mountains, far from the countries
          </Subtitle>
          <Subtitle>
            Vokalia and Consonantia, there live the blind texts.
          </Subtitle>
          <CardContainer>
            <Cards />
          </CardContainer>
        </Container>
      </ReadContent>
    </>
  );
};