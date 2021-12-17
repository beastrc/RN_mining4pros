import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput,Image, FlatList, TouchableOpacity } from 'react-native';
import Button from 'react-native-button';

import PoolheaderScreen from '../insert/poolheader';
import Footer from '../insert/footer';

const LabelComponent = (props) => {
    return(
        <View>
            <Text style={styles.labelStyle}>{ props.label }</Text>
                <TextInput 
                    placeholder={ props.placeholder }
                    style={styles.inputStyle}
                ></TextInput>
        </View>
    );
};
const MessageComponent = ( props ) => {
    return(
        <View>
            <Text style={ styles.labelStyle }>{ props.label }</Text>
            <TextInput
                placeholder={ props.placeholder }
                multiline={ true }
                numberOfLines={ 5 }
                autoComplete = { props.autoComplete }
                style={ styles.inputStyle }
            ></TextInput>
        </View>
    );
};

export default Pool = () =>  {
  
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch('https://mining4pros.com/api/pools')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);
  
      return (
        <ScrollView>
            <PoolheaderScreen />
            <View>
                <View style={styles.contactContainer}>
                    <View>
                        <Text style={styles.topicLabel}>Contact us</Text>
                        <LabelComponent label="Name" placeholder="Your Name" autoComplete="name" flag="0"/>
                        <LabelComponent label="Email" placeholder="Your email" autoComplete="email" flag="0"/>
                        <LabelComponent label="Phone" placeholder="Phone#" flag="0"/>
                        <LabelComponent label="Company" placeholder="Company Name" />
                        <MessageComponent label="Message" placeholder="Write your message"></MessageComponent>
                        <Button style={styles.sendButton}>SEND MESSAGE</Button>
                    </View>
                    <View style={styles.blackPane}>
                        <View style={styles.blackPanel}>
                            <View style={styles.rowElement}>
                                <Text style={styles.miningText}>Mining</Text>
                                <Text style={styles.fourText}>4</Text>
                                <Text style={styles.prosText}>Pros</Text>
                            </View>

                            <Text style={styles.descriptionText}>Wether you are an investor, who wants to invest in the future or an innovator, who is interested in collabarating and shaping the future Please feel free to send us a request Let us make history together</Text>
                        </View>
                    </View>
                </View>

            </View>
            <Footer />
        </ScrollView>
      );  
  }
  
  const styles = StyleSheet.create({
    contactContainer: {
        marginTop: 40,
        width: '84%',
        left: '8%',
        borderWidth:1,
        borderColor: 'grey',
        borderRadius: 8,
    },
    rowElement: {
        flexDirection: 'row',
    },
    topicLabel: {
        fontSize: 24,
        paddingTop: 12,
        paddingLeft: 24,
    },
    labelStyle: {
        padding:4,
        color: 'grey',
        paddingTop: 32,
        paddingBottom: 12,

        left: 20,
    },
    inputStyle: {
        left: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        fontSize: 16,
        paddingLeft: 12,
        paddingBottom: 8,
        marginBottom: 8,
        width: '90%',
    },
    sendButton: {
        color: 'white',
        backgroundColor: 'black',
        width: '60%',
        padding: 12,
        left: 20,
        marginTop: 24,
        marginBottom: 72,
    },
    blackPane:{
        backgroundColor: 'black',
        paddingTop: 20,
    },
    blackPanel: {
        left: '10%',
        width: '80%',
    },
    miningText: {
        color: 'white',
        fontSize: 20,
    },
    fourText: {
        color: 'yellow',
        fontSize: 20,
    },
    prosText: {
        color:'white',
        fontSize: 20,
    },
    descriptionText: {
        paddingTop: 20,
        paddingBottom: 12,
        lineHeight: 24,
        color:'grey',
    },
  });