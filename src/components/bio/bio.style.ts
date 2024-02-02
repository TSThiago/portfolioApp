import styled from "styled-components/native";
import { ViewProps } from "react-native";

interface BioInfosProps extends ViewProps {
    backgroundColor: string;
}

export const BioContainer = styled.View<ViewProps>`
    width: 100%;
    height: 100%;
    align-items: center;
`;

export const BioHeader = styled.View<BioInfosProps>`
    width: 280px;
    height: 383px;
    background-color: ${(props) => props.backgroundColor};
    align-items: center
`;

export const BioInfos = styled.View<ViewProps>`
    margin: 20px;
    width: 90%;
    align-items: center
`;