import { Linking } from "react-native";

const openLinkInBrowser = async (url: string): Promise<void> => {
    Linking.openURL(url);
};

export default openLinkInBrowser;