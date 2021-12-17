import * as React from 'react';
import { StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';

const youtubeLink = "https://www.youtube.com/channel/UCsTABJa13t8D_gyenDaFEuA/featured";

const Youtube = () => {
    return(
        <WebView source={{ uri: youtubeLink }} style={{ marginTop: 20 }} />
    );
}

const styles =StyleSheet.create ({

})

export default Youtube;