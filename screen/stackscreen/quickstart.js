import 'react-native-gesture-handler';

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView  } from 'react-native';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Poolheader from '../insert/poolheader';
import Footer from '../insert/footer';
const ItemLabel = ["Crypto Coin name", "Coin Algorithm", "Pool Wallet", "Payout Scheme", "Minium Payment", "Pool Fee", "stratum+tcp://mining4pros.com:3092"];

const stepLabel = [
    "Step 1 - Create a Wallet",
    "Step 2 - Download Mining Software (GPU)",
    "Step 3 - Edit the bat file",
    "ASIC Settings",
    "Settings for Antminer E3, Innosilicon A10 ETH Master, Linzhi Phoenix:",
    "Mining rig rentals and Nicehash"
];

const guide = [
    "You could download the wallet a copy of the entire blockchain here:",
    "Or you could use an online wallet such as myEtherWallet ",
    "GPU:",
    "For NVIDA and AMD GPU's we recommend Phoenixminer",
    "Download ready to go version of ",
    "(Linux and Winodws,archive password - mining4pros)",
    "Use YOUR_WALLET_ADDRESS that you've created on Step 1.",
    "Example: 0x00192Fb10dF37c9FB26829eb2CC623cd1BF599E8",
    "If you want, you can Change RIG_ID in the bat file.",
    "Specify the name of the rig as you want it to be shown in miner's statistics page. This field is not mandatory. You could leave it empty.",
    "Length of RIG_ID - Maximum 32 characters. Use English letters, numbers and symbols '-' and '_'.",
    "Example: rig-1",
    "This pool works with ASIC Miners.",
    "URL:stratum+tcp://mining4pros.com:3092",
    "Workers:YOUR_WALLET_ADDRESS.ASIC_ID",
    "Password:x",
    "Use YOUR_WALLET_ADDRESS that you've created on Step 1.",
    "Example: 0x00192Fb10dF37c9FB26829eb2CC623cd1BF599E8, If you want, you can Change ASIC_ID - specify the name of the ASIC as you want it to be shown in miner's statistics page.",
    "This field is not mandatory. You could leave it empty.Length of ASIC_ID - Maximum 32 characters.",
    "Use English letters,numbers and symbols '-' and '_'.",
    "Example: ASIC-1",
    "This pool works with rig rental services ",
    "and",
    "Settings for ",
    "Sometimes Nicehash exits the pool test with en error. Don't worry.",
    "Name: Mining4Pros ETH",
    "Type: Dagger-Hashimoto (Ethash)",
    "Pool Host: mining4pros.com:3092",
    "Workername (-u): YOUR_WALLET_ADDRESS",
    "Password (-p): x",
    "We are working with Nicehash every day.",
    "Mining4Pros is a officially supported Nicehash pool.",
    "Just go ahead and proceed with the order.",
    "Custom pool name: mining4pros ETH",
    "Algorithm: DaggerHashimoto",
    "Stratum hostname or",
    "IP: mining4pros.com",
    "Username: YOUR_WALLET_ADDRESS",
    "Password: x",
];
const link = [
    "https://geth.ethereum.org/docs/install-and-build/installing-geth",
    "https://www.myetherwallet.com",
    "Phoenixminer here ",
    "Miningrigrentals.com",
    "Nicehash.com",
    "Miningrigrentals.com:",
];
const urlAddress = [
    "https://geth.ethereum.org/docs/install-and-build/installing-geth",
    "https://www.myetherwallet.com/",
    "https://binance.com/",
    "https://mining4pros.com/app/Setup.zip",
    "https://www.miningrigrentals.com/?ref=41992",
    "https://nicehash.com/",
    "https://www.miningrigrentals.com/",
];

const DashboardComponent = ({props}) => (
    <View style={styles.apiTableStyle}>
        <View style={styles.tdStyle}>
            <Text style={styles.apiLabel}>{ItemLabel[0] }</Text>
            <Text style={styles.apiValue}>{ props.coin['name'] } ({ props.coin['symbol'] })</Text>
        </View>
        <View style={styles.tdStyle}>
            <Text style={styles.apiLabel}>{ItemLabel[1] }</Text>
            <Text style={styles.apiValue}>{ props.coin['algorithm'] }</Text>
        </View>        
        <View style={styles.tdStyle}>
            <Text style={styles.apiLabel}>{ItemLabel[2] }</Text>
            <Text style={styles.apiValue}>{ props.address }</Text>
        </View>        
        <View style={styles.tdStyle}>
            <Text style={styles.apiLabel}>{ItemLabel[3] }</Text>
            <Text style={styles.apiValue}>{ props.paymentProcessing['payoutScheme'] }</Text>
        </View>        
        <View style={styles.tdStyle}>
            <Text style={styles.apiLabel}>{ItemLabel[4] }</Text>
            <Text style={styles.apiValue}>{ props.paymentProcessing['minimumPayment'] } ETH</Text>
        </View>        
        <View style={styles.tdStyle}>
            <Text style={styles.apiLabel}>{ItemLabel[5] }</Text>
            <Text style={styles.apiValue}>{ props.poolFeePercent }%</Text>
        </View>        
        <View style={styles.tdStyle}>
            <Text style={styles.apiLabel}>{ItemLabel[6] }</Text>
            <Text style={styles.apiValue}>{ }</Text>
        </View>        

    </View>
  );

