import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import Button from 'react-native-button';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

import logoimage from '../../assets/img/logo.png';


const Poolheader = () => {
    const ButtonComponent = (props) => (
        <View>
            <Button style = { styles.headerButton } onPress={() => {navigate(props.route)}} >{ props.buttonName }</Button>
        </View>
    );
        
    const { navigate } = useNavigation();
    
    return (
        <SafeAreaView style={ styles.header } >
            <View style = { styles.rowElement }>
                <View>
                    <Image
                        source = { logoimage }
                        style = { styles.logo }
                    />
                </View>
                <View style = { styles.navigationGroup }>
                    <ButtonComponent buttonName="Pool" route="Pool"/>
                    <ButtonComponent buttonName="Blog" route="Blog"/>
                    <ButtonComponent buttonName="FAQ" route="FAQ"/>
                </View>
            </View>
        <View style={ styles.walletpane }>
            <TextInput
                placeholder='    Your Wallet Address'
                style = { styles.walletinput }
            />
            <View style = { styles.searchicon }>
                <Icon name='search' size={ 20 } color='white'></Icon>
            </View>
        </View>
      </SafeAreaView>
    );  
}
export default Poolheader;
// ...
const styles = StyleSheet.create({
    header:{
        backgroundColor: 'black',
        height: 170,
    },
    rowElement: {
        flexDirection: 'row',
    },
    navigationGroup: {
        flexDirection: 'row',
        top: 22,
        left: 160,
    },
    headerButton: {
        width: 70,
        color: 'white',
        borderWidth: 1,
        // borderColor: 'red',
        fontSize: 20,
        marginLeft: 8,
        paddingLeft: 4,
        paddingRight: 4,
    },
    logo: {
        width: 60,
        height: 60,
        marginTop: 10,
        marginBottom: 10,
        left: 30,
    },
    buttongroup: {
        position: 'relative',
        flexDirection: 'row',
        marginTop: 10,
        left: '65%',
    },
    button: {
        marginLeft: 40,
        color: 'white',
    },
    walletpane : {
        flexDirection: 'row',
    },
    walletinput: {
        backgroundColor: 'white',
        marginLeft: '5%',
        height: 40,
        borderRadius: 6,
        borderBottomRightRadius: 0,
        borderTopRightRadius:0,
        width: '80%',
    },
    searchicon: {
        backgroundColor: 'black',
        borderWidth:2,
        borderColor: 'white',
        borderRadius: 3,
        borderTopLeftRadius:0,
        borderBottomLeftRadius:0,
        padding: 7,
    },
});