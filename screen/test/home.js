import 'react-native-gesture-handler';

import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions, FlatList  } from 'react-native';
import Button from 'react-native-button';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

const apiurl = "https://mining4pros.com/api/pools/eth/miners";

export default Home = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    // console.log(data);
  
    useEffect(() => {
      fetch('https://mining4pros.com/api/pools/eth/miners')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

    return (
        <View >

        </View>
    );  
}

// ...
const styles = StyleSheet.create({

});