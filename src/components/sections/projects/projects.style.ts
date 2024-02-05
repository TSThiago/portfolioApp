import { TouchableOpacityProps, ViewProps } from "react-native";
import styled from "styled-components/native";
import { green, white } from "../../../../assets/colors/portfolioColors";

export const ProjectsContainer = styled.View<ViewProps>`
    width: 100%;
    align-items: center;
    margin-vertical: 50px;
`;

export const ProjectsHeader = styled.View<ViewProps>`
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;
`;

export const HeaderButton = styled.TouchableOpacity<TouchableOpacityProps>`
    padding-bottom: 10px;
    margin-left: 50px;
    border-bottom-width: 1px;
    border-bottom-color: ${green};
`;

export const Project = styled.View<ViewProps>`
    width: 90%;
    margin-bottom: 35px;
`;

export const Technologies = styled.View<ViewProps>`
    flex-direction: row;
    gap: 15px;
`;

export const ProjectButtons = styled.View<ViewProps>`
    margin-top: 20px;
    flex-direction: row;
    gap: 15px;
`;

export const ProjectButton =styled.TouchableOpacity<TouchableOpacityProps>`
    padding-bottom: 10px;
    border-bottom-width: 1px;
    border-bottom-color: ${green};
`;
