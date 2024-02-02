import { ScrollView } from "react-native";
import { black } from "./assets/colors/portfolioColors";
import Portfolio from './src/modules/portfolio/portfolio'
import Bio from "./src/components/bio/Bio";
import Contact from "./src/components/contact/Contact";

const App = () => {
  return (
    <ScrollView style={{ backgroundColor: black }}>
      <Bio />
      <Contact />
    </ScrollView>
  )
}

export default App;
