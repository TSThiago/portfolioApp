import { ScrollView, Text, View } from "react-native";
import { black, white } from "./assets/colors/portfolioColors";
import Contact from "./src/components/contact/Contact";


const App = () => {
  return (
    <ScrollView style={{backgroundColor: black}}> 
        <Contact/>
    </ScrollView>
  )
}

export default App;
