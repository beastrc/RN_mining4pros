import * as React from 'react';
import { StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';


const instagramLink = "https://www.instagram.com/mining4pros/";

const Instagram = () => {
    return(
        <WebView source={{ uri: instagramLink }} style={{ marginTop: 20 }} />
    );
}

const styles =StyleSheet.create ({

})

export default Instagram;