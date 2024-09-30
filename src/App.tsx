import { Grid, GridItem } from "@chakra-ui/react"

function App() {
  return <Grid templateAreas={{
    lg: `"nav" "form" "footer"`
  }}>
    <GridItem area="nav">Nav</GridItem>
    <GridItem area="form">Form</GridItem>
    <GridItem area="footer">Footer</GridItem>
  </Grid>
}

export default App;
