import 'react-native-gesture-handler';

import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions, FlatList  } from 'react-native';
import Button from 'react-native-button';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

const tableLabel = ['Address', 'Hashrate', 'Share Rate'];

function setHashRate(hashrate) {
    var minerHashrate = (hashrate/1000000000).toFixed(2);
    return minerHashrate+'GH/s';
}

function setShareRate(sharerate) {
    var minerSharerate = sharerate.toFixed(2);
    return minerSharerate+'S/s';
}

const MinerComponent = ({props}) => (
    <View style={ styles.tableBodyStyle }>
        <Text style={ styles.addressLabel } numberOfLines={1} ellipsizeMode='middle'>{ props.miner }</Text>
        <Text style={ styles.hashrateLabel }>{ setHashRate(props.hashrate) }</Text>
        <Text style={ styles.sharerateLabel }>{ setShareRate(props.sharesPerSecond) }</Text>
    </View>
);

const renderMiner = ({ item }) => (
    <MinerComponent props={ item } />
);

function selectApi(algorithmName){
    var apiUrl;
    switch(algorithmName){
      case 'ETH':
        apiUrl = 'https://mining4pros.com/api/pools/eth/miners';
        break;
      case 'ZEC':
        apiUrl = 'https://mining4pros.com/api/pools/zec/miners';
        break;
      case 'ZEN':
        apiUrl = 'https://mining4pros.com/api/pools/zen/miners';
        break;
    }
    return apiUrl;
}
export default Miners = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    // console.log(data);
    var parameterName = props.route.params;
    // console.log('miner:', parameterName);

    useEffect(() => {
      fetch(selectApi(parameterName))
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

    return (
        <View style={styles.apiContainer}>
            {isLoading ? <Text>Loading...</Text> : 
            ( <View >
                <View style={styles.tableHeaderStyle}>
                    <Text style={styles.addressLabel}>{ tableLabel[0] }</Text>
                    <Text style={styles.hashrateLabel}>{ tableLabel[1] }</Text>
                    <Text style={styles.sharerateLabel}>{ tableLabel[2] }</Text>
                </View>
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={ renderMiner }
                />
            </View>
            )}
        </View>
    );  
}

// ...
const styles = StyleSheet.create({
    rowElement: {
        flexDirection: 'row',
    },
    block: {
        flexDirection: 'row',
        borderWidth : 1,
        borderRadius : 8,
        padding : 8,
        marginTop : 4,
        marginBottom : 4,
    }, 
    apiContainer: {
        flex: 1, 
        paddingLeft: 8,
        paddingRight: 8,
    },
    tableHeaderStyle:{
        flexDirection: 'row',
        backgroundColor: '#cccccc',
        paddingTop: 8,
        paddingBottom: 8,
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
    },
    tableBodyStyle:{
        backgroundColor: 'white',
        flexDirection:'row',
        paddingTop: 12,
        paddingBottom: 4,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        left:'1%',
    },
    addressLabel:{
        width:'60%',
        textAlign: 'center',
    },
    hashrateLabel:{
        width:'20%',
        textAlign: 'center',
    },
    sharerateLabel:{
        width:'20%',
        textAlign: 'center',
    },
});