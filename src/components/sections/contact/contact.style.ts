import { ViewProps } from "react-native/Libraries/Components/View/ViewPropTypes";
import styled from "styled-components/native";
import { gray } from "../../../../assets/colors/portfolioColors";

interface ContactContainerProps extends ViewProps {

};

export const ContactContainer = styled.View<ContactContainerProps>`
    height: 758px;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${gray};
`