import {
  Container,
  Gallery,
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
          <Gallery />
        </GridContainer>
      </Container>
    </main>
  );
};

export default App;
