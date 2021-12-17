import 'react-native-gesture-handler';

import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions, FlatList  } from 'react-native';
import Button from 'react-native-button';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ItemInfo = ({ item }) => (
    <View>
        <Text >{item.id + '. ' + item.title}</Text>
    </View>
);

const renderItem = ({ item }) => (
    <ItemInfo item={ item } />
);

export default Test = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    // console.log(data);
  
    useEffect(() => {
      fetch('https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

    return (
        <View style={{ flex: 1, padding: 24 }}>
            {isLoading ? <Text>Loading...</Text> : 
            ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
                <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.title}</Text>
                <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Articles:</Text>
                <FlatList
                    data={data.articles}
                    keyExtractor={({ id }, index) => id}
                    renderItem={ renderItem }
                />
            </View>
            )}
        </View>
    );  
}

// ...
const styles = StyleSheet.create({

});