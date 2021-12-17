import * as React from 'react';
import { StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';

var linkUrl = "https://mining4pros.com/API-Documentation/index.html";
const linkUrl = [
    "https://mining4pros.com/API-Documentation/index.html",
    // ""
];
const Api = () => {
    return(
        <WebView source={{ uri: linkUrl }} style={{ marginTop: 20 }} />
    );
}


const styles =StyleSheet.create ({

})

export default Api;