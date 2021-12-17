import * as React from 'react';
import { StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';

const linkUrl = "https://www.instagram.com/mining4pros/";
// const youtubeLink = ""

const Web = () => {
    return(
        <WebView source={{ uri: linkUrl }} style={{ marginTop: 20 }} />
    );
}


const styles =StyleSheet.create ({

})

export default Web;