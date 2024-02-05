import { useState } from "react";
import { Image, ScrollView } from "react-native";
import { black } from "../../../assets/colors/portfolioColors";
import Bio from "../../components/sections/bio/Bio"
import Contact from "../../components/sections/contact/Contact";
import Projects from "../../components/sections/projects/Projects";
import Skills from "../../components/sections/skills/Skills";

const Portfolio = () => {
    const [ref, setRef] = useState<any>(undefined)

    const EndButtonHandler = () => {
      ref.scrollToEnd({ animated: true });
    };
  
    return (
      <ScrollView ref={(ref => setRef(ref))} style={{ backgroundColor: black }}>
        <Bio scrollButton={EndButtonHandler} />
        <Skills />
        <Projects scrollButton={EndButtonHandler}/>
        <Contact />
        <Image style={{position: 'absolute', right: -362, top: 1300}} source={require('../../../assets/images/Rings.png')}/>
      </ScrollView>
    )
}

export default Portfolio; 