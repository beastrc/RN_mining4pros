import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from 'react-native-button';
import { useNavigation } from '@react-navigation/native';

import PoolheaderScreen from '../insert/poolheader';
import Footer from '../insert/footer';

import blog1 from '../../assets/img/blog3.jpg';
import blog2 from '../../assets/img/blog2.jpg';
import blog3 from '../../assets/img/blog1.jpg';

const label = ["What is next on Mining4Pros?", "The future of Ethereum", "7 Reasons for Mining4Pros"];
const content = "September 21' - Mining4pros Manager";

const Blog = () => {

  const { navigate } = useNavigation();

  const BlogComponent = (props) => (
    <View>
      <Image source= { props.icon } style = { styles.blogImg }/>
      <View>
        <Text style = { styles.firstlabel } >{ props.firstlabel}</Text>
        <Text style = { styles.secondlabel } >{ content  } </Text>
        <Button 
          style = { styles.fullbutton } 
          onPress={() => {navigate('Pool')}}
        > Read Full Article </Button>
      </View>
    </View>
  );

  return (
      <ScrollView >
        <PoolheaderScreen />
        <View style = { styles.mainBoarder } >

          <View style = { styles.titleBar } >
              <Icon name='commenting' color= 'white' size={35} ></Icon>
              <Text style = { styles.titleMining } > Mining </Text>
              <Text style = { styles.titleFour } > 4 </Text>
              <Text style = { styles.titlePros } > Pros </Text>
              <Text style = { styles.titleBlog } > Blog </Text>
          </View>

          <View style = { styles.insideBorder }>
            <BlogComponent icon={ blog1 } firstlabel={ label[0] } />
            <BlogComponent icon={ blog2 } firstlabel={ label[1] } />
            <BlogComponent icon={ blog3 } firstlabel={ label[2] } />
          </View>
        </View>
        <Footer />
      </ScrollView>
    );

}
const styles = StyleSheet.create({
  mainBoarder: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    backgroundColor: '#e6e6e6',
    marginTop: 40,
    left: '5%',
    width: '90%',
    marginBottom: 50,
  },
  titleBar: {
    flexDirection: 'row',
    backgroundColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    width: '90%',
    height: 90,
    paddingLeft: 24,
    paddingTop: 20,
    marginTop: -30,
  },
  titleMining : {
    color: 'white',
    marginLeft: 10,
    fontSize: 24,
  },
  titleFour : {
    color: 'yellow',
    marginLeft: -12,
    fontSize: 24,
  },
  titlePros : {
    color: 'white',
    marginLeft: -12,
    fontSize: 24,
  },
  titleBlog : {
    color: 'white',
    fontSize: 24,
  },
  insideBorder : {
    backgroundColor : 'white',
    width: '84%',
    margin : 15,
    paddingLeft: '8%',
    paddingTop: 16,
  },
  blogImg: {
    width: 300,
    height: 200,
  },
  firstlabel: {
    color: "#8a1b1b",
    fontSize: 25,
    marginTop: 16,
  },
  secondlabel: {
    color: '#aaa',
    fontSize: 17,
    marginTop: 8,
  },
  fullbutton: {
    color: '#eee44a',
    fontSize: 18, 
    marginTop: 14,
    marginBottom: 32,
  },
});

export default Blog;

