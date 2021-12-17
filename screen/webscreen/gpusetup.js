import * as React from 'react';
import { StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';

const qpusetupLink = "https://mining4pros.com/app/Setup.zip";

const Gpusetup = () => {
    return(
        <WebView source={{ uri: qpusetupLink }} style={{ marginTop: 20 }} />
    );
}

export default Gpusetup;