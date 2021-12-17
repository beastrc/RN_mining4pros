import 'react-native-gesture-handler';

import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions, FlatList  } from 'react-native';
import Button from 'react-native-button';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

const tableLabel = ["Sent", "Address", "Amount", "Confirmation"];

function setAmount(amount) {
    var paymentAmount = amount.toFixed(2);
    return paymentAmount;
}

const PaymentComponent = ({ props }) => (
    <View style={styles.tableBodyStyle}>
        <Text style={styles.sentLabel}>{ props.created }</Text>
        <Text style={styles.addressLabel} numberOfLines={1} ellipsizeMode='middle'>{ props.address }</Text>
        <Text style={styles.amountLabel}>{ setAmount(props.amount) }</Text>
        <Text style={styles.confirmationLabel} numberOfLines={1} ellipsizeMode='middle'>{ props.transactionConfirmationData }</Text>
    </View>
);

const renderPayment = ({ item }) => (
    <PaymentComponent props={ item } />
);
function selectApi(algorithmName){
    var apiUrl;
    switch(algorithmName){
      case 'ETH':
        apiUrl = 'https://mining4pros.com/api/pools/eth/payments';
        break;
      case 'ZEC':
        apiUrl = 'https://mining4pros.com/api/pools/zec/payments';
        break;
      case 'ZEN':
        apiUrl = 'https://mining4pros.com/api/pools/zen/payments';
        break;
    }
    return apiUrl;
}
export default Payments = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    // console.log(data);
    var parameterName = props.route.params;
    // console.log('payment:', parameterName);

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
            ( <View>
                <View style={styles.tableHeaderStyle}>
                    <Text style={styles.sentLabel}>{ tableLabel[0] }</Text>
                    <Text style={styles.addressLabel}>{ tableLabel[1] }</Text>
                    <Text style={styles.amountLabel}>{ tableLabel[2] }</Text>
                    <Text style={styles.confirmationLabel}>{ tableLabel[3] }</Text>
                </View>
                <FlatList
                    data={data}
                    keyExtractor={({ address }, index) => address}
                    renderItem={ renderPayment }
                />
            </View>
            )}

        </View>
    );  
}

// ...
const styles = StyleSheet.create({
    titleLabel: {
        fontSize: 24,
        color: 'black',
    },
    apiContainer: {
        flex: 1, 
        paddingLeft: 8,
        paddingRight: 8,
    },
    rowElement: {
        flexDirection: 'row',
    },
    block: {
        borderWidth : 1,
        borderRadius : 8,
        padding : 8,
        marginTop : 4,
        marginBottom : 4,
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
    sentLabel:{
        width:'20%',
        textAlign: 'center',
    },
    addressLabel: {
        width: '30%',
        textAlign: 'center',
    },
    amountLabel:{
        width: '15%',
        textAlign: 'center',
    },
    confirmationLabel: {
        width: '30%',
        textAlign: 'center',
        color: '#00a65a',
    },
});