import { Image } from "react-native";
import { gray, lightGray, white } from "../../../../assets/colors/portfolioColors";
import ThisText from "../../text/ThisText";
import { TextTypes } from "../../text/textTypes";
import { SkillsContainer, SkillContainer } from "./skills.style"

const Skills = () => {
    return (
        <>
            <SkillsContainer>
                <SkillContainer>
                    <ThisText color={white} type={TextTypes.HEADING_L} >HTML</ThisText>
                    <ThisText color={lightGray} >1 Year Experience</ThisText>
                </SkillContainer>
                <SkillContainer>
                    <ThisText color={white} type={TextTypes.HEADING_L} >CSS</ThisText>
                    <ThisText color={lightGray} >1 Year Experience</ThisText>
                </SkillContainer>
                <SkillContainer>
                    <ThisText color={white} type={TextTypes.HEADING_L} >Javascript</ThisText>
                    <ThisText color={lightGray} >1 Year Experience</ThisText>
                </SkillContainer>
                <SkillContainer>
                    <ThisText color={white} type={TextTypes.HEADING_L} >React.Js</ThisText>
                    <ThisText color={lightGray} >1 Year Experience</ThisText>
                </SkillContainer>
                <SkillContainer>
                    <ThisText color={white} type={TextTypes.HEADING_L} >React Native</ThisText>
                    <ThisText color={lightGray} >3 Months Experience</ThisText>
                </SkillContainer>
            </SkillsContainer>
        
        </>
    );
};

export default Skills;