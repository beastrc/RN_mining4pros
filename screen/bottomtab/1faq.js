import React, { Component } from 'react';
import { ScrollView ,StyleSheet, Text, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import PoolheaderScreen from '../insert/poolheader';
import Footer from '../insert/footer';

const subject = [
  "Rewards and Payouts",
  "How to Set Up ASIC devices",
  "How does Mining4pros mining pool work?",
  "Wallets and Wallet Software"
];

const titles = [
  "How does PPLNS pool reward system work?",
  "How to withdraw coins?",
  "Pending balance - what does that mean?",
  "How to Setup A10, A11 or Linzhi Phoenix Miner?",
  "How to Setup Z9,Z11 or Z15?",
  "How does the mining pool work?",
  "What is a block?",
  "What is a share?",
  "What does share difficulty mean?",
  "How can I calculate the expected profit?",
  "What is Luck?",
  "How to create a wallet for crypto coins?",
  "Can I mine to an exchange wallet?",
];

const contents = [
  "The payout system used in Mining4Pros pool uses the reward system 'Pay Per Last N Shares' - PPLNS. This system checks how many shares you've sent from the last N shares of the pool and makes payouts based on the value. Your share in each round is shown on your personal statistic site.",
  "Payouts are processed automatically every x hours. To get the payout you need to reach the minimum amount in each pool. The minimum payout value is shown on the main page of each pool. It is not possible to manually change this value. Any rewards accumulated by a given address may only be paid to that particular address.",
  "Every block found by the pool needs to be confirmed before the pool is rewarded. For that process we wait a defined number of follow up blocks (120 for ETH for example). After the block is confirmed we move the balance to unpaid balance.",
  "Mining pools get solutions from all the connected miners, and if one of those numerous solutions appears to be a proper one, the pool gets a reward for the created block. This reward is shared proportionally to the efforts applied by the miners and forwarded to their wallets.",
  "A block is a record of all transactions in a given time frame. New transactions are being processed by miners into new blocks which are added to the end of the blockchain.",
  "A share is a possible solution for an upcoming block.",
  "Share difficulty is the value at which we accept the incoming shares. Compared to the Network difficulty, which is the value at which the Ethereum network accepts your share as a valid solution for the next block.",
  "Mining is probabilistic in nature, if you find a block earlier than you statistically should on average you are lucky if it takes longer, you are unlucky. In a perfect World you would find a block on 100% luck value. Less then 100% means you were lucky. More then 100% means you were unlucky.",
  "Every coin has an official wallet with complete blockchain. It could take a lot of disc space on your computer. You could also use a wallet address generated on a crypto exchange. Every coin has also a help page 'How to start' -> usually it has a link to an official wallet and/or crypto exchange that supports this coin.",
  "Yes. You could mine to an exchange wallet. Mining4Pros work fine with exchange wallet addresses.",

];

const asicData = [
  {
    title: "How to Setup A10, A11 or Linzhi Phoenix Miner?",
    content1: "First you have to find your miner ip in your local network and then enter the browser interface by typing that address in your browser. ",
    content2: "Default Login for Innosilicon A10 and A11:",
    userLabel: "user : admin",
    passwordLabel1 : "password : admin",
    content3 : "Now you had to Settings > Pools:",
    URLLabel : "URL : stratum+tcp://mining4pros.com:3092",
    workerLabel : "Worker : YOUR_ETH_WALLET_ADDRESS.ASIC_Workername",
    passwordLabel2 : "Password : x",
  },
  {
    title:"How to Setup Z9,Z11 or Z15?",
    content1 : " First you have to find your miner ip in your local network and then enter the browser interface by typing that address in your browser. ",
    content2 : "Default Login for Antminers: ",
    userLabel : "user : root",
    passwordLabel1 : "password : root",
    content3 : "Now you had to Miner Configuration: ",
    URLLabel : "URL : stratum+tcp://mining4pros.com:3082 ",
    workerLabel : "Worker : YOUR_ZEC_WALLET_ADDRESS.ASIC_Workername ",
    passwordLabel2 : "Password : x",  
  }
];

const miningData = [

  {
    title : "How can I calculate the expected profit?",
    content : "1.) You can use an online tool like https://2cryptocalc.com.2.) You can use this equation: (Your_Hashrate / Network_Hashrate) * Network Blocks last 24 h * Currency Price. This will output the value you can expect in $ for 24h time frame."
  },
];

const profitData = [
  {
    title: "How can I calculate the expected profit?",
    content1: "1.) You can use an online tool like https://2cryptocalc.com.",
    content2: "2.) You can use this equation: (Your_Hashrate / Network_Hashrate) * Network Blocks last 24 h * Currency Price.",
    content3: "This will output the value you can expect in $ for 24h time frame.",
  }
];
SubjectComponent = (props) => (
  <View>
    <Text style = { styles.subjectLabel }>{ props.subject }</Text>
  </View>
);

const FaqComponent = (props) => (
  <View>
    <View style = { styles.faqContent }>
      <Text style = { styles.titleLabel } >{ props.title }</Text>
      <Icon name="down" color='grey' size={ 20 } style = { styles.downIcon }></Icon>
    </View>
    <View>
      <Text style = { styles.contents }>{ props.content }</Text>
    </View>
  </View>
);

const AsicComponent = ({props}) => (
  <View >
    <View style = { styles.faqContent }>
      <Text style = { styles.titleLabel }>{props.title}</Text>
      <Icon name="down" color='grey' size={ 20 } style = { styles.downIcon }></Icon>
    </View>
    <View>
      <Text style = { styles.asicContent }>{props.content1}</Text>
      <Text style = { styles.asicContent }>{props.content2}</Text>
      <Text style = { styles.asicContent }>{props.userLabel}</Text>
      <Text style = { styles.asicContent }>{props.passwordLabel1}</Text>
      <Text style = { styles.asicContent }>{props.content3}</Text>
      <Text style = { styles.asicContent }>{props.URLLabel}</Text>
      <Text style = { styles.asicContent }>{props.workerLabel}</Text>
      <Text style = { styles.asicContent }>{props.passwordLabel2}</Text>
    </View>
  </View>
);

const ProfitComponent = ({props}) => (
  <View>
    <View style = { styles.faqContent }>
      <Text style = { styles.titleLabel } >{ props.title }</Text>
      <Icon name="down" color='grey' size={ 20 } style = { styles.downIcon }></Icon>
    </View>
    <View>
      <Text style = { styles.profitStyle }>{ props.content1 }</Text>
      <Text style = { styles.profitStyle }>{ props.content2 }</Text>
      <Text style = { styles.profitStyle }>{ props.content3 }</Text>
    </View>
  </View>
);

export default class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false,
    }
    this.showContent = this.showContent.bind(this);
    // this.showContent1 = this.showContent1.bind(this);
    // this.showContent2 = this.showContent2.bind(this);
    // this.showContent3 = this.showContent2.bind(this);
  }
  showContent() {
    this.setState({ render: !this.state.render });
  }
  render() {
    return (
      <ScrollView >
        <PoolheaderScreen />
        <View style = { styles.rowElement }>
          <Text style = { styles.poolLabel }>POOL</Text>
          <Text style = { styles.questionLabel }>questions & answers</Text>
        </View>

        <View>
          <Text style = { styles.faqLabel }>FAQ</Text>
          {/* <Subject */}
          <View>
            <SubjectComponent subject={ subject[0] } />
            <FaqComponent title={ titles[0] } content={ contents[0] } />
            <FaqComponent title={ titles[1] } content={ contents[1] } />
            <FaqComponent title={ titles[2] } content={ contents[2] } />
          </View>
          <View>
            <SubjectComponent subject={ subject[1] }/>
            <AsicComponent props= {asicData[0]} />
            <AsicComponent props= {asicData[1]} />
          </View>
          <View>
            <SubjectComponent subject={ subject[2] }/>
            <FaqComponent title={ titles[5] } content={ contents[3] } />
            <FaqComponent title={ titles[6] } content={ contents[4] } />
            <FaqComponent title={ titles[7] } content={ contents[5] } />
            <FaqComponent title={ titles[8] } content={ contents[6] } />
            <ProfitComponent props={ profitData[0] }/>
            <FaqComponent title={ titles[10] } content={ contents[7] } />
          </View>
          <View>
            <SubjectComponent subject={ subject[3] }/>
            <FaqComponent title={ titles[11] } content={ contents[8] } />
            <FaqComponent title={ titles[12] } content={ contents[9] } />

          </View>

        </View>
        <Footer />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  rowElement: {
    flexDirection: 'row',
  },
  poolLabel: {
    fontSize: 24,
    marginLeft: 20,
  },
  questionLabel: {
    marginTop: 12,
    marginLeft: 5,
    fontSize: 14,
  },
  faqLabel: {
    fontSize: 24,
    marginTop: 50,
    marginLeft: 40,
    marginBottom: 50,
  },
  subjectLabel: {
    fontSize: 22,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 42,
    paddingBottom: 20,
  },
  faqContent: {
    marginLeft: '5%',
    paddingRight: '10%',
    width: '85%',
    borderWidth: 1,
    borderLeftColor: 'transparent',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    flexDirection: 'row',
    paddingTop: '1%',
    maxHeight: 110,
  },
  titleLabel: {
    width: '92%',
    marginLeft: '8%',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
  },
  downIcon: {
    paddingTop: '8%',
    marginLeft: -5,
  },
  drowDoubleIcon: {
    marginLeft: -5,
    paddingTop: '5%',
  },
  contents: {
    padding: '15%',
    paddingTop: 20,
    paddingBottom: 25,
    fontSize: 16,
  },
  asicContent: {
    padding: '15%',
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 16,    
  },
  profitStyle: {
    paddingTop:8,
    paddingBottom: 8,
    paddingLeft: '10%',
    width: '85%'
  },
});