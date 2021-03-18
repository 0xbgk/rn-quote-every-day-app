import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './scenes/HomeScreen';
import SettingsScreen from './scenes/SettingsScreen';
import { CustomTabBar } from './components/CustomTabBar';

const Tab = createBottomTabNavigator();

const Index = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={props => <CustomTabBar {...props} />}>

        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Index;