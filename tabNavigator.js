import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

function TabBarIcon(props) {
  return <Image source={props.source} style={{ width: 24, height: 24 }} />;
}

export default function TabNavigator({ toggleTheme }) {
  const theme = useTheme();

  return (
    <NavigationContainer theme={{ colors: { background: theme.background } }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconSource;

            if (route.name === 'Home') {
              iconSource = require('../assets/home.png');
            } else if (route.name === 'Settings') {
              iconSource = require('../assets/settings.png');
            }

            return <TabBarIcon source={iconSource} />;
          },
          tabBarActiveTintColor: theme.primary,
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: theme.background },
          headerStyle: { backgroundColor: theme.background },
          headerTitleStyle: { color: theme.text },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} initialParams={{ toggleTheme }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
