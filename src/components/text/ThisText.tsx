import { TextProps } from "react-native";
import { TextContainer } from "./text.style";
import { useMemo } from "react";
import { TextTypes } from "./textTypes";

interface ThisTextProps extends TextProps {
    color?: string;
    type?: string;
    margin?: string
    textDecoration?: string;
}

const ThisText = ({ textDecorationColor, textDecoration, margin, color, type, ...props }: ThisTextProps) => {
    const fontFamily = useMemo(() => {
        switch (type) {
            case TextTypes.HEADING_XL:
            case TextTypes.HEADING_L:
            case TextTypes.HEADING_M:
                return 'SpaceGrotesk-Bold'
            default:
                return 'SpaceGrotesk-Medium';
        }
    }, [type]);

    const fontSize = useMemo(() => {
        switch (type) {
            case TextTypes.HEADING_XL:
                return '48px';
            case TextTypes.HEADING_L:
                return '40px';
            case TextTypes.HEADING_M:
                return '24px';
            default:
                return '18px';
        }
    }, [type]);

    return (
        <TextContainer textDecoration={textDecoration} margin={margin} color={color} fontSize={fontSize} fontFamily={fontFamily} {...props}></TextContainer>
    );
};

export default ThisText;