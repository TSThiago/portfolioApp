import ThisText from "../../text/ThisText"
import { gray, green, white } from "../../../../assets/colors/portfolioColors"
import { TextTypes } from "../../text/textTypes";
import { BioContainer, BioHeader, BioInfos } from "./bio.style";
import { Image, TouchableOpacity } from "react-native";
import { Grayscale } from "react-native-color-matrix-image-filters";


const Bio = () => {
    return (
        <>
            <BioContainer>
                <BioHeader backgroundColor={gray}>
                    <ThisText margin="20px 0px" color={white} type={TextTypes.HEADING_M}>thiago_shibanuma</ThisText>
                    <Grayscale>
                        <Image style={{width: 280, height: 310 }} source={require('../../../../assets/images/Zizau.png')} />
                    </Grayscale>
                </BioHeader>
                <BioInfos>
                    <ThisText color={white} type={TextTypes.HEADING_L}>Nice to meet you!</ThisText>
                    <ThisText color={white} type={TextTypes.HEADING_L}>I'm <ThisText textDecoration='underline' color={green} type={TextTypes.HEADING_L}>Thiago Shibanuma.</ThisText></ThisText>
                    <ThisText margin="20px 0" color={white}>Based in Brazil, I'm a front-end developer passionate about building mobile apps that users loves.</ThisText>
                    <TouchableOpacity>
                        <ThisText textDecoration="underline" color={green} type={TextTypes.HEADING_M}>CONTACT ME</ThisText>
                    </TouchableOpacity>
                </BioInfos>
                <Image style={{ position: 'absolute', left: -432, top: 84, zIndex: 0.2 }} source={require('../../../../assets/images/Rings.png')} />
                <Image style={{ position: 'absolute', left: 342, top: 254, zIndex: 0.2 }} source={require('../../../../assets/images/Oval.png')} />
            </BioContainer>

        </>
    );
};

export default Bio;