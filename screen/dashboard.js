import { RouteWithoutLayout } from 'ra-core';
import React, { Component, useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Dimensions, FlatList } from 'react-native';
import Button from 'react-native-button';
import {LineChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';

// import js
import PoolheaderScreen from './insert/poolheader';
import Footer from './insert/footer';

const label = ['Minium Payout', 'Block Reward', 'Pool Fee', '(Pool Hashrate)', '(Miners Online)', '(Block height)', '(Network Hashrate)', '(Network Difficulty)', '(Total Paid)' ];
const apiLabel = ['Miners Online', 'Pool Hashrate', 'Block Height' ,'Network Hashrate', 'Total Paid','Network Difficulty' ];

const ApiInfoComponent = (props) => (
  <View style={ styles.oneRow }>
    <Text style={ styles.apiValueStyle }>{ props.apiValue}</Text>
    <Text style={ styles.apiLabelStyle }>{ props.apiLabel }</Text>
  </View>
);

const ButtonComponent = (props) => {
  const { navigate } = useNavigation();
  return(
    <Button 
      style={ styles.button }  
      onPress = { () => { 
        navigate({
          name: props.url,
          params: props.parameter
        })
      }}
    >{ props.buttonTitle }</Button>
  );
};

const DashboardComponent = ({props}) => (
  <View>
    <View style={ styles.infoHeader }>
      <View >
        <Text style={ styles.headerValue }>{ props.poolStats["connectedMiners"] }</Text>
      </View>
      <View>
        <Text style={styles.headerLabel}>{ apiLabel[0] }</Text>
      </View>
    </View>
    <View>
        <View style={ styles.infoPane }>
          <ApiInfoComponent apiValue={ setPoolrate(props.poolStats["poolHashrate"]) } apiLabel={ apiLabel[1] }/>
          <ApiInfoComponent apiValue={ props.networkStats["blockHeight"] } apiLabel={ apiLabel[2]} />
        </View>
        <View style={ styles.infoPane }>
          <ApiInfoComponent apiValue={ setHashRate(props.networkStats["networkHashrate"]) } apiLabel={ apiLabel[3] }/>
          <ApiInfoComponent apiValue={ setTotal(props.totalPaid) } apiLabel={ apiLabel[4] }/>
        </View>
        <View style={ styles.footerPane }>
          <ApiInfoComponent apiValue={ setDifficulty(props.networkStats['networkDifficulty']) } apiLabel={ apiLabel[5] }/>
        </View>
    </View>    
  </View>
);

const renderDashboard = (props) => (
  <DashboardComponent props = { props } />
);
function setPoolrate(PoolRate) {
  var rate;
  if (PoolRate>1000000000) {
    rate = (PoolRate/1000000000).toFixed(2);
    return rate+'GH/s';
  } else {
    rate = (PoolRate/1000000).toFixed(2);
    return rate;
  }
};
function setHashRate (HashRate){
  var rate;
  if(HashRate>1000000000000){
    rate = (HashRate/1000000000000).toFixed(2);
    return rate+'TH/s';
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
function setTotal(Total){
  var totalpaid;
  totalpaid = Total.toFixed(2);
  return totalpaid;
};
function selectApi(algorithmName){
  var apiUrl;
  switch(algorithmName){
    case 'ETH':
      apiUrl = 'https://mining4pros.com/api/pools/eth';
      break;
    case 'ZEC':
      apiUrl = 'https://mining4pros.com/api/pools/zec';
      break;
    case 'ZEN':
      apiUrl = 'https://mining4pros.com/api/pools/zen';
      break;
  }
  return apiUrl;
}

var hour = new Date().getHours();

const Dashboard = (props) => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  // console.log(data);

  var parameterName = props.route.params.name;
  // console.log('data1:', parameterName)
  
  useEffect(() => {
    // fetch('https://mining4pros.com/api/pools/eth')
    fetch(selectApi(parameterName))
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


  return (
      <ScrollView style={ styles.container }>
        <PoolheaderScreen />
        {/* Graph */}

        <View style={styles.graphContainer}>
            <View style={styles.rowElement}>
            </View>
            <View>
              <LineChart
                data={{
                  labels: ["6", "10", "14", "18", "22", "2", "6"],
                  datasets: [
                    {
                      data: [22, 34, 42, 33, 34, 45, 56, 76, 12, 33, 22, 67, 45, 34, 43, 46, 76, 86, 98, 100, 77, 56, 45 ]
                    }
                  ]
                }}
                width= { 420 } 
                height={220}
                yAxisSuffix = "G"
                // yAxisLabel="k"
                xAxisLabel=":00"
                yAxisInterval={1} 
                chartConfig={{
                  backgroundColor: "grey",
                  decimalPlaces: 2, 
                  color: (opacity = 1) => `rgba(238, 228, 74, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "black"
                  }
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16
                }}
              />
            </View>
        </View>
        
        <View style={styles.infoContainer}>       
          <View>
            {isLoading ? <Text>Loading...</Text> : 
              ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
                  <DashboardComponent props={data.pool}/>
                </View>
              )}
          </View>
        </View>
        {/* Server */}
        <View style={styles.serverInfo }>
          <Text style={styles.miningItem}>Mining servers</Text>
          <Text style={styles.secItem}>stratum+tcp://mining4pros.com:3092	</Text>
          <Text style={styles.secItem}>Difficulty Variable / 0.01 ↔ ∞</Text>
        </View>
        {/* buttongroup */}
        <View style={ styles.groupButton }>
          <View style={ styles.buttonPane }>
            <ButtonComponent buttonTitle="Blocks" url="Block" parameter={parameterName}/>
            <ButtonComponent buttonTitle="Miners" url="Miner" parameter={parameterName}/>
          </View>
          <View style={ styles.buttonPane }>
            <ButtonComponent buttonTitle="Payment" url="Payment" parameter={parameterName}/>
            <ButtonComponent buttonTitle="Quick Start" url="QuickStart"/>
          </View>
        </View>
        <Footer />
      </ScrollView>
    );
}
const styles = StyleSheet.create({
  test: {
    position: 'absolute',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
  },
  graphContainer: {
    margin:'4%',
    width: '92%',
    backgroundColor: '#f6f6f6',
  },
  rowElement: {
    flexDirection: 'row',
  },
  infoContainer: {
    left: '8%',
    width: '84%',
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    borderWidth:1,
    borderColor: 'grey',
    borderRadius: 16,
  },
  infoHeader: {
    paddingBottom: 20,
  },
  infoPane:{
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'grey',
    paddingTop : 8,
    paddingBottom: 12,
  },
  oneRow: {
    width: '40%',
    paddingLeft: '5%',
    marginRight: '10%',    
  },
  infoHeader:{
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: 'grey',
    paddingBottom: 12,
  },
  headerValue: {
    textAlign: 'center',
    fontSize: 16,
  },
  headerLabel: {
    textAlign: 'center',
    fontSize: 16,
  },
  apiValueStyle: {
    fontSize: 20,
  },
  apiLabelStyle: {
    paddingTop: 8,
    fontSize: 12,
  },
  footerPane: {
    textAlign:'center',
    justifyContent: 'center',
  },
  serverInfo: {
    alignItems: 'center',
    borderColor:'white',
    borderWidth:1,
    borderBottomColor: 'black',
    paddingTop: 20,
    paddingBottom: 40,
  },
  miningItem: {
    fontSize: 20,
  },
  secItem: {
    fontSize: 16,
    paddingTop: 12,
    fontWeight: 'bold',
  },
  groupButton:{
    flexDirection: 'row',
  },
  button: {
    borderWidth: 1,
    borderColor: '#eee44a',
    backgroundColor: '#eee44a',
    color:'black',
    // width: 200,

    margin: 20,
    marginTop: 12,
    padding: 12,
    fontSize: 20,
  }, 
  buttonPane: {
    width: '45%',
    left: '12%',
    paddingTop: 20,
    paddingBottom:20,
  },
});

export default Dashboard;
