import { lightGray, white } from "../../../assets/colors/portfolioColors";
import { InputContainer } from "./input.style"

interface InputProps {
    height?: string;
    placeholder: string;
    multiline: boolean;
};

const Input = ({ height, placeholder, multiline }: InputProps) => {
    return (
        <InputContainer multiline={multiline} placeholderTextColor={lightGray} placeholder={placeholder} height={height} />
    )
};

export default Input;