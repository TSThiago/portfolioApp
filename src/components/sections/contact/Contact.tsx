import React from "react";
import { green, white } from "../../../../assets/colors/portfolioColors";
import ThisText from "../../text/ThisText";
import { TextTypes } from "../../text/textTypes";
import {
    ContactContainer,
    ContactHeader,
    ContactForm,
    FormButton,
    ContactFooter,
    SocialMediaContainer,
    SocialMediaSymbol
} from "./contact.style";
import Input from "../../input/Input";
import { TouchableOpacity } from "react-native";

const Contact = () => {
    return (
        <ContactContainer>
            <ContactHeader>
                <ThisText color={white} type={TextTypes.HEADING_XL} margin="30px 0 10px 0">Contact</ThisText>
                <ThisText color={white}>I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as possible.</ThisText>
            </ContactHeader>
            <ContactForm>
                <Input multiline={false} placeholder="Name" height="43px" />
                <Input multiline={false} placeholder="Email" height="43px" />
                <Input multiline={true} placeholder="Message" height="107px" />
            </ContactForm>
            <FormButton>
                <ThisText color={green}>SEND MESSAGE</ThisText>
            </FormButton>
            <ContactFooter>
                <ThisText color={white} type={TextTypes.HEADING_M} margin="30px auto 20px auto">thiago_shibanuma</ThisText>
            </ContactFooter>
            <SocialMediaContainer>
                <TouchableOpacity>
                    <SocialMediaSymbol source={require('../../../../assets/images/Github.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SocialMediaSymbol source={require('../../../../assets/images/FrontEndMentor.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SocialMediaSymbol source={require('../../../../assets/images/LinkedIn.png')} />
                </TouchableOpacity>
            </SocialMediaContainer>
        </ContactContainer>
    );
};

export default Contact;