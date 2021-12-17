import * as React from 'react';
import { StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';

const BlogLink = "https://mining4pros.com/#{{%20coinId%20}}/blog";

const Blog = () => {
    return(
        <WebView source={{ uri: BlogLink }} style={{ marginTop: 20 }} />
    );
}

const styles =StyleSheet.create ({

})

export default Blog;