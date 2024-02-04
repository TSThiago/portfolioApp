import { ViewProps } from "react-native/Libraries/Components/View/ViewPropTypes";
import styled from "styled-components/native";
import { gray, green, white } from "../../../../assets/colors/portfolioColors";
import { ImageProps, TouchableOpacityProps } from "react-native";

interface ContactInputProps extends ViewProps {
    height?: string;
};

export const ContactContainer = styled.View<ViewProps>`
    height: 758px;
    width: 100%;
    align-items: center;
    background-color: ${gray};
`;

export const ContactHeader = styled.View<ViewProps>`
    width: 90%;
    align-items: center;
`;

export const ContactForm = styled.View<ViewProps>`
    width: 90%; 
    align-items: center;  
    margin-top: 30px;  
`;

export const FormButton = styled.TouchableOpacity<TouchableOpacityProps>`
    margin-top: 15px;
    padding: 20px;
    border-bottom-width: 1px;
    border-bottom-color: ${green};
    margin-left: 160px
`;

export const ContactFooter = styled.View<ViewProps>`
    width: 95%;
    margin-top: 50px;
    border-top-width: 1px;
    border-top-color: ${white};
`;

export const SocialMediaContainer = styled.View<ViewProps>`
    flex-direction: row;
    gap: 25px
`;

export const SocialMediaSymbol = styled.Image<ImageProps>`
    height: 25px;
    width: 25px
`;