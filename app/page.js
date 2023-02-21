import {
  BlurImage,
  Container,
  GridContainer,
  Searchbar,
  SearchbarContainer,
} from "components";

const App = () => {
  return (
    <main>
      <SearchbarContainer>
        <Searchbar />
      </SearchbarContainer>
      <Container>
        <GridContainer>
          <BlurImage />
        </GridContainer>
      </Container>
    </main>
  );
};

export default App;
