import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Dashboard from './src/tabs/dashboard';
import More from './src/tabs/more';
import Products from './src/tabs/products';
import Storage from './src/tabs/storage';
import Orders from './src/tabs/orders';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Dashboard') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
            //(route.name === 'Settings') {

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Orders" component={Orders} />
        <Tab.Screen name="Products" component={Products} />
        <Tab.Screen name="Storage" component={Storage} />
        <Tab.Screen name="More" component={More} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
