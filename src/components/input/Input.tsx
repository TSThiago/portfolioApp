import { TextInputProps } from "react-native";
import { lightGray, white } from "../../../assets/colors/portfolioColors";
import { InputContainer } from "./input.style"

interface InputProps extends TextInputProps {
    height?: string;
    placeholder: string;
    multiline: boolean;
};

const Input = ({  height, placeholder, multiline, ...props }: InputProps) => {
    return (
        <InputContainer  multiline={multiline} placeholderTextColor={lightGray} placeholder={placeholder} height={height} {...props}/>
    )
};

export default Input;