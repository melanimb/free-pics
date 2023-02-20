import { BlurImage, Container, GridContainer, Searchbar } from "components";

const App = () => {
  return (
    <main>
    {/* <NavContainer> */}
      <Searchbar />
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
