import * as React from 'react';
import { StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';

const contactLink = "https://mining4pros.com/#{{%20coinId%20}}/contactus";

const Gpusetup = () => {
    return(
        <WebView source={{ uri: contactLink }} style={{ marginTop: 20 }} />
    );
}

const styles =StyleSheet.create ({

})

export default Gpusetup;