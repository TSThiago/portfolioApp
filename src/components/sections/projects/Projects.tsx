import { Image, TouchableOpacity } from "react-native";
import { green, lightGray, white } from "../../../../assets/colors/portfolioColors";
import ThisText from "../../text/ThisText";
import { TextTypes } from "../../text/textTypes";
import { HeaderButton, ProjectsContainer, ProjectsHeader, Project, Technologies, ProjectButtons, ProjectButton } from "./projects.style"
import openLinkInBrowser from "../../../shared/functions/OpenLinkInBrowser/openLinkInBrowser";

interface ProjectsProps {
    scrollButton: () => void;
}

const Projects = ({ scrollButton }: ProjectsProps) => {
    return (
        <ProjectsContainer>
            <ProjectsHeader>
                <ThisText color={white} type={TextTypes.HEADING_XL}>Projects</ThisText>
                <HeaderButton onPress={scrollButton}>
                    <ThisText color={green}>Contact Me</ThisText>
                </HeaderButton>
            </ProjectsHeader>
            <Project>
                <Image style={{width: 350, height: 200 ,resizeMode:'contain', marginLeft: 'auto', marginRight: "auto"}} source={require("../../../../assets/images/Pokedex.png")} />
                <ThisText margin="15px 0" color={white} type={TextTypes.HEADING_M}>POKÉDEX</ThisText>
                <Technologies>
                    <ThisText color={lightGray}>REACT NATIVE</ThisText>
                    <ThisText color={lightGray}>STYLED COMPONENTS</ThisText>
                </Technologies>
                <ProjectButtons>
                <ProjectButton onPress={() => console.log('View Project')}>
                    <ThisText color={white}>VIEW PROJECT</ThisText>
                </ProjectButton>
                <ProjectButton onPress={() => openLinkInBrowser('https://github.com/TSThiago/pokedex_app')}>
                    <ThisText color={white}>VIEW CODE</ThisText>
                </ProjectButton>
                </ProjectButtons>
            </Project>

        </ProjectsContainer>
    );
};

export default Projects;