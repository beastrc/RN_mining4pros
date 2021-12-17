import * as React from 'react';
import { StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';

const FaqLink = "https://mining4pros.com/#{{%20coinId%20}}/faq";

const Faq = () => {
    return(
        <WebView source={{ uri: FaqLink }} style={{ marginTop: 20 }} />
    );
}

const styles =StyleSheet.create ({

})

export default Faq;