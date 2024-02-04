import { TextInputProps } from "react-native";
import styled from "styled-components/native";
import { white } from "../../../assets/colors/portfolioColors";

interface InputContainerProps extends TextInputProps{
    height?: string;
}

export const InputContainer = styled.TextInput<InputContainerProps>`
    width: 95%;
    ${(props) => props.height ? `height: ${props.height};` : '43px'}
    padding: 0.25px;
    padding-left: 15px;
    font-family: 'SpaceGrotesk-Medium';
    font-size: 16px;
    color: ${white};
    margin-top: 10px;
    border-bottom-width: 2px;
    border-bottom-color: ${white};
`