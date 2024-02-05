import { Image, TouchableOpacity } from "react-native";
import { green, lightGray, white } from "../../../../assets/colors/portfolioColors";
import ThisText from "../../text/ThisText";
import { TextTypes } from "../../text/textTypes";
import { HeaderButton, ProjectsContainer, ProjectsHeader, Project, Technologies, ProjectButtons, ProjectButton } from "./projects.style"

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
                <Image style={{ width: '100%'}} source={require("../../../../assets/images/Bitmap.png")} />
                <ThisText margin="15px 0" color={white} type={TextTypes.HEADING_M}>MEMORY GAME</ThisText>
                <Technologies>
                    <ThisText color={lightGray}>HTML</ThisText>
                    <ThisText color={lightGray}>CSS</ThisText>
                    <ThisText color={lightGray}>JAVASCRIPT</ThisText>
                </Technologies>
                <ProjectButtons>
                <ProjectButton onPress={() => console.log('View Project')}>
                    <ThisText color={white}>VIEW PROJECT</ThisText>
                </ProjectButton>
                <ProjectButton onPress={() => console.log('View Code')}>
                    <ThisText color={white}>VIEW CODE</ThisText>
                </ProjectButton>
                </ProjectButtons>
            </Project>

        </ProjectsContainer>
    );
};

export default Projects;