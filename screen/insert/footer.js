import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { TouchableOpacity, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

import logoimage from '../../assets/img/logo.png';

const LinkComponent = (props) => {
  const { navigate } = useNavigation();
   return(
    <View>
        <Text style={ styles.linkLabel }>{ props.label }</Text>
        <TouchableOpacity onPress = { () => { navigate(props.url) } }>
            <Text style={ styles.linkUrlLabel }>{ props.linkUrl }</Text>
        </TouchableOpacity>       
    </View>
   );
};
TwoLinkComponent = (props) => {
  const { navigate } = useNavigation();
    return(
        <View>
            
            <Text style={ styles.linkLabel }>{ props.label }</Text>
            <TouchableOpacity onPress = { () => { navigate(props.url1) } } >
                <Text style={ styles.linkUrlLabel }>{ props.UrlLabel1 }</Text>
            </TouchableOpacity>       
            <TouchableOpacity onPress = { () => { navigate(props.url2) } }>
                <Text style={ styles.linkUrlLabel }>{ props.UrlLabel2 }</Text>
            </TouchableOpacity>
        </View>
    ); 
};
const Footer = () => {
    const { navigate } = useNavigation();
    return (
      <SafeAreaView  >
        <View style={ styles.footerSection }>
            <View style={ styles.LinkSetion }>
                <View style={ styles.LinkPart }>
                    <LinkComponent label="Products" linkUrl="GPU Setup" url="Gpusetup" />
                    <TwoLinkComponent label="Helps" UrlLabel1="Mining Tutorials" UrlLabel2="FAQ" url1="MiningTutorial" url2="FAQ"/>
                </View>
                <View style={ styles.LinkPart }>
                    <LinkComponent label="Services" linkUrl="Api Documentation" url="ApiDoc" />
                    <LinkComponent label="Contact Us" linkUrl="Contact & Partnerships" url="Contact"/>
                </View>
            </View>
            <View style={ styles.bottomLogo }>
                <View style={ styles.rowElement }>
                    <Image source={logoimage} style={ styles.logoStyle }></Image>
                    <View style={ styles.logoLetter }>
                        <Text style={ styles.miningLabel }>Mining</Text>
                        <Text style={ styles.fourLabel }>4</Text>
                        <Text style={ styles.miningLabel }>pros</Text>
                    </View>
                </View>
                <View style={ styles.rowElement }>
                    <Icon name="copyright" size={ 30 } color="white"></Icon>
                    <Text style={ styles.privacyLabel }>2021 Mining4pros. All rights reserved</Text>
                </View>
                <View style={ styles.rowElement }>
                    <Icon name="instagram" size={ 30 } color="white" onPress = { () => { navigate('Instagram') } }></Icon>
                    <Icon name="youtube" size={ 30 } color="white" onPress = { () => { navigate('Youtube') } }></Icon>
                </View>
            </View>
        </View>

      </SafeAreaView>
    );  
}
export default Footer;
// ...
const styles = StyleSheet.create({
    rowElement: {
        flexDirection: 'row',
        paddingBottom: 12,
    },
    footerSection: {
        backgroundColor: 'black',
        marginTop:32,
        paddingTop: 32,
        paddingBottom: 32,
    },
    LinkSetion: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    LinkPart: {
        width: '40%',
    },
    linkLabel: {
        color: '#eee44a',
        paddingTop: 20,
    },
    linkUrlLabel: {
        color: 'white',
        paddingTop:20,
    },
    bottomLogo: {
        marginTop: 32,
        left: 40,
    },
    logoStyle: {
        width: 70,
        height: 70,
    },
    logoLetter: {
        flexDirection: 'row',
        paddingTop: 16,
        paddingLeft: 20,
    },
    miningLabel: {
        fontSize: 24,
        color: 'white',
    },
    fourLabel: {
        color: '#eee44a',
        fontSize: 24,
    },
    privacyLabel: {
        paddingTop: 2,
        paddingLeft: 20,
        fontSize: 16,
        color: 'white',
    },
});
