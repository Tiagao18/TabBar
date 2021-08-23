import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screen/home';
import {NavigationContainer} from '@react-navigation/native';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import FeatherIcons from 'react-native-vector-icons/Feather';
import AntIcons from 'react-native-vector-icons/AntDesign';
import Button from './components/Button';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#fff',
          tabBarStyle: {
            backgroundColor: '#000',
            borderTopColor: 'rgba(255,255,255,0.3)',
          },
        }}>
        <Tab.Screen
          options={{
            tabBarIcon: ({size, color}) => (
              <EntypoIcons name="home" size={size} color={color} />
            ),
            headerShown: false,
          }}
          name="Home"
          component={HomeScreen}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({size, color}) => (
              <FeatherIcons name="search" size={size} color={color} />
            ),
            headerShown: false,
          }}
          name="Discover"
          component={HomeScreen}
        />

        <Tab.Screen
          options={{
            title: '',
            tabBarIcon: ({size, color}) => <Button />,
            headerShown: false,
          }}
          name="New"
          component={HomeScreen}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({size, color}) => (
              <EntypoIcons name="chat" size={size} color={color} />
            ),
            headerShown: false,
          }}
          name="Inbox"
          component={HomeScreen}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({size, color}) => (
              <AntIcons name="user" size={size} color={color} />
            ),
            headerShown: false,
          }}
          name="Profile"
          component={HomeScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
