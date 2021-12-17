import 'react-native-gesture-handler';

import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions, FlatList  } from 'react-native';
import Button from 'react-native-button';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

const tableHeader = ["No","Effort", "Status", "Reward", "Confirmation"];

function setEffort(effort) {
    var blockEffort = (effort*100).toFixed(0);
    return blockEffort+"%";
};
function setReward(reward) {
    var blockEffort = reward.toFixed(2);
    return blockEffort;
};

function setConfirmationProgress(confirmationProgress) {
    var blockCreated = confirmationProgress*100;
    return blockCreated+'%';
};

// const BlockComponent = ({ props }) => (
//     <View style={styles.block}>
//         <View style={ styles.rowElement }>
//             <Text style={styles.label }>No</Text>
//             <Text style={styles.blockinfo }>{ props.blockHeight}</Text>
//         </View>
//         <View style={ styles.rowElement }>
//             <Text style={styles.label }>Addres</Text>
//             <Text style={styles.blockinfo }>{ props.miner }</Text>
//         </View>
//         <View style={ styles.rowElement }>
//             <Text style={styles.label }>Effort</Text>
//             <Text style={styles.blockinfo }>{ setEffort(props.effort) }</Text>
//         </View>
//         <View style={ styles.rowElement }>
//             <Text style={styles.label }>Status</Text>
//             <Text style={styles.blockinfo }>{ props.status }</Text>
//         </View>
//         <View style={ styles.rowElement }>
//             <Text style={styles.label }>Reward</Text>
//             <Text style={styles.blockinfo }>{ props.reward }</Text>
//         </View>
//         <View style={ styles.rowElement }>
//             <Text style={styles.label }>Confirmation</Text>
//             <Text style={styles.blockinfo }>{ props.confirmationProgress }</Text>
//         </View>
//     </View>
// );

const BlocksComponent =({ props }) => (
    <View style={styles.tableBodyStyle}>
        <Text style={styles.noLabel} >{props.blockHeight}</Text>
        <Text style={styles.effortLabel}>{ setEffort(props.effort) }</Text>
        <Text style={styles.statusLabel}>{ props.status }</Text>
        <Text style={styles.rewardLabel}>{ setReward(props.reward) }</Text>
        <Text style={styles.confirmationLabel}>{setConfirmationProgress(props.confirmationProgress)}</Text>
    </View>
);

const renderBlock = ({ item }) => (
    // <BlockComponent props={ item } />
    <BlocksComponent props={item} />
);

function selectApi(algorithmName){
    var apiUrl;
    switch(algorithmName){
      case 'ETH':
        apiUrl = 'https://mining4pros.com/api/pools/eth/blocks';
        break;
      case 'ZEC':
        apiUrl = 'https://mining4pros.com/api/pools/zec/blocks';
        break;
      case 'ZEN':
        apiUrl = 'https://mining4pros.com/api/pools/zen/blocks';
        break;
    }
    return apiUrl;
}

export default Blocks = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    // console.log(data);
    var parameterName = props.route.params;
    // console.log('block:', parameterName);
  
    useEffect(() => {
    //   fetch('https://mining4pros.com/api/pools/zen/blocks')
      fetch(selectApi(parameterName))
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

    return (
        <View style={styles.apiContainer}>
            <View style={styles.apiTable} >
                {isLoading ? <Text>Loading Data From Server...</Text> : 
                ( <View>
                    <View style={styles.tableHeaderStyle}>
                        <Text style={styles.noLabel}>{tableHeader[0]}</Text>
                        <Text style={styles.effortLabel}>{tableHeader[1]}</Text>
                        <Text style={styles.statusLabel}>{tableHeader[2]}</Text>
                        <Text style={styles.rewardLabel}>{tableHeader[3]}</Text>
                        <Text style={styles.confirmationLabel}>{tableHeader[4]}</Text>
                    </View>

                    <FlatList
                        data={data}
                        keyExtractor={({ blockHeight }, index) => blockHeight}
                        // renderItem={ renderBlock }
                        renderItem={ renderBlock }
                    />
                </View>
                )}
            </View>

        </View>
    );  
}

// ...
const styles = StyleSheet.create({
    titleLabel: {
        fontSize: 24,
        color: 'black',
        paddingTop: 12,
        paddingBottom: 12,
    },
    apiContainer: {
        flex: 1, 
        paddingLeft: 8,
        paddingRight: 8,
    },
    apiTable: {
        marginTop: 24,
        borderRadius: 12,
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
    noLabel: {
        width: '25%',
        textAlign: 'center',
        // paddingLeft:5,
        color: '#00a65a',
    },
    effortLabel:{
        width: '15%',
        textAlign: 'center',
        color:'#333333',
    },
    statusLabel:{
        width: '20%',
        textAlign: 'center',
    },
    rewardLabel:{
        width: '15%',
        textAlign: 'center',
        color: '#333333',
    },
    confirmationLabel:{
        width: '25%',
        textAlign: 'center',
    },
});