const renderQuickstart = ({ item }) => (
    <DashboardComponent props={ item } />
);

export default Quickstart = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    // console.log(data);
  
    useEffect(() => {
      fetch('https://mining4pros.com/api/pools/eth')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

    return (
        <ScrollView style={{ flex: 1}}>
            <Poolheader />
            <View style={ styles.rowElement }>
                    <Text style={ styles.poolLabel }>POOL</Text>
                    <Text style={ styles.connectionLabel }>connection</Text>
            </View>
            <View>
                <View style={ styles.boardTitle }>
                        <Text style={ styles.firstSecLabel }>Pool Configuration</Text>
                        <Text style={ styles.secSetLabel }>All you need to connect your miners</Text>
                    </View>
                <View style={ styles.firstSector } >
                    <View>
                        {isLoading ? <Text>Loading...</Text> : 
                        ( <View>
                            {/* <Text style={ styles.titleLabel }>Blocks</Text> */}   
                            {/* <QuickstartComponent props={data.pool}/> */}
                            <DashboardComponent props={data.pool}/>
                            {/* <FlatList
                                data={data.pool}
                                keyExtractor={({ id }, index) => id}
                                renderItem={ renderQuickstart }
                            /> */}
                        </View>
                        )}
                    </View>
                </View>
            </View>
            <View>

                <View style={ styles.boardTitle }>
                        <Text style={ styles.firstSecLabel }>Miner Configuration</Text>
                        <Text style={ styles.secSetLabel }>This is the basic guide how to setup your miner to this pool.</Text>
                    </View>
                <View style={ styles.secSector } >
                    <View>
                        <Text style={ styles.guideLabel }>Quick start guide ETH</Text>
                        <View>
                            <View>
                                <Text style={ styles.stepLabel }>{stepLabel[0]}</Text>
                                <View style={ styles.contentStyle }>
                                    <Text >
                                    You could download the wallet a copy of the entire blockchain here:</Text>
                                    <Text style={ styles.linkStyle }> 
                                     https://geth.ethereum.org/docs/install-and-build/installing-geth
                                    </Text>
                                    <Text>
                                        Or you could use an online wallet such as myEtherWallet 
                                    </Text>
                                    <Text style={ styles.linkStyle }>
                                        (https://www.myetherwallet.com).
                                    </Text>
                                    <Text>
                                        Another option is to generate an address directly on a crypto exchange such as 
                                    </Text>
                                    <Text style={ styles.linkStyle }>
                                        binance.com
                                    </Text>
                                    <Text>or Gate.io</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={ styles.stepLabel }>{stepLabel[1]}</Text>
                                <View>
                                    
                                </View>
                            </View>
                            <View>
                                <Text style={ styles.stepLabel }>{stepLabel[2]}</Text>
                            </View>
                            <View>
                                <Text style={ styles.stepLabel }>{stepLabel[3]}</Text>
                            </View>

                        </View>
                    </View>
                </View>

            </View>

            <Footer />
        </ScrollView>
    );  
}

// ...
const styles = StyleSheet.create({
    firstSector: {
        marginTop: -50,
        margin: 24,

        padding: 4,

        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
    },
    boardTitle: {
        borderWidth:1,
        borderRadius: 8,
        borderColor: 'black',
        width: '80%',
        left: '10%',
        alignItems: 'center',
        backgroundColor: 'black',

        padding: 8,
    },
    poolLabel:{
        fontSize: 32,
        paddingLeft: 20,
        paddingBottom: 20,
    },
    connectionLabel:{
        paddingTop: 18,
        paddingLeft: 8,
        paddingBottom: 20,
        paddingBottom: 20,
        fontSize: 16,
    },
    firstSecLabel: {
        color: '#eee44a',
        fontSize: 24,
        fontWeight: 'bold',
    },
    apiTableStyle:{
        paddingTop: 60,
        paddingLeft: 20,
    },
    tdStyle:{
        paddingTop: 4,
        paddingBottom: 4,
    },
    apiLabel:{
        fontSize: 18,
        fontWeight:'bold',
    },
    apiValue:{
        fontSize: 18,
    },
    secSetLabel: {
        color: 'white',
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 10,
    },
    titleLabel: {
        fontSize: 24,
        color: 'black',
    },
    rowElement: {
        flexDirection: 'row',
    },
    //second sector
    secSector: {
        marginTop: -50,
        margin: 24,

        padding: 4,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,        
    },
    guideLabel: {
        paddingTop: 72,
        paddingBottom: 12,
        paddingLeft: 12,
        fontSize: 32,
    },
    stepLabel: {
        paddingLeft: 12,
        paddingBottom: 12,
        fontSize: 20,
    },
    linkStyle: {
        color:'#007bff',
    },
    contentStyle:{
        paddingLeft: 12,
        lineHeight: 25,
    },
});