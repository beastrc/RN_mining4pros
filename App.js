import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import Button from 'react-native-button';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PoolScreen from './screen/bottomtab/pool';
import BlogScreen from './screen/webscreen/blog';
import FaqScreen from './screen/webscreen/faq';
import TestScreen from './screen/bottomtab/test';
import DashboardScreen from './screen/dashboard';
import ContactScreen from './screen/bottomtab/contact';

import BlockScreen from './screen/stackscreen/blocks';
import PaymentScreen from './screen/stackscreen/payments';
import QuickStartScreen from './screen/stackscreen/quickstart';
import MinersScreen from './screen/stackscreen/miners';
// webscreen
import WebScreen from './screen/web';
import InstagramScreen from './screen/webscreen/instagram';
import ApidocScreen from './screen/webscreen/apidoc';
import GpusetupScreen from './screen/webscreen/gpusetup';
import MiningtutorialScreen from './screen/webscreen/miningtutorial';
import YoutubeScreen from './screen/webscreen/youtube';

const Tab = createBottomTabNavigator();

const TabRoute = ({ navigation }) => {
  return(
    <Tab.Navigator>
      <Tab.Screen 
        name="Pool" 
        component= { PoolScreen } 
        options={{
          headerShown:false,
          tabBarLabel: 'Pool',
          tabBarIcon: ({ color }) => (
            <Icon 
              name="sort-amount-up-alt" 
              size={25} 
              color= { color }
            />
          )
        }}              
      />
      <Tab.Screen 
        name="Blog" 
        component= { BlogScreen } 
        options={{
          headerShown:false,
          tabBarLabel: 'Blog',
          tabBarIcon: ({ color }) => (
            <Icon 
              name="blog" 
              size={25} 
              color= { color }
            />
          )
        }}                
      />
      <Tab.Screen 
        name="FAQ" 
        component= { FaqScreen } 
        options={{
          headerShown:false,
          tabBarLabel: 'FAQ',
          tabBarIcon: ({ color }) => (
            <Icon 
              name="question-circle" 
              size={25} 
              color= { color }
            />
          )
        }}                
      />
      <Tab.Screen 
        name="Dashboard" 
        component= { DashboardScreen } 
        options={{
          headerShown:false,
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color }) => (
            <Icon 
              name="sort-amount-up-alt" 
              size={25} 
              color= { color }
            />
          )
        }}              
      />
      <Tab.Screen 
        name="Block" 
        component= { BlockScreen } 
        options={{
          headerShown:false,
          tabBarLabel: 'Block',
          tabBarIcon: ({ color }) => (
            <Icon 
              name="question-circle" 
              size={25} 
              color= { color }
            />
          )
        }}                
      />
      <Tab.Screen 
        name="Miner" 
        component= { MinersScreen } 
        options={{
          headerShown:false,
          tabBarLabel: 'Miner',
          tabBarIcon: ({ color }) => (
            <Icon 
              name="question-circle" 
              size={25} 
              color= { color }
            />
          )
        }}                
      />
      <Tab.Screen 
        name="QuickStart" 
        component= { QuickStartScreen } 
        options={{
          headerShown:false,
          tabBarLabel: 'Quick Start',
          tabBarIcon: ({ color }) => (
            <Icon 
              name="question-circle" 
              size={25} 
              color= { color }
            />
          )
        }}                
      />
      <Tab.Screen 
        name="Payment" 
        component= { PaymentScreen } 
        options={{
          headerShown:false,
          tabBarLabel: 'Payment',
          tabBarIcon: ({ color }) => (
            <Icon 
              name="question-circle" 
              size={25} 
              color= { color }
            />
          )
        }}                
      />
      <Tab.Screen 
        name="webview" 
        component= { WebScreen } 
        options={{
          headerShown:false,
          tabBarLabel: 'Web',
          tabBarIcon: ({ color }) => (
            <Icon 
              name="question-circle" 
              size={25} 
              color= { color }
            />
          )
        }}                
      />
    </Tab.Navigator>    
  );
};

const NavigateRoute = createStackNavigator();

 // const HomeScreen = ({ navigation }) => {
//   return (
//     <Button
//       title="Go to Jane's profile"
//       onPress={() =>
//         navigation.navigate('Profile', { name: 'JaneW' })
//       }
//     />
//   );
// };
// const ProfileScreen = ({ navigation, route }) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };

function NavigationStackScreen (){
  return(
    <NavigateRoute.Navigator>
      {/* <NavigateRoute.Screen name="Contact" component={ ContactScreen } options={{ headerShown:false }}/> */}

      <NavigateRoute.Screen name="Pool" component={ PoolScreen } options={{headerShown:false}} />
      <NavigateRoute.Screen name="Blog" component={ BlogScreen } options={{headerShown:false}}/>
      <NavigateRoute.Screen name="FAQ" component={ FaqScreen } options={{headerShown:false}}/>
      <NavigateRoute.Screen name="Dashboard" component={ DashboardScreen } options={{ headerShown:false }}/>
      <NavigateRoute.Screen name="Contact" component={ ContactScreen } options={{ headerShown:false }}/>

      <NavigateRoute.Screen name="Block" component={ BlockScreen } />
      <NavigateRoute.Screen name="Payment" component={ PaymentScreen }  />
      <NavigateRoute.Screen name="QuickStart" component={ QuickStartScreen } options={{headerShown:false}} />
      <NavigateRoute.Screen name="Miner" component={ MinersScreen } />

      {/* <NavigateRoute.Screen name="Web" component={ WebScreen } options={{headerShown:false}} /> */}
{/* WebView */}
      <NavigateRoute.Screen name="Instagram" component={ InstagramScreen } options={{headerShown:false}} />
      <NavigateRoute.Screen name="ApiDoc" component={ ApidocScreen } options={{headerShown:false}} />
      <NavigateRoute.Screen name="Gpusetup" component={ GpusetupScreen } options={{headerShown:false}} />
      <NavigateRoute.Screen name="Youtube" component={ YoutubeScreen } options={{headerShown:false}} />
      <NavigateRoute.Screen name="MiningTutorial" component={ MiningtutorialScreen } options={{headerShown:false}} />

    </NavigateRoute.Navigator>
  );
};

// const NavigateRoute = ({ navigation }) => {
// };

export default function App() {
  return (
    <View style={styles.container}>
        <NavigationContainer>
            <NavigationStackScreen />
        </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0,
  },
});
