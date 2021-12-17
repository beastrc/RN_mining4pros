import * as React from 'react';
import { StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';

const miningtutorialLink = "https://www.youtube.com/channel/UCsTABJa13t8D_gyenDaFEuA/featured";

const Miningtutorial = () => {
    return(
        <WebView source={{ uri: miningtutorialLink }} style={{ marginTop: 20 }} />
    );
}

const styles =StyleSheet.create ({

})

export default Miningtutorial;