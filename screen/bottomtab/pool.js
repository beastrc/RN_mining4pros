import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import Button from 'react-native-button';

import PoolheaderScreen from '../insert/poolheader';
import Footer from '../insert/footer';

import ethicon from '../../assets/img/icon/eth.png';
import zecicon from '../../assets/img/icon/zec.png';
import zenicon from '../../assets/img/icon/zen.png';
import { useNavigation } from '@react-navigation/native';

const tableHeads = [ 'Pool coin', 'Algorithm', 'Miners', 'Pool Hashrate', 'Fee', 'Network Hashrate', 'Network Difficulty' ];
const units = ["GH/s", "MSol/s", "TH/s","GSol/s"];

function iconSelect(coinName)  {
  var icon;
  switch(coinName){
    case 'Ethereum':
      icon = ethicon;
      break;
    case 'ZCash':
      icon = zecicon;
      break;
    case 'Zencash':
      icon = zenicon;
      break;
    }
    return icon;
};
function unitSet(coinName) {
  var unit;
  switch(coinName){
    case 'Ethereum':
      unit = units[0];
      break;
    case 'ZCash':
      unit = units[1];
      break;
    case 'Zencash':
      unit = units[1];
      break;
    }
    return unit;
};
function unit2Set(coinName){
  var unit;
  switch(coinName){
    case 'Ethereum':
      unit = units[2];
      break;
    case 'ZCash':
      unit = units[3];
      break;
    case 'Zencash':
      unit = units[3];
      break;
    }
    return unit;
};
function setPoolrate(PoolRate) {
  var rate;
  if (PoolRate>1000000000) {
    rate = (PoolRate/1000000000).toFixed(2);
    return rate;
  } else {
    rate = (PoolRate/1000000).toFixed(2);
    return rate;
  }
};
function setHashRate (HashRate){
  var rate;
  if(HashRate>1000000000000){
    rate = (HashRate/1000000000000).toFixed(2);
    return rate;
  } else {
    rate = (HashRate/1000000000).toFixed(2);
    return rate;
  }
};

function setDifficulty (Difficulty){
  var difficulty;
  if (Difficulty>1000000000000000) {
    difficulty = (Difficulty/1000000000000000).toFixed(2);
    return difficulty+'P';
  } else {
      difficulty = (Difficulty/1000000).toFixed(2);
      return difficulty+'M';
  }
};

const PoolInfoComponent = ({props}) => {
  const { navigate } = useNavigation();
  return (
    // <View style={ styles.infoTable }>
    <TouchableOpacity style={ styles.infoTable } onPress = { () => { navigate({name : 'Dashboard', params: {name: props.coin['type'] } }) } }>     
      <View style={ styles.headerPane }>
          <View style={ styles.leftPane }>
            <Image source={ iconSelect( props.coin['name'] ) } />
          </View>
          <View>
            <View style={ styles.headerInfo }>
              <View style={ styles.apiLabelPane }>
                <Text style={ styles.apiLabel }>{ props.coin['name'] }</Text>
              </View>
              <View >
                <Text style={ styles.apiValue }>{ setPoolrate(props.poolStats['poolHashrate']) }{ unitSet(props.coin['name']) }</Text>
              </View>
            </View>
          </View>
      </View>

      <View style={ styles.rowElement }>
        <View style={ styles.leftPane }>
          <Text style={ styles.algorithmName }>{ props.coin['algorithm'] }</Text>
        </View>
        <View>
        <View >
          <View style={ styles.infoPane }>
            <View style={ styles.apiLabelPane }>
              <Text style={ styles.apiLabel }>{ tableHeads[2] }</Text>
            </View>
            <View style={ styles.apiValuePane }>
              <Text style={ styles.apiValue }>{ props.poolStats['connectedMiners'] }</Text>
            </View>
          </View>
          <View style={ styles.infoPane }>
            <View style={ styles.apiLabelPane }>
              <Text style={ styles.apiLabel }>{ tableHeads[3] }</Text>
            </View>
            <View style={ styles.apiValuePane }>
              <Text style={ styles.apiValue }>{ setPoolrate(props.poolStats['poolHashrate']) }{ unitSet(props.coin['name']) }</Text>
            </View>
          </View>
          <View style={ styles.infoPane }>
            <View style={ styles.apiLabelPane }>
              <Text style={ styles.apiLabel }>{ tableHeads[4] }</Text>
            </View>
            <View style={ styles.apiValuePane }>
              <Text style={ styles.apiValue }>{ props.poolFeePercent+'%' }</Text>
            </View>
          </View>
          <View style={ styles.infoPane }>
            <View style={ styles.apiLabelPane }>
              <Text style={ styles.apiLabel }>{ tableHeads[5] }</Text>
            </View>
            <View style={ styles.apiValuePane }>
              <Text style={ styles.apiValue }>{ setHashRate(props.networkStats['networkHashrate']) }{ unit2Set(props.coin['name']) }</Text>
            </View>
          </View>
          <View style={ styles.infoPane }>
            <View style={ styles.apiLabelPane }>
              <Text style={ styles.apiLabel }>{ tableHeads[6] }</Text>
            </View>
            <View style={ styles.apiValuePane }>
              <Text style={ styles.apiValue }>{ setDifficulty(props.networkStats['networkDifficulty']) }</Text>
            </View>
          </View>

        </View>
        </View>
      </View>

      </TouchableOpacity>
    // </View>    
  );
};

