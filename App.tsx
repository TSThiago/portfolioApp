import { ScrollView } from "react-native";
import { black } from "./assets/colors/portfolioColors";
import Bio from "./src/components/sections/bio/Bio";
import Contact from "./src/components/sections/contact/Contact";
import Skills from "./src/components/sections/skills/Skills";
import Projects from "./src/components/sections/projects/Projects";

const App = () => {
  return (
    <ScrollView style={{ backgroundColor: black }}>
      <Bio />
      <Skills/>
      {/* <Projects/> */}
      {/* <Contact /> */}
    </ScrollView>
  )
}

export default App;
