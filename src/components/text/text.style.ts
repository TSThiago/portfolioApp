import { TextProps } from "react-native";
import styled from "styled-components/native";
import { white } from "../../../assets/colors/portfolioColors";

interface TextContainerProps extends TextProps {
    color?: string;
    fontSize: string;
    fontFamily: 'SpaceGrotesk-Bold' | 'SpaceGrotesk-Light' | 'SpaceGrotesk-Medium' | 'SpaceGrotesk-Regular' | 'SpaceGrotesk-SemiBold';
    margin?: string;
    textDecoration?: string;
    textDecorationColor?: string;
}

export const TextContainer = styled.Text<TextContainerProps>`
    ${(props) => props.color ? `color : ${props.color};` : ``}
    font-family: ${(props) => props.fontFamily};
    font-size: ${(props) => props.fontSize};
    ${(props) => props.margin ? `margin: ${props.margin};` : ``}
    ${(props) => props.textDecoration ? `text-decoration-line: ${props.textDecoration};` : ``}
`