import { ViewProps } from "react-native";
import styled from "styled-components/native";
import { lightGray } from "../../../../assets/colors/portfolioColors";

export const SkillsContainer = styled.View<ViewProps>`
    width: 90%;
    height:620px;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    border-top-width: 1px;
    border-top-color: ${lightGray};
    border-bottom-width: 1px;
    border-bottom-color: ${lightGray};
    gap:30px;
`;

export const SkillContainer = styled.View<ViewProps>`
    align-items: center;
` 