import { Grid, GridItem } from "@chakra-ui/react"
import NavBar from "./components/NavBar";

function App() {
  return <Grid templateAreas={{
    lg: `"nav" "form" "footer"`
  }}>
    <GridItem area="nav"><NavBar /></GridItem>
    <GridItem area="form">Form</GridItem>
    <GridItem area="footer">Footer</GridItem>
  </Grid>
}

export default App;