const ItemInfo = ({ props }) => (
  <View>
      <Text >{ props.id + ' | ' + props.coin['name'] + ' | (' + props.coin['symbol'] + ') | ' + props.coin['algorithm'] + ' | ' + props.poolStats['connectedMiners'] + ' | ' + props.poolStats['poolHashrate'] + ' | ' + props.poolFeePercent + ' | ' + props.networkStats['networkHashrate'] + ' | ' + props.networkStats['networkDifficulty'] + ' | '  }</Text>
  </View>
);

const renderPool = ({ item }) => (
  <PoolInfoComponent props = { item } />
);

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
  const { navigate } = useNavigation();

    return (
      <ScrollView  >
        <PoolheaderScreen />
        <View style={ styles.rowElement }>
          <Text style={ styles.mining } >Mining</Text>
          <Text style={ styles.four }>4</Text>
          <Text style={ styles.pros }>pros</Text>
        </View>
        <View >
          <Text style= { styles.travel }>Travel our mining coins for best miner!</Text>
        </View>
        <View>
          {isLoading ? <Text>Loading...</Text> : 
            (<View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
                <FlatList
                  data={ data.pools }
                  keyExtractor={({ id }, index) => id}
                  renderItem={ renderPool }
                />
            </View>
          )}

          {/* <Button
            onPress={() => {
              navigate({
                name: 'Dashboard',
                params : { name:'eth' }
              })}}
            style= { styles.buttonStyle }
          >ETH</Button>
          <Button
            onPress={() => {navigate('Dashboard', { name: 'zec' })}
            }
            style= { styles.buttonStyle }
          >ZEC</Button> */}

        </View>
        <Footer />
      </ScrollView>
    );  
}

// ...
const styles = StyleSheet.create({
  //
  buttonStyle: {
    color: 'red',
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: 'blue',
  },
  //
  infoTable: {
    width: '84%',
    left: '8%',
    borderWidth : 1,
    borderRadius: 16,
    borderTopLeftRadius : 20,
    borderBottomLeftRadius: 20,

    marginBottom: 20,
  },
  headerPane: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    padding: 4,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  headerInfo: {
    flexDirection: 'row',
    paddingTop:4,
    paddingBottom: 4,
  },
  bodyPane: {
    
  },
  leftPane: {  
    width: '20%',
    alignItems: 'center', 
    // justifyContent: 'center',
    // backgroundColor: 'red',
  },
  iconStyle: {
    padding: 8,
  },
  algorithmName:{
    // transform : [{ rotate: '-90deg'}] ,
    // paddingRight: 60,
    // textAlign: 'left',
    // width: 80,
    // justifyContent: 'center',
  },
  rightPane: {
    flex: 8, 
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: 'blue', 
  },
  infoPane: {
    flexDirection: 'row',
    // padding: 4,
  },
  apiLabelPane: {
    left: '40%',
    width: '60%',
    padding: 4,
  },
  apiLabel: {
    fontSize: 16,
  },
  apiValuePane: {
    textAlign: 'right',
    padding: 4,
  },
  apiValue: {
    fontSize: 16,
  },
//
  rowElement: {
    flexDirection: 'row',
  },
  mining: {
    fontSize:48,
    paddingLeft: 28,
  },
  four: {
    color:'#eee44a',
    fontSize: 48,
  },
  pros: {
    fontSize:48,
  },
  travel: {
    paddingLeft: 32,
    fontSize: 17,
    paddingBottom: 30,
  },
  algorithmTable: {
    marginLeft: 32,
    marginRight: 32,
    borderColor: 'grey',
    borderWidth:1,
    borderRadius:8,
    padding:6,
    paddingLeft: 12,
  },
  rightLabel: {
    flexDirection: 'row',
    position: 'absolute',
    left: '55%',
  },
  leftLabel: {
    padding:3
  },
  minebutton: {
    marginLeft: '55%',
    borderColor: '#eee44a',
    backgroundColor: '#eee44a',
    width: '20%',
    height: 42,
    paddingTop: 8,
    color: 'black',
    fontSize: 14,
    borderRadius: 10,
    // shadowColor:'black',
    shadowOffset : { width: 50, height: 20},
    shadowColor: 'red',
  },
});

