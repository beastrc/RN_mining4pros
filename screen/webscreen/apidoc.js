import * as React from 'react';
import { StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';

const apiLink = "https://mining4pros.com/API-Documentation/index.html";

const Apidoc = () => {
    return(
        <WebView source={{ uri: apiLink }} style={{ marginTop: 20 }} />
    );
}

const styles =StyleSheet.create ({

})

export default Apidoc;