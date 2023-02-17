import { BlurImage, Container, GridContainer, SearchBar } from "components";

const App = () => {
  return (
    <main>
    {/* <NavContainer> */}
      <SearchBar />
    {/* </NavContainer> */}
      <Container>
        <GridContainer>
          <BlurImage />
        </GridContainer>
      </Container>
    </main>
  );
};

export default App;
